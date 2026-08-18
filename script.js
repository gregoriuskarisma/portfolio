// Defines the navigation structure and multilingual metadata for the website pages.
const navigationData = [
    { 
        id: 'home', url: 'index.html', zhCN: '主页', zhTW: '首頁', en: 'Home', ja: 'ホーム',
        desc_zhCN: '概述专业背景及核心简介。', 
        desc_zhTW: '概述專業背景及核心簡介。', 
        desc_en: 'Summarizes professional background and core introduction.',
        desc_ja: '専門的な背景とコアな紹介の概要。'
    },
    { 
        id: 'experiences', url: 'experiences.html', zhCN: '经历', zhTW: '经历', en: 'Experiences', ja: '経歴',
        desc_zhCN: '展示工作经历与专业经验。', 
        desc_zhTW: '展示工作經歷與專業經驗。', 
        desc_en: 'Showcases work history and professional experience.',
        desc_ja: '職歴と専門的な経験を紹介します。'
    },
    { 
        id: 'educations', url: 'educations.html', zhCN: '教育', zhTW: '教育', en: 'Educations', ja: '学歴',
        desc_zhCN: '列出学历背景与学术成就。', 
        desc_zhTW: '列出學歷背景與學術成就。', 
        desc_en: 'Lists educational background and academic achievements.',
        desc_ja: '学歴と学術的な成果をリストアップします。'
    },
    { 
        id: 'certifications', url: 'certifications.html', zhCN: '证书', zhTW: '證照', en: 'Certifications', ja: '資格',
        desc_zhCN: '详列专业执照与技术认证。', 
        desc_zhTW: '詳列專業執照與技術認證。', 
        desc_en: 'Details professional licenses and technical certifications.',
        desc_ja: '専門的なライセンスと技術認定の詳細。'
    },
    { 
        id: 'projects', url: 'projects.html', zhCN: '项目', zhTW: '專案', en: 'Projects', ja: 'プロジェクト',
        desc_zhCN: '展示技术项目与应用分析。', 
        desc_zhTW: '展示技術專案與應用分析。', 
        desc_en: 'Displays technical projects and applied analyses.',
        desc_ja: '技術プロジェクトと応用分析を表示します。'
    },
    { 
        id: 'volunteers', url: 'volunteers.html', zhCN: '志愿', zhTW: '志工', en: 'Volunteers', ja: 'ボランティア',
        desc_zhCN: '概述志愿服务与社区贡献。', 
        desc_zhTW: '概述志工服務與社區貢獻。', 
        desc_en: 'Outlines volunteer work and community contributions.',
        desc_ja: 'ボランティア活動と地域社会への貢献の概要。'
    },
    { 
        id: 'skills', url: 'skills.html', zhCN: '技能', zhTW: '技能', en: 'Skills', ja: 'スキル',
        desc_zhCN: '详述专业技能与技术能力。', 
        desc_zhTW: '詳述專業技能與技術能力。', 
        desc_en: 'Details professional skills and technical proficiencies.',
        desc_ja: '専門的なスキルと技術的能力の詳細。'
    },
    { 
        id: 'recommendations', url: 'recommendations.html', zhCN: '推荐', zhTW: '推薦', en: 'Recommendations', ja: '推薦',
        hidden: true,
        desc_zhCN: '提供专业推荐与学术认可。', 
        desc_zhTW: '提供專業推薦與學術認可。', 
        desc_en: 'Provides professional recommendations and academic endorsements.',
        desc_ja: '専門的な推薦と学術的な承認を提供します。'
    },
    { 
        id: 'publications', url: 'publications.html', zhCN: '出版', zhTW: '出版', en: 'Publications', ja: '出版物',
        desc_zhCN: '展示书面出版物与学术文章。', 
        desc_zhTW: '展示書面出版品與學術文章。', 
        desc_en: 'Showcases written publications and academic articles.',
        desc_ja: '執筆した出版物と学術記事を紹介します。'
    },
    { 
        id: 'courses', url: 'courses.html', zhCN: '课程', zhTW: '課程', en: 'Courses', ja: 'コース',
        desc_zhCN: '列出修读的学术与技术课程。', 
        desc_zhTW: '列出修讀的學術與技術課程。', 
        desc_en: 'Lists academic and technical coursework completed.',
        desc_ja: '修了した学術および技術コースのリスト。'
    },
    { 
        id: 'honors', url: 'honors.html', zhCN: '荣誉', zhTW: '榮譽', en: 'Honors', ja: '受賞歴',
        desc_zhCN: '重点展示学术奖项与荣誉。', 
        desc_zhTW: '重點介紹學術獎項與榮譽。', 
        desc_en: 'Highlights academic awards and honors.',
        desc_ja: '学術的な賞と栄誉をハイライトします。'
    },
    { 
        id: 'scores', url: 'scores.html', zhCN: '成绩', zhTW: '成績', en: 'Scores', ja: 'スコア',
        desc_zhCN: '详列标准化考试成绩。', 
        desc_zhTW: '詳列標準化考試成績。', 
        desc_en: 'Details standardized test scores.',
        desc_ja: '標準テストのスコアの詳細。'
    },
    { 
        id: 'languages', url: 'languages.html', zhCN: '语言', zhTW: '語言', en: 'Languages', ja: '言語',
        desc_zhCN: '列出语言能力与熟练程度。', 
        desc_zhTW: '列出語言能力與熟練程度。', 
        desc_en: 'Lists language proficiencies and fluency levels.',
        desc_ja: '言語能力と流暢さのレベルをリストアップします。'
    },
    { 
        id: 'organizations', url: 'organizations.html', zhCN: '组织', zhTW: '組織', en: 'Organizations', ja: '组织',
        desc_zhCN: '概述参与的社团与组织。', 
        desc_zhTW: '概述參與的社團與組織。', 
        desc_en: 'Outlines involvement in societies and organizations.',
        desc_ja: '協会や組織への参加の概要。'
    },
    { 
        id: 'causes', url: 'causes.html', zhCN: '公益', zhTW: '公益', en: 'Causes', ja: '社会貢献',
        desc_zhCN: '列出支持的社会公益事业。', 
        desc_zhTW: '列出支持的社會公益事業。', 
        desc_en: 'Lists supported social and charitable causes.',
        desc_ja: '支援している社会的・慈善的な活動のリスト。'
    },
    { 
        id: 'milestones', url: 'milestones.html', zhCN: '历程', zhTW: '歷程', en: 'Milestones', ja: 'マイルストーン',
        desc_zhCN: '按时间顺序展示重大事件。', 
        desc_zhTW: '按時間順序展示重大事件。', 
        desc_en: 'Displays significant milestones in chronological order.',
        desc_ja: '重要なマイルストーンを時系列で表示します。'
    },
    { 
        id: 'contacts', url: 'contacts.html', zhCN: '联系', zhTW: '聯絡', en: 'Contacts', ja: '連絡先',
        desc_zhCN: '提供专业联系方式与链接。', 
        desc_zhTW: '提供專業聯絡方式與連結。', 
        desc_en: 'Provides professional contact information and links.',
        desc_ja: '専門的な連絡先情報とリンクを提供します。'
    },
    { 
        id: 'terms', url: 'terms-and-conditions.html', zhCN: '条款', zhTW: '條款', en: 'Terms & Conditions', ja: '利用規約',
        hidden: true, 
        desc_zhCN: '阐述法律免责声明与数据隐私政策。', 
        desc_zhTW: '闡述法律免責聲明與資料隱私政策。', 
        desc_en: 'Explains legal disclaimers and data privacy policies.',
        desc_ja: '法的免責事項とデータプライバシーポリシーを説明します。'
    }
];

