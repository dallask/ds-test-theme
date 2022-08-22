(function ($, Drupal) {
  Drupal.behaviors.backToTop = {
    attach: function (context) {

      window.storybookGlobalFunctions = {
        animationDuration: 500,
        documentHeight: $(document).height(),
        windowHeight: $(window).height(),

        calculatePercentHeight10: () => Math.floor(window.storybookGlobalFunctions.documentHeight * 0.1), //10%
        calculatePercentHeight25: () => Math.floor(window.storybookGlobalFunctions.documentHeight * 0.25), //25%
        calculatePercentHeight30: () => Math.floor(window.storybookGlobalFunctions.documentHeight * 0.3), //30%
        calculatePercentHeight40: () => Math.floor(window.storybookGlobalFunctions.documentHeight * 0.4), //40%
        calculatePercentHeight50: () => Math.floor(window.storybookGlobalFunctions.documentHeight * 0.5), //50%
        calculatePercentHeight80: () => Math.floor(window.storybookGlobalFunctions.documentHeight * 0.8), //80%
      };
      var backToTopStorybookGlobal = window.storybookGlobalFunctions;
      var fadeInOrOutButton = '.js-fade-in-or-out';
      var browserWindowCalculationParams = {
        documentHeight: backToTopStorybookGlobal.documentHeight,
        windowHeight: backToTopStorybookGlobal.windowHeight,
        heightFactor: backToTopStorybookGlobal.calculatePercentHeight25()
      };

      var isDocumentHeightGreaterThan = function isDocumentHeightGreaterThan(_ref) {
        var _ref$documentHeight = _ref.documentHeight,
            documentHeight = _ref$documentHeight === void 0 ? 0 : _ref$documentHeight,
            _ref$windowHeight = _ref.windowHeight,
            windowHeight = _ref$windowHeight === void 0 ? 0 : _ref$windowHeight,
            _ref$heightFactor = _ref.heightFactor,
            heightFactor = _ref$heightFactor === void 0 ? 0 : _ref$heightFactor;
        return documentHeight - windowHeight > heightFactor;
      };

      (function ifDesiredDocumentHeightShowComponent() {
        isDocumentHeightGreaterThan(browserWindowCalculationParams) && $('.js-show-button').show();
      })();

      (function initiallyHideFadeInButton() {
        $(fadeInOrOutButton).hide();
      })();

      gsap.registerPlugin(ScrollTrigger);
      gsap.registerPlugin(ScrollToPlugin);
      $('button.back-to-top', context).click(function () {
        gsap.to(window, {
          scrollTo: {
            y: 0,
            autoKill: false,
            ease: 'Power3.easeInOut',
          },
          duration: .1,
        });
        return(false);
      });

      var onScrollFadeInOutScrollButton = function onScrollFadeInOutScrollButton() {
        return $(window).bind('scroll', function () {
          var documentPercentHeight = backToTopStorybookGlobal.calculatePercentHeight10();
          var stickyBackToTopPrototype = $(fadeInOrOutButton);

          if($(window).scrollTop() > documentPercentHeight) {
            stickyBackToTopPrototype.fadeIn(backToTopStorybookGlobal.animationDuration);
          }
          else {
            stickyBackToTopPrototype.fadeOut(backToTopStorybookGlobal.animationDuration);
          }
        });
      };

      onScrollFadeInOutScrollButton();
    },
  };
})(jQuery, Drupal);
