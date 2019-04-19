(function($) {
	"use strict"

	// Init Slick Slider
	$('.slider-container').slick({
		centerMode: true,
		mobileFirst: true,
		dots: true,
		speed: 500,
		adaptiveHeight: false,
		variableWidth: true,
		slidesToShow: 1,
		arrows: true,
		autoplay: true,
		autoplaySpeed: 3000,
	});

	// When slider image is clicked the fullscreen modal opens.
	$('#modalCenter').on('show.bs.modal', function (event) {
		let imgElement = $(event.relatedTarget).clone(); // Image that triggered the modal
		imgElement.removeAttr('data-toggle').removeAttr('data-target').removeAttr('class').removeAttr('data-slick-index').removeAttr('id');
		$('#modal-body').html(imgElement);
	});

})(jQuery);