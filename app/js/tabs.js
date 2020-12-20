function tabs(tabsSelector) {
    const tabs = document.querySelectorAll(tabsSelector),
          tabsContent = document.querySelectorAll('.description__wrap'),
          tabsParent = document.querySelector('#services__tabs');

    function hideTabsContent() {
        tabsContent.forEach(content => {
            content.style.display = 'none';
        });

        tabs.forEach(item => {
            item.classList.remove('services__tabs-item--active');
        });
    }

    function showTabs (i = 0) {
        tabsContent[i].style.display = 'flex';
        tabs[i].classList.add('services__tabs-item--active');
    }

    hideTabsContent();
    showTabs();
    
    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains(tabsSelector.slice(1))) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabsContent();
                    showTabs(i);
                }
            });
        }
    });
}

tabs('.services__tabs-item');