(($) => {
  const $document = $(document);

  $document.ready(() => {
    // Auto scroll behavior for ISI jumplinks
    const $isi = $('#isi-top');
    const $isiJumpLink = $('.isi-jump-link');

    // Top padding to leave above ISI when scrolling into focus
    const vertOffset = 20;

    $isiJumpLink.on('click', () => {
      $('html, body').animate(
        {
          scrollTop: $isi.offset().top - vertOffset,
        },
        500,
      );
    });
  });
})(jQuery);
