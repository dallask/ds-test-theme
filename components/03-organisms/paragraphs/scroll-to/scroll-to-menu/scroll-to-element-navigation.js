(($) => {
  Drupal.behaviors.scrollToBehavior = {
    attach (context) {

      $('.jsOpenSelectBody', context).on('click', function () {
        $(this).parent().toggleClass('active');
      });

      $('.jsScrollTo', context).click(function () {
        let containerId = $(this).data('scrollto');
        let containerPos = $(`#${containerId}`).offset().top;

        window.scrollTo({
          top: containerPos,
          behavior: 'smooth',
        });

      });

    },
  };
})(jQuery);
