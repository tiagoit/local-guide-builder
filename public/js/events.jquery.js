let dateBlocksVisible = 1;

(function($) {
	"use strict"

	initSlickSlider();
	refreshVisibleDateBlocks();
	hideDotsFromSlickIfOnlyOne();

	$('.see-more-events').click((ev) => {
		ev.stopPropagation();

		dateBlocksVisible++;
		refreshVisibleDateBlocks();
	});
	
})(jQuery);


function refreshVisibleDateBlocks() {
	let dateBlockNum;
	$('.date-block').each((i, dateBlock) => {
		dateBlockNum = $(dateBlock).attr('class').split(' ')[1].replace('date-block-', '');
		(dateBlockNum > dateBlocksVisible) ? $(dateBlock).hide() : $(dateBlock).show();
	});

	if(dateBlockNum == dateBlocksVisible) {
		$('.see-more-events button').attr('disabled', true);
	}
}

function initSlickSlider() {
	let centerMode = $(document).width() < 580;
	$('.slider-container').slick({
		infinite: true,
		centerMode: centerMode,
		mobileFirst: true,
		dots: true,
		speed: 300,
		adaptiveHeight: false,
		variableWidth: true,
		slidesToShow: 1,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 3000,
		draggable: true,
		swipe: true,
		swipeToSlide: true,
		waitForAnimate: false
	});
}

function hideDotsFromSlickIfOnlyOne() {
	$('ul.slick-dots').each((i, el) => {
    if($(el).children('li').length === 1) {
        $(el).addClass('d-none')
    }
	})
}
