(function($) {
	"use strict"

	$('.btn-filter').click(() => {
		$('.btn-filter').toggleClass('active');
		$('.btn-menu').removeClass('active');

		if($('.btn-filter').hasClass('active')) {
			let filters = $('.aside-widget .row.filters-widget').clone(true);
			filters.removeClass(['d-none']);
			filters.children('div.col-12').removeClass().addClass('col-6');
	
			$('.bottom-menu-container').html(filters);
			$('.bottom-menu-container').addClass('show-with-transition');
		} else {
			$('.bottom-menu-container').removeClass('show-with-transition');
		}

	});

	$('.btn-menu').click((ev) => {
		$('.btn-menu').toggleClass('active');
		$('.btn-filter').removeClass('active');

		if($('.btn-menu').hasClass('active')) {
			$('.bottom-menu-container').html($('.menu-items').html());
			$('.bottom-menu-container').addClass('show-with-transition');
		} else {
			$('.bottom-menu-container').removeClass('show-with-transition');
		}
	});

	// Click outside of bottom menu
	$(window).click(function () {
		$('.bottom-menu-container').removeClass('show-with-transition');
		$('.btn-filter').removeClass('active');
		$('.btn-menu').removeClass('active');
	});
	
	$('#nav-bottom').click(function (event) {
			event.stopPropagation();
	});

	
	if($(document).width() > 580) {
		$('#nav-bottom').addClass('d-none');
	}
})(jQuery);

// Shrink #nav-top
$(window).scroll(function() {
	if ($(document).scrollTop() > 120) {
		$('#nav-top').addClass('shrink');
	} else {
		$('#nav-top').removeClass('shrink');
	}
});

// Hide #nav-bottom when scroll to footer
$(window).scroll(function() {
	if($(document).width() < 580) {
		if ($(document).scrollTop() >= $(document).height() - $(window).height() - 375) {
			$('#nav-bottom').addClass('d-none');
		} else {
			$('#nav-bottom').removeClass('d-none');
		}
	}
});
