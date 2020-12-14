function tabs(tabsSelector) {
    const tabs = document.querySelectorAll(tabsSelector),
          tabsImg = document.querySelectorAll('.description__item'),
          tabsParent = document.querySelector('#services__tabs');

    function hideTabsImg() {
        tabsImg.forEach(img => {
            img.style.display = 'none';
        });

        tabs.forEach(item => {
            item.classList.remove('services__tabs-item--active');
        });
    }

    function showTabs (i = 0) {
        tabsImg[i].style.display = 'block';
        tabs[i].classList.add('services__tabs-item--active');
    }

    hideTabsImg();
    showTabs();
    
    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains(tabsSelector.slice(1))) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabsImg();
                    showTabs(i);
                }
            });
        }
    });

}

tabs('.services__tabs-item');