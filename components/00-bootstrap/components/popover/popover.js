(function ($, Drupal) {
  Drupal.behaviors.bootstrapPopover = {
    attach: function (context) {
      $(()=>{
        $('[data-bs-toggle="popover"]').once().popover();
      });
    }
  };
})(jQuery, Drupal);
