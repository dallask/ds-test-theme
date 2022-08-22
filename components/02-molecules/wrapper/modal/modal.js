(($) => {
  Drupal.behaviors.modalBehavior = {
    attach (context) {
      const $body = $('body', context);
      const $modal = $('.modal', context);
      const $modalRegion = $body;
      const blurClass = 'blur';

      // Add the videoStop event.
      const videoStopEvent = document.createEvent('Event');
      videoStopEvent.initEvent('videoStop', true, true);

      $modal.on('show.bs.modal', () => {
        // Check and close all other modals
        $body.find('.modal.show').modal('hide');

        // Add Blur effect
        $body.addClass(blurClass);
      });

      $modal.on('shown.bs.modal', () => {
        $(context).find('.modal-backdrop').detach().appendTo($modalRegion);
      });

      $modal.on('hide.bs.modal', (e) => {
        $body.removeClass(blurClass);

        // Stop the video
        const reactPlayer = $(e.currentTarget).find('.react-player');
        if (reactPlayer.length) {
          document.dispatchEvent(videoStopEvent);
        }
      });

      // Move modals to the bottom.
      $(context).find('.modal').detach().appendTo($modalRegion);
    },
  };

  // Open modal by default
  // $(document).ready(() => {
  //   $('#videoInitialModal').modal();
  // });
})(jQuery);