// Defines the regional and linguistic mappings for the UI
const languageData = [
    {
        regionHeader: { zhTW: '東亞', zhCN: '东亚', ja: '東アジア', en: 'East Asia' },
        options: [
            { code: 'zh-TW', regionLabel: '台灣' },
            { code: 'zh-CN', regionLabel: '中国' },
            { code: 'ja', regionLabel: '日本' }
        ]
    },
    {
        regionHeader: { zhTW: '東南亞', zhCN: '东南亚', ja: '東南アジア', en: 'Southeast Asia' },
        options: [
            { code: 'en-SG', regionLabel: 'Singapore' }
        ]
    },
    {
        regionHeader: { zhTW: '北美', zhCN: '北美', ja: '北米', en: 'North America' },
        options: [
            { code: 'en-US', regionLabel: 'United States' }
        ]
    },
    {
        regionHeader: { zhTW: '國際', zhCN: '国际', ja: '国際', en: 'International' },
        options: [
            { code: 'en-001', regionLabel: 'International' }
        ]
    }
];

// Clears local storage if three days have elapsed since the initial visit.
function handleHardDeadline() {
    const firstVisit = localStorage.getItem('firstVisitTimestamp');
    const now = Date.now();
    const THREE_DAYS = 259200000;
    
    if (!firstVisit) {
        localStorage.setItem('firstVisitTimestamp', now);
    } else if (now - parseInt(firstVisit) > THREE_DAYS) {
        localStorage.clear();
        localStorage.setItem('firstVisitTimestamp', now);
        return true;
    }
    return false;
}

// Updates the document language attributes and saves the preference to local storage.
function setLanguage(lang) {
    const body = document.body;
    
    // Purge all possible language designation classes to prevent logical conflicts
    body.classList.remove('lang-en-US', 'lang-en-SG', 'lang-en-001', 'lang-zh-CN', 'lang-zh-TW', 'lang-ja');
    
    if (lang.startsWith('en')) {
        body.classList.add(`lang-${lang}`);
        document.documentElement.lang = lang;
    } else if (lang === 'zh-TW') {
        body.classList.add('lang-zh-TW');
        document.documentElement.lang = "zh-TW";
    } else if (lang === 'ja') {
        body.classList.add('lang-ja');
        document.documentElement.lang = "ja";
    } else {
        body.classList.add('lang-zh-CN');
        document.documentElement.lang = "zh-CN";
    }
    
    localStorage.setItem('preferredLanguage', lang);
    updateNavigation();
    renderContacts();
    renderLanguages();
}

// Populates navigation menus and updates page metadata based on the current active URL.
function updateNavigation() {
    const triggerContainer = document.getElementById('active-page-display');
    const dropdownList = document.getElementById('pages-dropdown-list');
    if (!triggerContainer || !dropdownList) return;
    
    const path = window.location.pathname.split("/").pop() || 'index.html';
    const activePage = navigationData.find(item => item.url === path) || navigationData[0];
    const currentLang = localStorage.getItem('preferredLanguage') || 'zh-TW';
    
    // Base definition for routing logic
    const baseLang = currentLang.startsWith('en') ? 'en' : currentLang;
    const specificKeySuffix = currentLang.replace('-', '');
    
    const langKeyMap = { 'zh-CN': 'zhCN', 'zh-TW': 'zhTW', 'en': 'en', 'ja': 'ja' };
    const descKeyMap = { 'zh-CN': 'desc_zhCN', 'zh-TW': 'desc_zhTW', 'en': 'desc_en', 'ja': 'desc_ja' };
    const ownerNames = { 'zh-CN': '陈春天', 'zh-TW': '陳春天', 'en': 'Gregorius Karisma', 'ja': 'グレゴリウス・カリスマ' };
    
    const baseLangKey = langKeyMap[baseLang];
    const baseDescKey = descKeyMap[baseLang];
    
    // Logical OR operator creates a fallback chain prioritizing specific regional keys over the universal base key
    const finalTitle = activePage[specificKeySuffix] || activePage[baseLangKey];
    const finalDesc = activePage[`desc_${specificKeySuffix}`] || activePage[baseDescKey];
    
    document.title = `${finalTitle} - ${ownerNames[baseLang]}`;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && finalDesc) {
        metaDescription.setAttribute('content', finalDesc);
    }
    
    triggerContainer.innerHTML = `
        <span class="zh-CN">网页：${activePage.zhCN} <span class="nav-icon">▼</span></span>
        <span class="zh-TW">網頁：${activePage.zhTW} <span class="nav-icon">▼</span></span>
        <span class="en">Page: ${activePage.en} <span class="nav-icon">▼</span></span>
        <span class="ja">ページ：${activePage.ja} <span class="nav-icon">▼</span></span>
    `;
    
    dropdownList.innerHTML = navigationData
        .filter(item => !item.hidden)
        .map(item => {
            const isActive = item.url === path ? 'style="color: var(--text-meta); font-weight: 700;"' : '';
            return `
                <a href="${item.url}" ${isActive}>
                    <span class="zh-CN">${item.zhCN}</span>
                    <span class="zh-TW">${item.zhTW}</span>
                    <span class="en">${item.en}</span>
                    <span class="ja">${item.ja}</span>
                </a>`;
        }).join('');
}

