(function () {
  'use strict';

  // --- Configuration & Constants ---
  const LANG_ZH = 'zh-TW';
  const LANG_EN = 'en-US';
  const STORAGE_KEY = 'preferred_lang';

  const META_DATA = {
    [LANG_ZH]: {
      title: '關於陳春天',
      description: '陳春天在半導體產業。'
    },
    [LANG_EN]: {
      title: 'About Gregorius Karisma',
      description: 'Gregorius Karisma in the semiconductor industry.'
    }
  };

  // Track render state to prevent duplicate canvas draws
  const renderedCache = {
    [LANG_ZH]: false,
    [LANG_EN]: false
  };

  // --- PDF.js Worker Configuration ---
  function initPdfWorker() {
    if (window.pdfjsLib && !window.pdfjsLib.GlobalWorkerOptions.workerSrc) {
      window.pdfjsLib.GlobalWorkerOptions.workerSrc =
        'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
    }
  }

  // --- DOM Elements ---
  const htmlRoot = document.documentElement;
  const pageTitle = document.getElementById('page-title');
  const pageDescription = document.getElementById('page-description');

  const btnZh = document.getElementById('btn-zh');
  const btnEn = document.getElementById('btn-en');

  const viewZh = document.getElementById('view-zh-TW');
  const viewEn = document.getElementById('view-en-US');

  const footerZh = document.getElementById('footer-zh-TW');
  const footerEn = document.getElementById('footer-en-US');

  // --- PDF Document Rendering Pipeline ---
  async function renderPdfDocument(lang) {
    if (renderedCache[lang]) {
      return;
    }

    if (!window.pdfjsLib) {
      setTimeout(function () {
        renderPdfDocument(lang);
      }, 50);
      return;
    }

    initPdfWorker();

    const containerId = lang === LANG_ZH ? 'pdf-render-zh' : 'pdf-render-en';
    const container = document.getElementById(containerId) ||
      (lang === LANG_ZH ? viewZh && viewZh.querySelector('.pdf-viewer') : viewEn && viewEn.querySelector('.pdf-viewer'));

    if (!container) {
      return;
    }

    const defaultPdf = lang === LANG_ZH ? 'resume_zh-TW.pdf' : 'resume_en-US.pdf';
    const pdfUrl = container.getAttribute('data-pdf') || defaultPdf;

    // Localized loading feedback
    const loadingText = lang === LANG_ZH ? '載入文件中...' : 'Loading document...';
    const errorText = lang === LANG_ZH ? '無法載入文件。' : 'Failed to load document.';

    container.innerHTML = `<div class="pdf-loading">${loadingText}</div>`;

    try {
      const loadingTask = window.pdfjsLib.getDocument({
        url: pdfUrl,
        cMapUrl: 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/cmaps/',
        cMapPacked: true,
        standardFontDataUrl: 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/standard_fonts/'
      });

      const pdf = await loadingTask.promise;
      container.innerHTML = '';

      // Determine robust width reference even if container is transitioning
      const pageContainer = document.querySelector('.page-container');
      const containerWidth = container.clientWidth || (pageContainer ? pageContainer.clientWidth - 64 : 860);
      const dpr = window.devicePixelRatio || 1;

      for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
        const page = await pdf.getPage(pageNum);

        const initialViewport = page.getViewport({ scale: 1.0 });
        const scale = (containerWidth / initialViewport.width) * dpr;
        const viewport = page.getViewport({ scale: Math.max(scale, 1.5) });

        const canvas = document.createElement('canvas');
        canvas.className = 'pdf-page-canvas';
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderContext = {
          canvasContext: canvas.getContext('2d'),
          viewport: viewport
        };

        await page.render(renderContext).promise;
        container.appendChild(canvas);
      }

      renderedCache[lang] = true;
    } catch (error) {
      container.innerHTML = `<div class="pdf-loading">${errorText}</div>`;
    }
  }

  // --- Language Switching Core ---
  function applyLanguage(targetLang, isManualChoice = false) {
    const activeLang = targetLang === LANG_EN ? LANG_EN : LANG_ZH;

    // Persist choice if user toggled manually
    if (isManualChoice) {
      try {
        localStorage.setItem(STORAGE_KEY, activeLang);
      } catch (e) {
        // Handle private browsing or restricted storage environments
      }
    }

    // Update HTML root attributes
    htmlRoot.setAttribute('lang', activeLang);
    htmlRoot.setAttribute('xml:lang', activeLang);

    // Update dynamic metadata
    if (pageTitle) {
      pageTitle.textContent = META_DATA[activeLang].title;
    }
    document.title = META_DATA[activeLang].title;

    if (pageDescription) {
      pageDescription.setAttribute('content', META_DATA[activeLang].description);
    }

    // Toggle navigation indicator
    if (btnZh && btnEn) {
      if (activeLang === LANG_ZH) {
        btnZh.classList.add('active');
        btnEn.classList.remove('active');
      } else {
        btnEn.classList.add('active');
        btnZh.classList.remove('active');
      }
    }

    // Toggle main content views
    if (viewZh && viewEn) {
      if (activeLang === LANG_ZH) {
        viewZh.classList.add('active');
        viewEn.classList.remove('active');
      } else {
        viewEn.classList.add('active');
        viewZh.classList.remove('active');
      }
    }

    // Toggle footer views
    if (footerZh && footerEn) {
      if (activeLang === LANG_ZH) {
        footerZh.classList.add('active');
        footerEn.classList.remove('active');
      } else {
        footerEn.classList.add('active');
        footerZh.classList.remove('active');
      }
    }

    // Render active PDF container lazily
    renderPdfDocument(activeLang);
  }

  // --- IP Geolocation & Initial Route Detection ---
  async function resolveInitialLanguage() {
    // 1. Priority: Existing manual preference in storage
    try {
      const savedLang = localStorage.getItem(STORAGE_KEY);
      if (savedLang === LANG_ZH || savedLang === LANG_EN) {
        applyLanguage(savedLang, false);
        return;
      }
    } catch (e) {
      // Local storage unavailable; continue to IP detection
    }

    // 2. IP Detection: Fetch user country code
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 3500);

      const response = await fetch('https://ipapi.co/json/', {
        signal: controller.signal,
        headers: { 'Accept': 'application/json' }
      });
      clearTimeout(timeoutId);

      if (response.ok) {
        const data = await response.json();
        if (data && data.country_code === 'US') {
          applyLanguage(LANG_EN, false);
          return;
        }
      }
    } catch (err) {
      // Fallback secondary endpoint if primary times out or is blocked
      try {
        const secondaryResponse = await fetch('https://freeipapi.com/api/json');
        if (secondaryResponse.ok) {
          const secondaryData = await secondaryResponse.json();
          if (secondaryData && secondaryData.countryCode === 'US') {
            applyLanguage(LANG_EN, false);
            return;
          }
        }
      } catch (secondaryErr) {
        // Geolocation endpoints blocked or unreachable
      }
    }

    // 3. Default: Any location outside the US or failed request displays zh-TW
    applyLanguage(LANG_ZH, false);
  }

  // --- Navigation Event Listeners ---
  if (btnZh) {
    btnZh.addEventListener('click', function () {
      applyLanguage(LANG_ZH, true);
    });
  }

  if (btnEn) {
    btnEn.addEventListener('click', function () {
      applyLanguage(LANG_EN, true);
    });
  }

  // --- Security & Anti-Tamper Measures ---
  
  // Disable context menu (right-click)
  document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
    return false;
  }, { capture: true });

  // Disable text selection via drag
  document.addEventListener('selectstart', function (event) {
    event.preventDefault();
    return false;
  }, { capture: true });

  // Block clipboard copy and cut operations
  document.addEventListener('copy', function (event) {
    event.preventDefault();
    return false;
  }, { capture: true });

  document.addEventListener('cut', function (event) {
    event.preventDefault();
    return false;
  }, { capture: true });

  // Disable keyboard shortcuts for copy, inspect, and printing
  document.addEventListener('keydown', function (event) {
    const isCtrlOrCmd = event.ctrlKey || event.metaKey;
    const key = event.key ? event.key.toLowerCase() : '';

    if (isCtrlOrCmd && (key === 'c' || key === 'x' || key === 'u' || key === 's' || key === 'p')) {
      event.preventDefault();
      return false;
    }
  }, { capture: true });

  // --- Anti-Translation Protections ---
  function enforceAntiTranslation() {
    if (!htmlRoot.classList.contains('notranslate')) {
      htmlRoot.classList.add('notranslate');
    }
    if (htmlRoot.getAttribute('translate') !== 'no') {
      htmlRoot.setAttribute('translate', 'no');
    }

    const gTranslateFrame = document.querySelector('.goog-te-banner-frame');
    if (gTranslateFrame) {
      gTranslateFrame.remove();
    }
    if (document.body && document.body.style.top !== '0px' && document.body.style.top !== '') {
      document.body.style.top = '0px';
    }
  }

  const translationObserver = new MutationObserver(function (mutations) {
    for (let i = 0; i < mutations.length; i++) {
      const mutation = mutations[i];
      if (mutation.type === 'attributes' && (mutation.attributeName === 'class' || mutation.attributeName === 'lang')) {
        enforceAntiTranslation();
      }
    }
  });

  translationObserver.observe(htmlRoot, {
    attributes: true,
    attributeFilter: ['class', 'lang', 'translate']
  });

  // --- Initialization ---
  document.addEventListener('DOMContentLoaded', function () {
    initPdfWorker();
    enforceAntiTranslation();
    resolveInitialLanguage();
  });

})();