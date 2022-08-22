/* eslint-disable */
(($) => {
  Drupal.behaviors.ParagraphWrapperCarousel = {
    attach (context) {
      $('.paragraph-carousel', context).each(function () {
        $(this).slick({
          centerMode: $(this).data('centermode'),
          centerPadding: $(this).data('centerpadding'),
          slidesToShow: $(this).data('slidestoshow'),
          dots: $(this).data('dots'),
          pauseOnDotsHover: $(this).data('pauseondotshover'),
          infinite: $(this).data('infinite'),
          autoplaySpeed: $(this).data('autoplayspeed'),
          speed: $(this).data('speed'),
          slidesToScroll: $(this).data('slidestoscroll'),
          adaptiveHeight: $(this).data('adaptiveheight'),
          variableWidth: $(this).data('variablewidth'),
          arrows: $(this).data('arrows'),
          autoplay: $(this).data('autoplay'),
          responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: $(this).data('tablet-arrows'),
                centerMode: $(this).data('tablet-centermode'),
                centerPadding: $(this).data('tablet-centerpadding'),
                slidesToShow: $(this).data('tablet-slidestoshow')
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: $(this).data('mobile-arrows'),
                centerMode: $(this).data('mobile-centermode'),
                centerPadding: $(this).data('mobile-centerpadding'),
                slidesToShow: $(this).data('mobile-slidestoshow')
              }
            }
          ]
        });
      });
    },
  };
})(jQuery);