// Injects dynamic CSS box shadows to create a decorative starry background effect.
function generateSpaceBackground() {
    const getShadows = (count) => {
        let shadows = [];
        const colors = ['rgba(255, 255, 255, 0.9)', 'rgba(255, 255, 255, 0.7)', 'rgba(255, 255, 255, 0.5)'];
        for (let i = 0; i < count; i++) {
            shadows.push(`${Math.floor(Math.random() * 100)}vw ${Math.floor(Math.random() * 100)}vh ${colors[Math.floor(Math.random() * colors.length)]}`);
        }
        return shadows.join(', ');
    };
    
    const style = document.createElement('style');
    style.innerHTML = `
        body::before, .lang-popup-overlay::before { box-shadow: ${getShadows(150)}; } 
        body::after, .lang-popup-overlay::after { box-shadow: ${getShadows(80)}; }
    `;
    document.head.appendChild(style);
}

// Initializes an intersection observer to trigger CSS glow animations on timeline elements.
function initTimelineObserver() {
    const connectors = document.querySelectorAll('.barbell-connector');
    if (connectors.length === 0) return;
    
    const observerOptions = {
        root: null,
        threshold: 0.5,
        rootMargin: "0px 0px -10% 0px"
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('glow');
            }
        });
    }, observerOptions);
    
    connectors.forEach(el => observer.observe(el));
}

// Initializes an intersection observer to trigger hardware-accelerated counting animations for statistics.
function initCounterAnimation() {
    const statItems = document.querySelectorAll('.stat-number');
    if (statItems.length === 0) return;

    const observerOptions = {
        root: null,
        threshold: 0.2,
        rootMargin: "0px"
    };

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Initialize the perpetual loop.
                startPerpetualLoop();
                // Unobserve immediately to prevent spawning duplicate animation loops if the user scrolls away and back.
                counterObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const statsSection = document.getElementById('statistics');
    if (statsSection) {
        counterObserver.observe(statsSection);
    }

    // Encapsulated loop logic
    function startPerpetualLoop() {
        const duration = 2000; // Animation runtime in milliseconds
        const holdTime = 4000; // Milliseconds to display the final target number before resetting

        function runCycle() {
            statItems.forEach(item => {
                const target = parseInt(item.getAttribute('data-target'));
                let startTime = null;

                // Applies a cubic ease-out mathematical model for deceleration.
                function easeOutCubic(t) {
                    return 1 - Math.pow(1 - t, 3);
                }

                // Syncs the counting execution with the display refresh rate via requestAnimationFrame.
                function updateCount(timestamp) {
                    if (!startTime) startTime = timestamp;
                    const progress = timestamp - startTime;
                    
                    let t = Math.min(progress / duration, 1);
                    const currentVal = Math.floor(target * easeOutCubic(t));
                    
                    item.innerText = currentVal;

                    if (progress < duration) {
                        requestAnimationFrame(updateCount);
                    } else {
                        item.innerText = target;
                    }
                }
                
                // Hardware-accelerated reset to 0 before initiating the frame requests
                item.innerText = "0"; 
                requestAnimationFrame(updateCount);
            });

            // Schedule the next execution cycle (Duration of animation + hold delay)
            setTimeout(runCycle, duration + holdTime);
        }

        // Trigger the initial cycle
        runCycle();
    }
}

// Executes initialization scripts once the HTML document has fully loaded.
document.addEventListener('DOMContentLoaded', () => {
    // 1. Inject the static shell first
    injectLanguagePopup();
    injectNavigation();
    injectFooter();

    // 2. Generate the dynamic UI nodes into the newly injected shell
    renderLanguageUI();
    renderContacts();
    renderLanguages();

    // Security Injection: Initialize the deterrence layer
    initSecurityDeterrence();

    // 3. Initialize state variables
    const hasBeenPurged = handleHardDeadline();
    const savedLang = localStorage.getItem('preferredLanguage');
    const langPopup = document.getElementById('lang-popup-overlay');
    
    const slider = document.getElementById('lang-slider');
    const btnSelect = document.getElementById('btn-region-select');
    
    const navElement = document.querySelector('nav');
    const mainElement = document.querySelector('main');
    const footerElement = document.querySelector('footer');

    const setInertState = (state) => {
        if (navElement) navElement.inert = state;
        if (mainElement) mainElement.inert = state;
        if (footerElement) footerElement.inert = state;
    };
    
    if (savedLang && !hasBeenPurged) {
        setLanguage(savedLang);
        if (langPopup) langPopup.style.display = 'none';
        setInertState(false); 

        // Trigger cookie banner for returning users who haven't acknowledged it
        if (!localStorage.getItem('cookieConsentAcknowledged')) {
            setTimeout(() => {
                injectCookieBanner();
                const banner = document.getElementById('cookie-banner');
                
                // Force a DOM reflow to register the starting CSS state
                void banner.offsetWidth;

                // Add the class to trigger the CSS transition
                banner.classList.add('show-banner');
                
                document.getElementById('btn-cookie-understood').addEventListener('click', () => {
                    localStorage.setItem('cookieConsentAcknowledged', 'true');
                    banner.classList.remove('show-banner');
                    setTimeout(() => banner.remove(), 600);
                });
            }, 3000);
        }

    } else {
        if (langPopup) {
            langPopup.style.display = 'flex';
            setInertState(true);
            // Apply optimistic default state BEFORE asynchronous fetch to prevent text node FOUC
            document.body.classList.add('lang-en-001'); 
            // Trigger asynchronous layout mutation for first-time users
            resolveAndMutateOverlay();
        }
    }
    
    // 4. Reveal the DOM (FOUC Mitigation execution)
    document.body.classList.add('dom-loaded');

    // 5. EVENT LISTENERS

    // --- Navigation Affordance Logic ---
    const pagesMenu = document.getElementById('pages-menu');
    const footerLangTrigger = document.getElementById('footer-lang-trigger');
    
    // Evaluate interaction history to toggle visual affordance
    if (!localStorage.getItem('navDiscovered')) {
        if (pagesMenu) pagesMenu.classList.add('pulse-attention');
        
        // Callback function to strip animations and update storage
        const markAsDiscovered = () => {
            localStorage.setItem('navDiscovered', 'true');
            if (pagesMenu) pagesMenu.classList.remove('pulse-attention');
        };

        // Bind desktop and mobile interaction events
        if (pagesMenu) {
            pagesMenu.addEventListener('mouseenter', markAsDiscovered, { once: true });
            pagesMenu.addEventListener('touchstart', markAsDiscovered, { once: true });
        }
    }

    // Bind the click event to the new footer globe button
    if (footerLangTrigger && langPopup && slider) {
        footerLangTrigger.addEventListener('click', () => {
            // 1. Preemptively shift the slider to Page 2
            slider.classList.add('slide-active');

            // 2. Apply the invisible state before unhiding the container
            langPopup.classList.add('fade-out');
            langPopup.style.display = 'flex';

            // 3. Force a synchronous DOM reflow to paint the starting opacity: 0 state
            void langPopup.offsetWidth;

            // 4. Remove the invisible state to trigger the CSS opacity: 1 transition
            langPopup.classList.remove('fade-out');

            // 5. Disable background interaction
            setInertState(true);
        });
    }

    // Bind the sliding animation to the "Select Region" button (Initial Onboarding)
    if (btnSelect && slider) {
        btnSelect.addEventListener('click', () => {
            slider.classList.add('slide-active');
        });
    }

    // Bind the regional selection elements to the popup wrapper
    document.querySelectorAll('.popup-lang-option').forEach(option => {
        option.addEventListener('click', () => {
            setLanguage(option.getAttribute('data-lang'));
            executePopupDismissal();
        });
    });
    
    // 6. Initialize remaining UI functions
    generateSpaceBackground();
    updateNavigation();
    initTimelineObserver();
    initCounterAnimation();
    initCardFadeObserver();
    updateCopyrightYear();

    // Initializes the fade-in and fade-out scroll animations for all cards.
    function initCardFadeObserver() {
        const cards = document.querySelectorAll(`
            .job-item, 
            .stat-item, 
            .cause-list li, 
            .contact-list li, 
            .course-list li, 
            .language-list li, 
            .skills-grid li, 
            .services-list li
        `);

        if (cards.length === 0) return;

        const observerOptions = {
            root: null,
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px"
        };

        let delayCounter = 0;
        let batchTimeout = null;
        const baseDelay = 75; // Optimal 75ms delay per item

        const cardObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.transitionDelay = `${delayCounter * baseDelay}ms`;
                    entry.target.classList.add('is-visible');
                    
                    delayCounter++;

                    if (batchTimeout) clearTimeout(batchTimeout);
                    batchTimeout = setTimeout(() => {
                        delayCounter = 0;
                    }, 100); 

                } else {
                    entry.target.style.transitionDelay = '0ms';
                    entry.target.classList.remove('is-visible');
                }
            });
        }, observerOptions);

        cards.forEach(card => cardObserver.observe(card));
    }
});

