(function() {
    'use strict';

    function hideSuggestions() {
        const selectors = [
            '#contents.ytd-rich-grid-renderer',
            'ytd-rich-grid-renderer',
            '#dismissible.ytd-rich-item-renderer',
            'ytd-rich-item-renderer',
            '#contents.ytd-two-column-browse-results-renderer > .ytd-rich-grid-renderer',
            '.ytd-rich-grid-row',
            'ytd-rich-section-renderer',
            '#primary-inner',
            '.ytd-browse[page-subtype="home"] #primary #contents'
        ];

        let hidden = false;
        
        selectors.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(element => {
                if (window.location.pathname === '/' || window.location.pathname === '/feed/subscriptions') {
                    element.style.display = 'none';
                    hidden = true;
                }
            });
        });

        if (window.location.pathname === '/') {
            const homeContainer = document.querySelector('ytd-browse[page-subtype="home"]');
            if (homeContainer) {
                const contents = homeContainer.querySelector('#contents');
                if (contents) {
                    contents.style.display = 'none';
                    hidden = true;
                }
            }

            const primaryInner = document.querySelector('#primary-inner');
            if (primaryInner) {
                primaryInner.style.display = 'none';
                hidden = true;
            }
        }
    }

    function init() {
        hideSuggestions();
        
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'childList') {
                    hideSuggestions();
                }
            });
        });
        
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    let lastUrl = location.href;
    new MutationObserver(() => {
        const url = location.href;
        if (url !== lastUrl) {
            lastUrl = url;
            setTimeout(hideSuggestions, 500);
        }
    }).observe(document, { subtree: true, childList: true });
})();