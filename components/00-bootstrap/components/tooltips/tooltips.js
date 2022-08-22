(function ($, Drupal) {
  Drupal.behaviors.bootstrapTooltips = {
    attach: function (context) {
      $(() => {
        $('[data-bs-toggle="tooltip"]').once().tooltip();
      });
    }
  };
})(jQuery, Drupal);
