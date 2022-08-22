(function ($, Drupal) {
  Drupal.behaviors.bootstrapToast = {
    attach: function (context) {
      $(() => {
        $('.toast').once().toast();

        $('#liveToastBtn').once().click(function () {
          $('.toast').toast('show');
        });
      });
    }
  };
})(jQuery, Drupal);