// Dynamically constructs and injects language UI components
function renderLanguageUI() {
    const popupScrollList = document.querySelector('.popup-scroll-list');

    if (!popupScrollList) return;

    // Clear any existing hardcoded HTML elements
    popupScrollList.innerHTML = '';
    const popupFragment = document.createDocumentFragment();

    languageData.forEach((region, index) => {
        // Inject divider between region categories, skipping the first element
        if (index > 0) {
            const divider = document.createElement('div');
            divider.className = 'dropdown-divider';
            popupFragment.appendChild(divider);
        }

        // Inject dynamic region header
        const header = document.createElement('div');
        header.className = 'dropdown-header';
        header.innerHTML = `
            <span class="static-zh-TW">${region.regionHeader.zhTW}</span>
            <span class="zh-CN"> · ${region.regionHeader.zhCN}</span>
            <span class="ja"> · ${region.regionHeader.ja}</span>
            <span class="en"> · ${region.regionHeader.en}</span>
        `;
        popupFragment.appendChild(header);

        // Iterate through options to populate the regional popup links
        region.options.forEach(lang => {
            const optionLink = document.createElement('a');
            optionLink.href = 'javascript:void(0)';
            optionLink.className = 'popup-lang-option';
            optionLink.setAttribute('data-lang', lang.code);
            optionLink.textContent = lang.regionLabel;
            popupFragment.appendChild(optionLink);
        });
    });

    // Execute single-pass DOM insertion
    popupScrollList.appendChild(popupFragment);
}

// Retrieves the user's local year and injects it into the copyright elements.
function updateCopyrightYear() {
    const currentYear = new Date().getFullYear();
    const yearNodes = document.querySelectorAll('.copyright-year');
    
    yearNodes.forEach(node => {
        node.textContent = currentYear;
    });
}

