'use strict';

(function ($, Drupal, drupalSettings) {
  'use strict';

  Drupal.behaviors.externalLinkPopupOpenDialog = function (
    element, settings, className) {
    const url = $(element).attr('href');
    const text = $(element).text();
    const bodyHtml = settings.body.replace('[link:url]', this.htmlEncode(url)).
      replace('[link:text]', this.htmlEncode(text));
    $('#externalLinkPopupModalLabel').html(settings.title);
    $('#externalLinkPopupModalCloseButton').html(settings.labelno);
    $('#externalLinkPopupModalContinueButton').html(settings.labelyes);
    $('#externalLinkPopupModalContinueButton').
      unbind('click').
      bind('click', () => {
        const target = window.open(element.href, element.target, 'noopener');
        $('.modal-content').find('.close').trigger('click');
      });
    $('#externalLinkPopupModalBody').html(bodyHtml);
    $('#externalLinkPopupModal').modal();
  };
})(jQuery, Drupal,
  (typeof drupalSettings !== 'undefined') ? drupalSettings : {});
