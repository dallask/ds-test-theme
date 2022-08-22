(function ($, Drupal) {

  Drupal.behaviors.videoBackground = {
    attach: function (context, settings) {
      let $body = $('body');
      let videoAutoplay = true;
      let videoPlaying = true;
      let videoPlayingPreviousState = false;

      let Animation = {

        animateVideo: function () {
          let self = this;
          let video = document.getElementById('videoBackground');
          let canvas = document.getElementById('videoBackgroundCanvas');

          if (canvas !== null) {
            let context = canvas.getContext('2d');

            let width = 750;
            let height = 434;

            canvas.width = width;
            canvas.height = height;
          }

          if (video !== null) {
            video.addEventListener('play', function () {
              self.draw(this, context, width, height);
            }, false);
          }

          // Start Video.
          if (videoAutoplay && video !== null) {
            video.play();
            self.draw(video, context, width, height);
          }
        },

        draw: function (video, context, width, height) {
          let self = this;

          if (video.ended) {
            return false;
          }
          context.drawImage(video, 0, 0, width, height);

          setTimeout(function () {
            self.draw(video, context, width, height);
          }, 40);
        },

      };

      window.Animation = Animation;

      Animation.animateVideo();

    },
  };

})(jQuery, Drupal);
