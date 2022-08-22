(function ($, Drupal) {
  Drupal.behaviors.bootstrapOnHoverMenu = {
    attach: function (context) {
      $('.menu-hover .dropdown').on('mouseover', function () {
        $(this).addClass('show');
        $(this).children(".dropdown-menu").addClass('show');
        $(this).children(".dropdown-toggle").attr('aria-expanded', 'true');
      });
      $('.menu-hover .dropdown').on('mouseout', function () {
        $(this).removeClass('show');
        $(this).children(".dropdown-menu").removeClass('show');
        $(this).children(".dropdown-toggle").attr('aria-expanded', 'false');
      });
    }
  };
})(jQuery, Drupal);
