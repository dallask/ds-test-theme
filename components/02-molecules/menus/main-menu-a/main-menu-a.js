Drupal.behaviors.mainMenuA = {
  attach (context) {
    const toggleExpand = context.getElementById('toggle-expand-a');
    const menu = context.getElementById('main-nav-a');
    const body = context.getElementsByTagName('body')[0];
    let scrollPosition = 0;

    function scrollDisable () {
      scrollPosition = window.pageYOffset;
      body.style.overflow = 'hidden';
      body.style.position = 'fixed';
      body.style.top = `-${scrollPosition}px`;
      body.style.width = '100%';
    }

    function scrollEnable () {
      body.style.removeProperty('overflow');
      body.style.removeProperty('position');
      body.style.removeProperty('top');
      body.style.removeProperty('width');
      window.scrollTo(0, scrollPosition);
    }

    if (menu) {
      const expandMenu = menu.getElementsByClassName('expand-sub');

      // Mobile Menu Show/Hide.
      toggleExpand.addEventListener('click', (e) => {
        toggleExpand.classList.toggle('toggle-expand-a--open');
        menu.classList.toggle('main-nav-a--open');
        body.classList.toggle('main-nav-a-popup--open');
        e.preventDefault();
        if (menu.classList.contains('main-nav-a--open')) {
          scrollDisable();
        }
        else {
          scrollEnable();
        }
      });

      // Expose mobile sub menu on click.
      Array.from(expandMenu).forEach((item) => {
        item.addEventListener('click', (e) => {
          const menuItem = e.currentTarget;
          const subMenu = menuItem.nextElementSibling;

          menuItem.classList.toggle('expand-sub--open');
          subMenu.classList.toggle('main-menu-a--sub-open');
          body.classList.toggle('main-nav-a-popup--open');
        });
      });
    }
  },
};