// Dynamically injects the static shell of the language popup overlay
function injectLanguagePopup() {
    const popupTemplate = `
        <div id="lang-popup-overlay" class="lang-popup-overlay" style="display: none;">
            <div class="lang-popup-content">
                <div class="popup-viewport">
                    <div class="popup-slider" id="lang-slider">
                        <div class="popup-page">
                            
                            <!-- Text Nodes with Hybrid Display States -->
                            <h2 class="popup-title static-zh-TW">歡迎。</h2>
                            <p class="popup-msg static-zh-TW">歡迎來到我的專業作品集，我是陳春天。隨著半導體產業加速向美國西南部回流，迫切需要能夠無縫適應美國工程標準與台灣製造生態系統的專業人才，而我正致力於填補此一關鍵的營運缺口。目前，我正在亞利桑那州立大學攻讀資訊系統管理碩士學位，專注於將材料科學與半導體元件的堅實基礎與先進的資料分析技術相結合。秉持著「高科技、高精密、高準確度」的個人工作理念，我運用 Python、SQL、R、MATLAB、Java 及 Tableau 等核心技術，將各種製造指標轉化為極具獲利價值的商業智慧。此外，我精通中文與英文，並具備基礎的台語能力，這項跨文化溝通優勢使我能為美國本土的無晶圓廠設計公司與海外晶圓代工廠夥伴促成高度專業化的技術溝通，確保關鍵的設計原則與製造公差正確無誤，始終專注於為工程與策略團隊提供數據驅動的解決方案。</p>
                            <p class="popup-msg zh-TW">請在下方選擇您的所在地區，以享有最佳的瀏覽體驗。</p>
                            <p class="popup-msg zh-CN">请在下方选择您所在的地区，以获得最佳浏览体验。</p>
                            <p class="popup-msg ja">最適な閲覧体験のために、以下からお住まいの地域をお選びください。</p>
                            <p class="popup-msg en">Please choose your region below for the best browsing experience.</p>
                            
                            <!-- Bypass Button -->
                            <button id="btn-bypass-region" class="control-btn" style="margin: 30px auto 10px; width: fit-content; min-width: 200px; font-weight: 600; color: var(--btn-text); background: var(--accent-soft);">
                                Continue with International
                            </button>

                            <!-- Select Region Button (Default State) -->
                            <button id="btn-region-select" class="control-btn" style="margin: 0 auto; width: fit-content; min-width: 200px; font-weight: 600; color: var(--text-main);">
                                Select Region ▶
                            </button>
                        </div>
                        <div class="popup-page">
                            <div class="popup-scroll-list"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('afterbegin', popupTemplate);
}

// Resolves user location and mutates the language popup overlay
async function resolveAndMutateOverlay() {
    const bypassBtn = document.getElementById('btn-bypass-region');
    const selectBtn = document.getElementById('btn-region-select');
    
    // Fallback default language payload if geolocation fails
    let resolvedLang = 'en-001';

    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 1000);
        
        // Non-blocking fetch to a public geolocation API
        const response = await fetch('https://ipapi.co/json/', { signal: controller.signal });
        clearTimeout(timeoutId);
        
        if (response.ok) {
            const data = await response.json();
            const country = data.country_code;
            
            switch (country) {
                case 'CN':
                    bypassBtn.innerText = '继续前往中国';
                    selectBtn.innerText = '选择地区 ▶';
                    resolvedLang = 'zh-CN';
                    break;
                case 'JP':
                    bypassBtn.innerText = '日本版へ進む';
                    selectBtn.innerText = '地域を選択 ▶';
                    resolvedLang = 'ja';
                    break;
                case 'TW':
                    bypassBtn.innerText = '繼續前往台灣';
                    selectBtn.innerText = '選擇地區 ▶';
                    resolvedLang = 'zh-TW';
                    break;
                case 'SG':
                    bypassBtn.innerText = 'Continue with Singapore';
                    resolvedLang = 'en-SG';
                    break;
                case 'US':
                    bypassBtn.innerText = 'Continue with United States';
                    resolvedLang = 'en-US';
                    break;
                default:
                    // Rest of the world respects the pre-rendered Optimistic UI defaults
                    break;
            }
        }
    } catch (error) {
        // Silently catches aborts, timeouts, or adblocker interceptions.
    }

    // CSS-Driven State Update: Purge initial optimistic class and apply the resolved class
    document.body.classList.remove('lang-en-001');
    document.body.classList.add(`lang-${resolvedLang}`);

    // Bind event listener to the bypass button utilizing the resolved language
    bypassBtn.addEventListener('click', () => {
        setLanguage(resolvedLang);
        executePopupDismissal();
    });
}

// Centralized logic for dismissing the overlay and triggering follow-up events
function executePopupDismissal() {
    const langPopup = document.getElementById('lang-popup-overlay');
    const slider = document.getElementById('lang-slider');
    
    // Retrieve layout nodes
    const navElement = document.querySelector('nav');
    const mainElement = document.querySelector('main');
    const footerElement = document.querySelector('footer');

    const setInertState = (state) => {
        if (navElement) navElement.inert = state;
        if (mainElement) mainElement.inert = state;
        if (footerElement) footerElement.inert = state;
    };

    if (langPopup) {
        setInertState(false); 
        langPopup.classList.add('fade-out');
        
        setTimeout(() => {
            langPopup.style.display = 'none';
            langPopup.classList.remove('fade-out'); 
            if (slider) slider.classList.remove('slide-active');
        }, 400); 

        // Trigger Cookie Banner sequence
        if (!localStorage.getItem('cookieConsentAcknowledged')) {
            setTimeout(() => {
                injectCookieBanner();
                const banner = document.getElementById('cookie-banner');
                void banner.offsetWidth; // Force DOM reflow
                banner.classList.add('show-banner');
                
                document.getElementById('btn-cookie-understood').addEventListener('click', () => {
                    localStorage.setItem('cookieConsentAcknowledged', 'true');
                    banner.classList.remove('show-banner');
                    setTimeout(() => banner.remove(), 600);
                });
            }, 3000); 
        }
    }
}

// Dynamically injects the informational cookie banner
function injectCookieBanner() {
    const bannerTemplate = `
        <style>
            .cookie-banner-content {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 20px;
                width: 100%;
            }
            .cookie-banner-text-wrapper {
                flex: 1;
            }
            .cookie-banner-header {
                margin: 0 0 8px 0;
                font-size: 1.1em;
                font-weight: 700;
            }
            .cookie-banner-para {
                margin: 0;
                font-size: 0.9em;
                line-height: 1.5;
            }
            #btn-cookie-understood {
                min-width: max-content;
                color: var(--text-main);
                font-weight: 600;
                cursor: pointer;
            }
            
            /* Mobile and Portrait Tablet Breakpoint */
            @media (max-width: 768px) {
                .cookie-banner-content {
                    flex-direction: column;
                    align-items: stretch;
                    gap: 15px;
                }
                #btn-cookie-understood {
                    width: 100%;
                    padding: 12px 0; /* Expanded touch target for mobile accessibility */
                    text-align: center;
                }
            }
        </style>
        <div id="cookie-banner" class="cookie-banner">
            <div class="cookie-banner-content">
                <div class="cookie-banner-text-wrapper">
                    <h4 class="cookie-banner-header">
                        <span class="zh-CN">本网站使用 cookies。</span>
                        <span class="zh-TW">本網站使用 cookies。</span>
                        <span class="en">This website uses cookies.</span>
                        <span class="ja">当ウェブサイトはクッキーを使用しています。</span>
                    </h4>
                    <p class="cookie-banner-para">
                        <span class="zh-CN">建议访问者定期审阅<a href="terms-and-conditions.html#legal-statement">法律与知识产权保护声明</a>和<a href="terms-and-conditions.html#privacy-policy">数据隐私与使用政策</a>，以确保持续符合最新的法律要求和平台当前的数据处理协议。<a href="terms-and-conditions.html">点击此处阅读</a>。</span>
                        <span class="zh-TW">建議瀏覽者定期審閱<a href="terms-and-conditions.html#legal-statement">法律與智慧財產權保護聲明</a>和<a href="terms-and-conditions.html#privacy-policy">資料隱私和使用政策</a>，以確保持續符合最新的法律要求和平台目前的資料處理協議。<a href="terms-and-conditions.html">點擊此處閱讀</a>。</span>
                        <span class="en">Viewers are encouraged to periodically review the <a href="terms-and-conditions.html#legal-statement">Legal and Intellectual Property Protection Statement</a> and <a href="terms-and-conditions.html#privacy-policy">Data Privacy and Usage Policy</a> to ensure continued compliance with the most current legal requirements and the platform's current data handling protocols. <a href="terms-and-conditions.html">Click here to read</a>.</span>
                        <span class="ja">最新の法的要件およびプラットフォームの現在のデータ処理プロトコルへの継続的な準拠を確保するため、<a href="terms-and-conditions.html#legal-statement">法律および知的財産権保護の声明</a>ならびに<a href="terms-and-conditions.html#privacy-policy">データプライバシーと利用ポリシー</a>を定期的に確認することをお勧めします。<a href="terms-and-conditions.html">ここをクリックして読む</a>。</span>
                    </p>
                </div>
                <button id="btn-cookie-understood" class="control-btn">
                    <span class="zh-CN">已了解</span>
                    <span class="zh-TW">已了解</span>
                    <span class="en">Understood</span>
                    <span class="ja">了解しました</span>
                </button>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', bannerTemplate);
}

