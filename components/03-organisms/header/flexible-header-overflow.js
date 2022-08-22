/**
 * @file
 * Menu Overflow behavior.
 *
 */
(function ($, Drupal, drupalSettings) {

  'use strict';

  Drupal.behaviors.otsukaMenuOverflow = {
    attach: function (context, settings) {
      var $mainHeader = $('header.flexible-header:not(.flexible-header-clone)', context);
      var menuOverflow = (typeof drupalSettings.otsuka_design_system2022 !== 'undefined') ? drupalSettings.otsuka_design_system2022.menu_overflow ?? 'Yes' : (($mainHeader.data('menu-overflow') ?? 1) ? 'Yes' : 'No');
      if (menuOverflow !== 'Yes') {
        return;
      }

      // debulked onresize handler
      function on_resize(c, t) {
        onresize = function () {
          clearTimeout(t);
          t = setTimeout(c, 100)
        };
        return c
      }

      /*
      Goal: As the viewport width decreases, take any links that don't fit in the horizontal menu bar and move them into a vertical dropdown menu.
      This should also run on load, but right now it's only on (throttled) resize...
      */

      var $region = $('.flexible-header');
      var $nav = $('nav', $region);

      $($nav).find('li.show-only-in-footer').remove();

      var appendToggler = function () {
        $nav.each(function (index) {
          $(this).addClass('js--overflow-menu');
          $(this).addClass('js--overflow-menu' + index);

          $('.js--overflow-menu' + index).once('custom--more-append' + index).append('<a class="custom--more custom--more' + index + ' overflow-squares-menu d-flex justify-content-center align-items-center" data-analytics-position="Header">\n' + '    <i class="fas fa-square-full"></i>\n' + '    <i class="fas fa-square-full spacer"></i>\n' + '    <i class="fas fa-square-full"></i>\n' + '    <span class="custom--more-label custom--more-label' + index + ' d-none">3 More...</span>\n' + '    <ul class="custom--overflow custom--overflow' + index + ' nav"></ul>\n' + '  </a>');
        });
      };

      appendToggler();

      var overflowMenu = function () {
        $nav.each(function (index) {
          $region.each(function () {
            var $_self = $(this);

            if ($(window).width() < 769) {
              $('.custom--more' + index, $(this)).removeClass('d-flex').hide();

              $('.custom--overflow' + index + ' li', $(this)).each(function () {
                $('ul.menu', $_self).append($(this));
              });

              return;
            }

            appendToggler();

            // horizontal room we have to work with (the container)
            // this value doesn't change until we resize again
            var navSpace = $('.js--overflow-menu' + index + ' ul.menu', $(this)).outerWidth() - 50;
            if (navSpace < 0) {
              navSpace = 0;
            }

            // calc the combined width of all links currently in the horizontal menu
            var linksWidth = 0;
            $('li', $('.js--overflow-menu' + index + ' ul.menu', $(this))).each(function () {
              linksWidth += $(this).outerWidth();
            });

            // now let's compare them to see if all the links fit in the
            // container...
            if (linksWidth > navSpace) {
              // uh oh, the width of the links is greater than the width of their
              // container... keep moving links from the menu to the overflow until
              // the combined width is less than the container...
              while (linksWidth > navSpace) {
                var lastLink = $('li:last', $('.js--overflow-menu' + index + ' ul.menu', $(this))); // get the last link
                var lastLinkWidth = lastLink.outerWidth(); // get its width...
                $(lastLink).data('foo', lastLinkWidth); // store the width (so that
                                                        // we can see if it fits
                                                        // back in the space
                                                        // available later)
                $('.custom--overflow' + index, $(this)).prepend(lastLink); // pop the link and push
                // it to the overflow
                linksWidth = linksWidth - lastLinkWidth; // recalc the linksWidth
                                                         // since we removed one
              }

              $('.custom--more' + index, $(this)).addClass('d-flex').show(); // make sure we can see the overflow menu
              $('.custom--more' + index + '-label', $(this)).text($('.custom--overflow' + index + ' > li', $(this)).length + ' More...'); // update the hidden link count
            } else {
              // shazam, the width of the links is less than the width of their
              // container... let's move links from the overflow back into the menu
              // until we run out of room again...
              while (linksWidth <= navSpace) {
                var firstOverflowLink = $('.custom--overflow' + index + ' > li:first', $(this));
                var firstOverflowLinkWidth = firstOverflowLink.data('foo');
                if (navSpace - linksWidth > firstOverflowLinkWidth) {
                  $('.js--overflow-menu' + index + ' ul.menu', $(this)).append(firstOverflowLink);
                }
                linksWidth = linksWidth + firstOverflowLinkWidth; // recalc the
                                                                  // linksWidth
                                                                  // since we added
                                                                  // one
              }

              $('.custom--more' + index + '-label', $(this)).text($('.custom--overflow' + index + ' > li', $(this)).length + ' More...'); // update the hidden link count

              // should we hide the overflow menu?
              if ($('.custom--overflow' + index + ' > li', $(this)).length == 0) {
                $('.custom--more' + index, $(this)).removeClass('d-flex').hide();
              } else {
                $('.custom--more' + index, $(this)).addClass('d-flex').show();
              }
            } // end else
          });
        });

      };

      overflowMenu();

      $(window).once('overflowMenu-onresize').on('resize', overflowMenu);
    }
  };

})(jQuery, Drupal, (typeof drupalSettings !== 'undefined') ? drupalSettings : {});
