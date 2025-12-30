document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('lang-toggle');
    const body = document.body;

    // 1. Check if user has a saved preference from a previous page
    const savedLang = localStorage.getItem('preferredLanguage');

    // If they chose English before, apply it immediately
    if (savedLang === 'en') {
        body.classList.remove('lang-zh');
        body.classList.add('lang-en');
        toggleBtn.innerText = "中文";
        document.documentElement.lang = "en";
    }

    // 2. Listen for clicks
    toggleBtn.addEventListener('click', () => {
        if (body.classList.contains('lang-zh')) {
            // Switch to English
            body.classList.remove('lang-zh');
            body.classList.add('lang-en');
            toggleBtn.innerText = "中文";
            document.documentElement.lang = "en";
            localStorage.setItem('preferredLanguage', 'en'); // Save choice
        } else {
            // Switch to Chinese
            body.classList.remove('lang-en');
            body.classList.add('lang-zh');
            toggleBtn.innerText = "English";
            document.documentElement.lang = "zh";
            localStorage.setItem('preferredLanguage', 'zh'); // Save choice
        }
    });
});