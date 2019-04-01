(function($) {
	"use strict"

	$('.slider-container').slick({
		infinite: true,
		centerMode: false,
		mobileFirst: true,
		dots: true,
		speed: 500,
		adaptiveHeight: false,
		variableWidth: true,
		slidesToShow: 1,
		arrows: false,
		autoplay: false
	});

})(jQuery);
