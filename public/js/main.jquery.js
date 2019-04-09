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
			$('.bottom-menu-container').html('abc');
			$('.bottom-menu-container').addClass('show-with-transition');
		} else {
			$('.bottom-menu-container').removeClass('show-with-transition');
		}
	});

	
	if($(document).width() > 580) {
		$('#nav-bottom').addClass('d-none');
	}

	// NAVBAR STUFF (// TODO: COLLECT?)
	// Mobile dropdown
	// $('.has-dropdown>a').on('click', function() {
	// 	$(this).parent().toggleClass('active');
	// });

	// Aside Nav
	// $(document).click(function(event) {
	// 	if (!$(event.target).closest($('#nav-aside')).length) {
	// 		if ( $('#nav-aside').hasClass('active') ) {
	// 			$('#nav-aside').removeClass('active');
	// 			$('#nav').removeClass('shadow-active');
	// 		} else {
	// 			if ($(event.target).closest('.aside-btn').length) {
	// 				$('#nav-aside').addClass('active');
	// 				$('#nav').addClass('shadow-active');
	// 			}
	// 		}
	// 	}
	// });

	// $('.nav-aside-close').on('click', function () {
	// 	$('#nav-aside').removeClass('active');
	// 	$('#nav').removeClass('shadow-active');
	// });


	// $('.search-btn').on('click', function() {
	// 	$('#nav-search').toggleClass('active');
	// });

	// $('.search-close').on('click', function () {
	// 	$('#nav-search').removeClass('active');
	// });

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
	console.log($(document).width());
	if($(document).width() < 580) {
		if ($(document).scrollTop() >= $(document).height() - $(window).height() - 375) {
			$('#nav-bottom').addClass('d-none');
		} else {
			$('#nav-bottom').removeClass('d-none');
		}
	}

});