// Dynamically injects the main navigation bar into the DOM before the <main> element
function injectNavigation() {
    const navTemplate = `
        <nav>
            <div class="nav-central-command">
                <div class="nav-item-dropdown control-btn" id="pages-menu">
                    <a href="javascript:void(0)" class="dropdown-trigger" id="active-page-display">
                    </a>
                    <div class="dropdown-content" id="pages-dropdown-list">
                    </div>
                </div>
            </div>
        </nav>
    `;
    
    const mainElement = document.querySelector('main');
    if (mainElement) {
        mainElement.insertAdjacentHTML('beforebegin', navTemplate);
    } else {
        document.body.insertAdjacentHTML('afterbegin', navTemplate);
    }
}

// Dynamically injects the multilingual footer into the DOM after the <main> element
function injectFooter() {
    const footerTemplate = `
        <footer>
            <div class="footer-container">
                <p>
                    <span class="zh-CN">© <span class="copyright-year">9999</span> GK & Team. 保留所有权利。</span>
                    <span class="zh-TW">© <span class="copyright-year">9999</span> GK & Team. 保留所有權利。</span>
                    <span class="en">© <span class="copyright-year">9999</span> GK & Team. All rights reserved.</span>
                    <span class="ja">© <span class="copyright-year">9999</span> GK & Team. 無断複写・転載を禁じます。</span>
                </p>
                <p>
                    <span class="zh-CN">台湾台北市中正区</span>
                    <span class="zh-TW">臺灣（中華民國）臺北市中正區</span>
                    <span class="en">Zhongzheng District, Taipei City, Taiwan (R.O.C.)</span>
                    <span class="ja">台湾（中華民国）台北市中正区</span>
                </p>
                <p>
                    <span class="zh-CN">浙江省杭州市代表</span>
                    <span class="en-SG">Representative in Central Area, Singapore</span>
                    <span class="en-US">Representative in Phoenix, AZ</span>
                    <span class="en-001">臺灣（中華民國）臺北市中正區</span>
                    <span class="ja">愛知県名古屋市在住の代表者</span>
                </p>
                <p>
                    <a href="javascript:void(0)" id="footer-lang-trigger">
                        <span class="zh-CN">地区：中国</span>
                        <span class="zh-TW">地區：台灣</span>
                        <span class="en-SG">Region: Singapore</span>
                        <span class="en-US">Region: United States</span>
                        <span class="en-001">Region: International</span>
                        <span class="ja">地域：日本</span>
                    </a>
                </p>
                <p>
                    <span class="zh-CN">建议访问者定期审阅<a href="terms-and-conditions.html#legal-statement">法律与知识产权保护声明</a>和<a href="terms-and-conditions.html#privacy-policy">数据隐私与使用政策</a>，以确保持续符合最新的法律要求和平台当前的数据处理协议。<a href="terms-and-conditions.html">点击此处阅读</a>。</span>
                    <span class="zh-TW">建議瀏覽者定期審閱<a href="terms-and-conditions.html#legal-statement">法律與智慧財產權保護聲明</a>和<a href="terms-and-conditions.html#privacy-policy">資料隱私和使用政策</a>，以確保持續符合最新的法律要求和平台目前的資料處理協議。<a href="terms-and-conditions.html">點擊此處閱讀</a>。</span>
                    <span class="en">Viewers are encouraged to periodically review the <a href="terms-and-conditions.html#legal-statement">Legal and Intellectual Property Protection Statement</a> and <a href="terms-and-conditions.html#privacy-policy">Data Privacy and Usage Policy</a> to ensure continued compliance with the most current legal requirements and the platform's current data handling protocols. <a href="terms-and-conditions.html">Click here to read</a>.</span>
                    <span class="ja">最新の法的要件およびプラットフォームの現在のデータ処理プロトコルへの継続的な準拠を確保するため、<a href="terms-and-conditions.html#legal-statement">法律および知的財産権保護の声明</a>ならびに<a href="terms-and-conditions.html#privacy-policy">データプライバシーと利用ポリシー</a>を定期的に確認することをお勧めします。<a href="terms-and-conditions.html">ここをクリックして読む</a>。</span>
                </p>
                <p>
                    <span class="zh-CN">本网站由 GK &amp; Team 独家设计与开发。</span>
                    <span class="zh-TW">本網站由 GK &amp; Team 獨家設計開發。</span>
                    <span class="en">Web designed and developed exclusively by GK &amp; Team.</span>
                    <span class="ja">本ウェブサイトは GK &amp; Team により独自に設計・開発されています。</span>
                </p>
                <p>
                    67% HTML · 20% JavaScript · 13% CSS
                </p>
            </div>
        </footer>
    `;
    
    const mainElement = document.querySelector('main');
    if (mainElement) {
        mainElement.insertAdjacentHTML('afterend', footerTemplate);
    } else {
        document.body.insertAdjacentHTML('beforeend', footerTemplate);
    }
}

