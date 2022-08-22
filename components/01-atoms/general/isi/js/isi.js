(($) => {
  Drupal.behaviors.isiTray = {
    attach: function attach (context) {
      const $body = $('body', context);
      const $isiMenu = $('.isi-wrapper .vb-menu', context);
      const $drawerIsi = $('#drawer-isi', context);
      const $isiOpenTrigger = $('.jsIsiMinimize', context);
      const isiOpenClass = 'isi-open';
      const lsFirstEntryKey = 'notFirstEntry';
      const notFirstEntry = localStorage.getItem(lsFirstEntryKey);

      // ISI Menu
      const $isiMenuClone = $isiMenu.clone();
      $drawerIsi.prepend($isiMenuClone);

      // Add class to Body if ISI expanded
      $isiOpenTrigger.click(() => {
        $body.toggleClass(isiOpenClass);
      });

      // Open ISI Tray in first time
      if (notFirstEntry !== 'true') {
        $(document).ready(() => {
          $body.addClass(isiOpenClass);
          localStorage.setItem(lsFirstEntryKey, 'true');
        });
      }
    },
  };
})(jQuery);
