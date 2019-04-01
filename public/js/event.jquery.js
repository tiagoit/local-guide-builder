(function($) {
	"use strict"

	$('.slider-container').slick({
		centerMode: true,
		mobileFirst: true,
		dots: true,
		speed: 500,
		adaptiveHeight: false,
		variableWidth: true,
		slidesToShow: 1,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 5000,
	});

})(jQuery);
