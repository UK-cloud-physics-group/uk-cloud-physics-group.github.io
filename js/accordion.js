/*************************************************************************
 * Generic accordion functionality for collapsible content sections.
 * Can be used on any page by including the accordion classes in HTML.
 * Usage:
 * - Add 'accordion-header' class to clickable header elements
 * - Add 'accordion-content' class to content that should be toggled
 * - Place content immediately after header (sibling elements)
 *************************************************************************/

(function () {
  "use strict";

  $(function () {
    // Find all accordion headers and set up click handlers
    $('.accordion-header').click(function() {
      $(this).next('.accordion-content').toggleClass('active');
    });
  });
})();