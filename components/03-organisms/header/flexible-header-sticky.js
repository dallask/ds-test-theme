/**
 * @file
 * Sticky header behaviors.
 *
 */
(function ($, Drupal, drupalSettings) {
  'use strict';
  Drupal.behaviors.otsukaStickyHeader = {
    attach: function (context, settings) {
      // Menu scroll hide.
      var $mainHeader = $('header.flexible-header:not(.flexible-header-clone)', context);
      var $copyHeader = $('.flexible-header-clone', context);
      if (typeof $mainHeader.once === 'undefined' || $mainHeader.once('scroll-hide').length) {
        var menuBehavior = (typeof drupalSettings.otsuka_design_system2022 !== 'undefined') ? drupalSettings.otsuka_design_system2022.menu_behavior ?? 'Normal' : ($mainHeader.data('menu-behavior') ?? 'Normal');

        var isiAjusting = function (headerState) {
          var $sidebarISI = $('.region-sidebar-right .inline-isi-wrapper', context);
          var top = 0;
          if (headerState === 'header-opened') {
            top = $mainHeader.height() + 'px';
            $sidebarISI.removeClass('js--header-closed');
          } else {
            $sidebarISI.addClass('js--header-closed');
          }
          $sidebarISI.css('top', top);
        };

        var contentAjusting = function () {
          if (menuBehavior === 'Persistent') {
            var headerHeight = $mainHeader.height() + 'px';
            $('#main-content', context).css('padding-top', headerHeight);
            isiAjusting('header-opened');
          }
        };
        $(window).on('load resize orientationchange', function () {
          contentAjusting();
        });

        var isStorybook = function () {
          // @TODO: Try process?.env?.STORYBOOK depending on browser support.
          return (typeof process !== 'undefined' && typeof process.env !== 'undefined' && typeof process.env.STORYBOOK !== 'undefined');
        }

        var prevScrollpos = window.pageYOffset;
        var scrollOffset = 200;
        var scrolling = false;

        var setMenuBehavior = function () {
          $mainHeader = $('header.flexible-header:not(.flexible-header-clone)', context);
          const newMenuBehavior = (typeof drupalSettings.otsuka_design_system2022 !== 'undefined') ? drupalSettings.otsuka_design_system2022.menu_behavior ?? 'Normal' : ($mainHeader.data('menu-behavior') ?? 'Normal');

          if (!isStorybook() || menuBehavior != newMenuBehavior) {
            menuBehavior = newMenuBehavior;
            switch (menuBehavior) {
              case 'Normal':
                $copyHeader.remove();
                $mainHeader.removeClass('position-fixed');
                break
              case 'Persistent':
                $copyHeader.remove();
                $mainHeader.addClass('position-fixed');
                break
              case 'Sticky':
                $mainHeader.removeClass('position-fixed');
                $copyHeader = $mainHeader.clone(true).addClass('position-fixed').addClass('js--header-hidden').addClass('flexible-header-clone').css('display', 'none');
                $(document.body).prepend($copyHeader);
                scrolling = false;
                break
            }
          }
        }
        setMenuBehavior();

        var autoHideHeader = function () {
          if (menuBehavior === 'Sticky') {
            var currentScrollPos = window.pageYOffset;
            if (currentScrollPos <= 0) {
              $copyHeader.hide();
            } else if (currentScrollPos > scrollOffset) {
              $copyHeader.addClass('js--header-hidden');
              isiAjusting('header-closed');
              $copyHeader.show();
            }

            if (prevScrollpos > currentScrollPos) {
              $copyHeader.removeClass('js--header-hidden');
              isiAjusting('header-opened');
            } else {
              if (currentScrollPos > scrollOffset) {
                $copyHeader.addClass('js--header-hidden');
                isiAjusting('header-closed');
              }
            }
            prevScrollpos = currentScrollPos;
            scrolling = false;
          }
        };

        $(window).on('scroll', function () {
          // If Flexible Header is rendered into Storybook instead of a Drupal site,
          // site, the menu behavior is set on scroll because of the impossibility of
          // re-attaching Drupal behaviors on the controls change event.
          if (isStorybook()) {
            setMenuBehavior();
          }
          if (!scrolling) {
            scrolling = true;
            if (!window.requestAnimationFrame) {
              setTimeout(autoHideHeader, 250);
            } else {
              requestAnimationFrame(autoHideHeader);
            }
          }
        });
      }
    }
  };

})(jQuery, Drupal, (typeof drupalSettings !== 'undefined') ? drupalSettings : {});
