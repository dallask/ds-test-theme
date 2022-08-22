(function ($, Drupal) {
  Drupal.behaviors.wrapperCarouselSlick = {
    attach: function (context) {
      $('.paragraph__carousel-wrapper .field-name-field-paragraph', context).each(function () {
        $(this).slick({
          dots: true
        })
      });
    }
  };
})(jQuery, Drupal);
