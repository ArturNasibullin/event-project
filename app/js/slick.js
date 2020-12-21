// Слайдер Slick
$(window).on('load', (function() {

	// Слайдер header
	$('.header-hero__slider-wrap').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		swipe: false,
		prevArrow: $('.arrow-left'),
		nextArrow: $('.arrow-right'),
	});
	$('#header-hero__tabs').slick({
		slidesToShow: 5,
		asNavFor: '.header-hero__slider-wrap',
		focusOnSelect: true,
	});

	// Слайдер jobs
	$('.jobs__wrap').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		swipe: true,
		autoplay: true,
  		autoplaySpeed: 3000,
		prevArrow: $('.jobs__arrow-left'),
		nextArrow: $('.jobs__arrow-right'),
		responsive:[
			{
			  breakpoint: 769,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			}
		  ]
	});

	// Слайдер models
	$('.models__wrap').slick({
		slidesToShow: 4,
		swipe: true,
		autoplay: true,
  		autoplaySpeed: 2000,
		prevArrow: $('.models__arrow-left'),
		nextArrow: $('.models__arrow-right'),
		responsive:[
			{
			  breakpoint: 769,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			  }
			},
			{
				breakpoint: 481,
				settings: {
				  slidesToShow: 2,
				  slidesToScroll: 1
				}
			},
			{
				breakpoint: 351,
				settings: {
				  slidesToShow: 1,
				  slidesToScroll: 1
				}
			}
		  ]
	});

	// Слайдер partners
	$('.partners__wrap').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		swipe: true,
		autoplay: true,
  		autoplaySpeed: 4000,
		prevArrow: $('.partners__arrow-left'),
		nextArrow: $('.partners__arrow-right'),
		responsive:[
			{
			  breakpoint: 769,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			  }
			},
			{
				breakpoint: 481,
				settings: {
				  slidesToShow: 2,
				  slidesToScroll: 1
				}
			},
			{
				breakpoint: 351,
				settings: {
				  slidesToShow: 1,
				  slidesToScroll: 1
				}
			}
		  ]
	});

}));
