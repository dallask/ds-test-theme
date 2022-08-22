(function ($, Drupal) {
  Drupal.behaviors.cookiePopup = {
    attach: function (context) {
      if(this.getCookie('cookie_popup_closed') === undefined) {
        $('#cookie-popup').css('display', 'flex');
      }

      $('#cookie-popup .btn-close').on('click', () => {
        document.cookie = "cookie_popup_closed=1";
        $('#cookie-popup').remove();
      });
    },
    getCookie: function (name) {
      let match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
      if(match) {
        return match[2];
      }
    }
  };
})(jQuery, Drupal);