// Defines the localized data and regional visibility constraints for contact methods.
const contactsData = [
    {
        id: 'email',
        hiddenIn: [],
        zhCN: { title: '电子邮件', level: 'gkarisma@asu.edu', desc: '', link: 'mailto:gkarisma@asu.edu', action: '发送邮件 ↗' },
        zhTW: { title: '電子郵件', level: 'gkarisma@asu.edu', desc: '', link: 'mailto:gkarisma@asu.edu', action: '寄送郵件 ↗' },
        en: { title: 'Email', level: 'gkarisma@asu.edu', desc: '', link: 'mailto:gkarisma@asu.edu', action: 'Send Email ↗' },
        ja: { title: 'Eメール', level: 'gkarisma@asu.edu', desc: '', link: 'mailto:gkarisma@asu.edu', action: 'メールを送信 ↗' }
    },
    {
        id: 'linkedin',
        hiddenIn: ['zh-CN'],
        zhCN: { title: 'LinkedIn', level: 'linkedin.com/in/kh7r32uq', desc: '', link: 'https://www.linkedin.com/in/kh7r32uq/', action: '访问主页 ↗' },
        zhTW: { title: 'LinkedIn', level: 'linkedin.com/in/kh7r32uq', desc: '', link: 'https://www.linkedin.com/in/kh7r32uq/', action: '查看個人檔案 ↗' },
        en: { title: 'LinkedIn', level: 'linkedin.com/in/kh7r32uq', desc: '', link: 'https://www.linkedin.com/in/kh7r32uq/', action: 'Visit Profile ↗' },
        ja: { title: 'LinkedIn', level: 'linkedin.com/in/kh7r32uq', desc: '', link: 'https://www.linkedin.com/in/kh7r32uq/', action: 'プロフィールを見る ↗' }
    },
    {
        id: 'academia',
        hiddenIn: [],
        zhCN: { title: 'Academia.edu', level: 'asu.academia.edu/GregoriusKarisma', desc: '', link: 'https://asu.academia.edu/GregoriusKarisma', action: '访问主页 ↗' },
        zhTW: { title: 'Academia.edu', level: 'asu.academia.edu/GregoriusKarisma', desc: '', link: 'https://asu.academia.edu/GregoriusKarisma', action: '查看個人檔案 ↗' },
        en: { title: 'Academia.edu', level: 'asu.academia.edu/GregoriusKarisma', desc: '', link: 'https://asu.academia.edu/GregoriusKarisma', action: 'Visit Profile ↗' },
        ja: { title: 'Academia.edu', level: 'asu.academia.edu/GregoriusKarisma', desc: '', link: 'https://asu.academia.edu/GregoriusKarisma', action: 'プロフィールを見る ↗' }
    },
    {
        id: 'github',
        hiddenIn: [],
        zhCN: { title: 'GitHub', level: 'github.com/gregoriuskarisma', desc: '', link: 'https://github.com/gregoriuskarisma', action: '访问主页 ↗' },
        zhTW: { title: 'GitHub', level: 'github.com/gregoriuskarisma', desc: '', link: 'https://github.com/gregoriuskarisma', action: '查看個人檔案 ↗' },
        en: { title: 'GitHub', level: 'github.com/gregoriuskarisma', desc: '', link: 'https://github.com/gregoriuskarisma', action: 'Visit Profile ↗' },
        ja: { title: 'GitHub', level: 'github.com/gregoriuskarisma', desc: '', link: 'https://github.com/gregoriuskarisma', action: 'プロフィールを見る ↗' }
    },
    {
        id: 'handshake',
        hiddenIn: ['zh-CN'],
        zhCN: { title: 'Handshake', level: 'app.joinhandshake.com/profiles/g4uzv9', desc: '', link: 'https://app.joinhandshake.com/profiles/g4uzv9', action: '访问主页 ↗' },
        zhTW: { title: 'Handshake', level: 'app.joinhandshake.com/profiles/g4uzv9', desc: '', link: 'https://app.joinhandshake.com/profiles/g4uzv9', action: '查看個人檔案 ↗' },
        en: { title: 'Handshake', level: 'app.joinhandshake.com/profiles/g4uzv9', desc: '', link: 'https://app.joinhandshake.com/profiles/g4uzv9', action: 'Visit Profile ↗' },
        ja: { title: 'Handshake', level: 'app.joinhandshake.com/profiles/g4uzv9', desc: '', link: 'https://app.joinhandshake.com/profiles/g4uzv9', action: 'プロフィールを見る ↗' }
    },
    {
        id: 'quora',
        hiddenIn: ['zh-CN'],
        zhCN: { title: 'Quora', level: 'quora.com/profile/Gregorius-Karisma-2', desc: '', link: 'https://www.quora.com/profile/Gregorius-Karisma-2', action: '访问主页 ↗' },
        zhTW: { title: 'Quora', level: 'quora.com/profile/Gregorius-Karisma-2', desc: '', link: 'https://www.quora.com/profile/Gregorius-Karisma-2', action: '查看個人檔案 ↗' },
        en: { title: 'Quora', level: 'quora.com/profile/Gregorius-Karisma-2', desc: '', link: 'https://www.quora.com/profile/Gregorius-Karisma-2', action: 'Visit Profile ↗' },
        ja: { title: 'Quora', level: 'quora.com/profile/Gregorius-Karisma-2', desc: '', link: 'https://www.quora.com/profile/Gregorius-Karisma-2', action: 'プロフィールを見る ↗' }
    },
    {
        id: 'wechat',
        hiddenIn: ['zh-TW', 'en-SG', 'en-US', 'ja'],
        zhCN: { title: '微信', level: 'ID: barbaric_panda', desc: '* 中国大陆客户首选。', link: 'https://weixin.qq.com/', action: '添加好友 ↗' },
        zhTW: { title: 'WeChat', level: 'ID: barbaric_panda', desc: '* 中國大陸客戶首選。', link: 'https://weixin.qq.com/', action: '加入好友 ↗' },
        en: { title: 'WeChat', level: 'ID: barbaric_panda', desc: '* Preferred for Mainland China clients.', link: 'https://weixin.qq.com/', action: 'Add Contact ↗' },
        ja: { title: 'WeChat', level: 'ID: barbaric_panda', desc: '* 中国本土のクライアントに推奨。', link: 'https://weixin.qq.com/', action: '連絡先を追加 ↗' }
    },
    {
        id: 'line',
        hiddenIn: ['zh-CN'],
        zhCN: { title: 'LINE', level: 'ID: gk.chuntian', desc: '* 台湾地区客户首选。', link: 'https://www.line.me/tw/', action: '添加好友 ↗' },
        zhTW: { title: 'LINE', level: 'ID: gk.chuntian', desc: '* 台灣客戶首選。', link: 'https://www.line.me/tw/', action: '加入好友 ↗' },
        en: { title: 'LINE', level: 'ID: gk.chuntian', desc: '* Preferred for Taiwan clients.', link: 'https://www.line.me/tw/', action: 'Add Contact ↗' },
        ja: { title: 'LINE', level: 'ID: gk.chuntian', desc: '* 台湾のクライアントに推奨。', link: 'https://www.line.me/tw/', action: '連絡先を追加 ↗' }
    }
];

