document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const langLinks = document.querySelectorAll('.lang-select');

    function setLanguage(lang) {
        if (lang === 'en') {
            body.classList.remove('lang-zh');
            body.classList.add('lang-en');
            document.documentElement.lang = "en";
        } else {
            body.classList.remove('lang-en');
            body.classList.add('lang-zh');
            document.documentElement.lang = "zh";
        }
        localStorage.setItem('preferredLanguage', lang);
    }

    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang) {
        setLanguage(savedLang);
    }

    langLinks.forEach(link => {
        link.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            setLanguage(lang);
        });
    });

    function generateSpaceBackground() {
        const layer1Count = 200;
        const layer2Count = 100;

        function getShadows(count) {
            let shadows = [];
            for (let i = 0; i < count; i++) {
                const x = Math.floor(Math.random() * 100);
                const y = Math.floor(Math.random() * 100);
                shadows.push(`${x}vw ${y}vh #fff`);
            }
            return shadows.join(', ');
        }

        const layer1Shadows = getShadows(layer1Count);
        const layer2Shadows = getShadows(layer2Count);

        const style = document.createElement('style');
        style.innerHTML = `
            body::before {
                box-shadow: ${layer1Shadows};
            }
            body::after {
                box-shadow: ${layer2Shadows};
            }
        `;
        document.head.appendChild(style);
    }

    generateSpaceBackground();
});
