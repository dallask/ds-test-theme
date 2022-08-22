(($) => {
  Drupal.behaviors.isiTrayBody = {
    attach: function attach (context) {
      const $window = $(window);
      const $body = $('body');
      const $isiSection = $('.isi-section', context);
      const $isiTray = $('.isi-tray', context);
      const vertTopMargin = 80; // Hide tray when 80 px above isiTop anchor
      const isiHiddenClass = 'isi-tray-hidden';

      const hideIsiTray = () => {
        const windowOffset = $window.scrollTop();
        const docView = windowOffset + $window.height() - $isiTray.height();

        if ($isiSection.length && $isiTray.length) {
          const elemTop = $isiSection.offset().top - vertTopMargin;

          if (elemTop <= docView) {
            $body.addClass(isiHiddenClass);
          }
          else {
            $body.removeClass(isiHiddenClass);
          }
        }
      };

      // Minimize tray on scroll event
      hideIsiTray();
      $window.on('scroll resize', () => {
        hideIsiTray();
      });
    },
  };
})(jQuery);