// Defines the localized data and regional visibility constraints for language proficiencies.
const languagesData = [
    {
        id: 'mandarin',
        hiddenIn: [],
        zhCN: { title: '中文', level: '完全职业熟练' },
        zhTW: { title: '中文', level: '完全職業熟練' },
        en: { title: 'Mandarin', level: 'Full Professional Proficiency' },
        ja: { title: '中国語', level: '完全な実務レベル' }
    },
    {
        id: 'english',
        hiddenIn: [],
        zhCN: { title: '英文', level: '母语或双语熟练' },
        zhTW: { title: '英文', level: '母語或雙語熟練' },
        en: { title: 'English', level: 'Native or Bilingual Proficiency' },
        ja: { title: '英語', level: 'ネイティブまたはバイリンガル' }
    },
    {
        id: 'taiwanese',
        hiddenIn: [],
        zhCN: { title: '闽南语', level: '初级熟练' },
        zhTW: { title: '台語 / 閩南語', level: '初級熟練' },
        en: { title: 'Taiwanese', level: 'Elementary Proficiency' },
        ja: { title: '台湾語', level: '初級レベル' }
    },
    {
        id: 'indonesian',
        hiddenIn: ['zh-CN', 'zh-TW', 'ja', 'en-US', 'en-001'],
        zhCN: { title: '印尼语', level: '母语或双语熟练' },
        zhTW: { title: '印尼語', level: '母語或雙語熟練' },
        en: { title: 'Indonesian', level: 'Native or Bilingual Proficiency' },
        ja: { title: 'インドネシア語', level: 'ネイティブまたはバイリンガル' }
    }
];

// Dynamically resolves, filters, and renders the language proficiencies based on the active region configuration.
function renderLanguages() {
    const container = document.getElementById('dynamic-language-list');
    if (!container) return; // Terminates execution if not on the languages page

    const currentLang = localStorage.getItem('preferredLanguage') || 'zh-TW';
    
    // Normalizes regional variants (en-US, en-SG) to base keys mapping inside the JSON
    const baseLang = currentLang.startsWith('en') ? 'en' : currentLang;
    const langKeyMap = { 'zh-CN': 'zhCN', 'zh-TW': 'zhTW', 'en': 'en', 'ja': 'ja' };
    const dataKey = langKeyMap[baseLang];

    // Applies strict negation filtering against the regional blacklist parameters
    const htmlPayload = languagesData
        .filter(language => !language.hiddenIn.includes(currentLang))
        .map(language => {
            const data = language[dataKey];
            
            return `
                <li>
                    <span class="${baseLang}">
                        <span class="lang-title">${data.title}</span>
                        <span class="lang-level">${data.level}</span>
                    </span>
                </li>
            `;
        }).join('');

    container.innerHTML = htmlPayload;

    // Forces hardware-accelerated entry animations for freshly injected nodes, overriding the intersection observer cycle
    const nodes = container.querySelectorAll('li');
    nodes.forEach((node, index) => {
        node.style.transitionDelay = `${index * 75}ms`;
        setTimeout(() => node.classList.add('is-visible'), 50);
    });
}

// Dynamically resolves, filters, and renders the contact platforms based on the active region configuration.
function renderContacts() {
    const container = document.getElementById('dynamic-contact-list');
    if (!container) return; // Terminates execution if not on the contacts page

    const currentLang = localStorage.getItem('preferredLanguage') || 'zh-TW';
    
    // Normalizes regional variants (en-US, en-SG) to base keys mapping inside the JSON
    const baseLang = currentLang.startsWith('en') ? 'en' : currentLang;
    const langKeyMap = { 'zh-CN': 'zhCN', 'zh-TW': 'zhTW', 'en': 'en', 'ja': 'ja' };
    const dataKey = langKeyMap[baseLang];

    // Applies strict negation filtering against the regional blacklist parameters
    const htmlPayload = contactsData
        .filter(contact => !contact.hiddenIn.includes(currentLang))
        .map(contact => {
            const data = contact[dataKey];
            const descHtml = data.desc ? `<span class="contact-desc">${data.desc}</span>` : '';
            const targetAttr = contact.id === 'email' ? '' : 'target="_blank"';
            
            return `
                <li>
                    <span class="${baseLang}">
                        <span class="contact-title">${data.title}</span>
                        <span class="contact-level">${data.level}</span>
                        ${descHtml}
                        <a href="${data.link}" ${targetAttr} class="text-link">${data.action}</a>
                    </span>
                </li>
            `;
        }).join('');

    container.innerHTML = htmlPayload;

    // Forces hardware-accelerated entry animations for freshly injected nodes, overriding the intersection observer cycle
    const nodes = container.querySelectorAll('li');
    nodes.forEach((node, index) => {
        node.style.transitionDelay = `${index * 75}ms`;
        setTimeout(() => node.classList.add('is-visible'), 50);
    });
}

// Initializes the front-end deterrence layer to intercept specific user interactions.
function initSecurityDeterrence() {
    // 1. Intercept and neutralize the native right-click context menu
    document.addEventListener('contextmenu', (event) => {
        event.preventDefault();
    });

    // 2. Intercept and neutralize native clipboard operations
    ['copy', 'cut', 'paste'].forEach(eventType => {
        document.addEventListener(eventType, (event) => {
            event.preventDefault();
        });
    });

    // 3. Intercept and neutralize specific developer keyboard shortcuts
    document.addEventListener('keydown', (event) => {
        // Evaluate F12 (Standard DevTools trigger)
        if (event.key === 'F12') {
            event.preventDefault();
        }

        // Evaluate Ctrl+Shift+I (Windows) or Cmd+Option+I (Mac) - Inspector
        if ((event.ctrlKey || event.metaKey) && event.shiftKey && (event.key === 'I' || event.key === 'i')) {
            event.preventDefault();
        }

        // Evaluate Ctrl+Shift+C (Windows) or Cmd+Option+C (Mac) - Element Selector
        if ((event.ctrlKey || event.metaKey) && event.shiftKey && (event.key === 'C' || event.key === 'c')) {
            event.preventDefault();
        }

        // Evaluate Ctrl+U (Windows) or Cmd+Option+U (Mac) - View Page Source
        if ((event.ctrlKey || event.metaKey) && (event.key === 'U' || event.key === 'u')) {
            event.preventDefault();
        }
    });
}