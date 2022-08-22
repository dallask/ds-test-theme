(($) => {
  const $window = $(window);
  const $document = $(document);
  const $isiDrawerWrapper = $('#isi-drawer-wrapper');
  const $isiDrawerHandle = $('#isi-drawer-handle');
  const isiDrawerWrapperClass = 'isi-drawer-collapsed isi-drawer-expanded';
  const isiDrawerHandleClass = 'open-drawer close-drawer';
  const hideTrayClass = 'hide-tray';
  const isiLocation = 'importantsafetyinformation';

  const hideIsiTray = () => {
    let $isiSection;

    if (window.location.href.indexOf(isiLocation) > 0) {
      $isiSection = $('.info-with-summary-section');
    }
    else {
      $isiSection = $('.isi-section');
    }

    const $isiTray = $('.isi-tray');
    const windowOffset = $window.scrollTop();
    const docViewBottom = windowOffset + $window.height() - $isiTray.height();

    if ($isiSection.length && $isiTray.length) {
      const elemTop = $isiSection.offset().top;

      if (elemTop <= docViewBottom) {
        $isiTray.addClass(hideTrayClass);
      }
      else {
        $isiTray.removeClass(hideTrayClass);
      }
    }
  };

  const isiClickHandler = () => {
    $isiDrawerWrapper.on('click', () => {
      $isiDrawerHandle.toggleClass(isiDrawerHandleClass);
      $isiDrawerWrapper.toggleClass(isiDrawerWrapperClass);
    });
  };

  // Check whether to hide/show sticky footer on scroll event
  $window.scroll(() => {
    hideIsiTray();
  });

  $document.ready(() => {
    isiClickHandler();
    hideIsiTray();
  });
})(jQuery);
