let dateBlocksVisible = 1;

(function($) {
	"use strict"

	// initSlickSlider();
	refreshVisibleDateBlocks();
	// hideDotsFromSlickIfOnlyOne();

	$('.see-more-events').click((ev) => {
		ev.stopPropagation();

		dateBlocksVisible++;
		refreshVisibleDateBlocks();
	});
	
	// hideBigAdDescription();

	$('.ad-see-more').click(ev => {
		$(ev.target).parent('.card-text').addClass('d-none');
		$(ev.target).parent().siblings('.full-description').removeClass('d-none');
		// TODO: post here adding a see-more action
		// console.log($(ev.target).data('ad-id'));
	});

	// TODO: adding an ad CTA click action
	$('.ad-card > .card-actions > a').click(ev => {
		console.log($(ev.target).data('ad'));
		let ad = $(ev.target).data('ad');
		$.post('/api/app/track-ad-click', ad, result => {
			console.log('result', result);
		});
	});

	// clean the page url
	window.history.pushState("", "", '/eventos' + $('#cleanPageUrl').data('applied-filters'));

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

function trackAdClick(ad) {
	console.log('ad', ad);
}

// function hideBigAdDescription() {
// 	$('.card.ad-card .card-body .card-text').each((idx, el) => {
// 		let adDescriptionElement = $(el);
// 		console.log(adDescriptionElement);
// 	});
// }
