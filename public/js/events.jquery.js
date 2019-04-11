(function($) {
	"use strict"
	let centerMode = $(document).width() < 580;

	$('.slider-container').slick({
		infinite: false,
		centerMode: centerMode,
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
