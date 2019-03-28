(function($) {
  "use strict"
  
  // Style current city name
  if ($(location).attr("pathname").length > 9) {
    $('.cities-widget').find('ul li').addClass(function() {
      let activeCity = $(this).find("a").attr('href').substring(9);
      return $(location).attr("pathname").includes(activeCity) ? 'active' : '';
    });
  }
})(jQuery);
