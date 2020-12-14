function ready(fn) {
	if (document.readyState != 'loading'){
	  fn();
	} else {
	  document.addEventListener('DOMContentLoaded', fn);
	}
  }
  ready(() => {

	// Отображение значений range в калькуляторе
	function showSliderValue() {
		const days = document.getElementById("inputDays");
		const human = document.getElementById("inputHumans");
		const hours = document.getElementById("inputHours");
		let outputDays = document.getElementById("outputDays");
		let outputHumans = document.getElementById("outputHumans");
		let outputHours = document.getElementById("outputHours");

		days.oninput = function() {
			outputDays.textContent = this.value;
		};
		human.oninput = function() {
			outputHumans.textContent = this.value;
		};
		hours.oninput = function() {
			outputHours.textContent = this.value;
		};
	}
	showSliderValue();

	// Фиксированное меню после прокрутки
	function topMenuFixed() {
		let header = document.querySelector('.header-top__wrap');
		let mainPage = document.querySelector('.header-hero__tabs').offsetTop;

		window.addEventListener("scroll", function() {
			
			let scrollPos = window.pageYOffset;
				if (scrollPos > mainPage) {
				header.style.position = "fixed";
				} else {
				header.style.position = "absolute";
				}
		});
	}
	topMenuFixed();

	// Эффект бегущих цифр
	let time = 2000; //ms

	function outNum(num, step, elem) {
		let l = document.querySelector('#' + elem);
		n = 0;
		let t = Math.round(time / (num / step));
		let interval = setInterval(() => {
			n = n + step;
			if (n >= num) {
				clearInterval(interval);
				n = num;
			}
			l.innerHTML = n;
		}, t);
	}
	
	let wPage = document.querySelector('.tabs').offsetTop - 50;

	window.addEventListener("scroll", function onScroll() {
		if (window.pageYOffset > wPage) {
			outNum(12, 1, 'about__year');
			outNum(34, 1, 'about__sity');
			outNum(1011, 10, 'about__event');
			outNum(543, 10, 'about__people');
			this.removeEventListener("scroll", onScroll);
		}
	});
  });


$(window).on('load', (function() {
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
	slidesToScroll: 5,
	asNavFor: '.header-hero__slider-wrap',
	focusOnSelect: true,
  });

//   $('.services__img').slick({
// 	slidesToShow: 1,
//   	slidesToScroll: 1,
//   	fade: true,
//   	swipe: false,
//   	prevArrow: $('.arrow-left'),
//   	nextArrow: $('.arrow-right'),
// });
// $('#services__tabs').slick({
//   	slidesToShow: 5,
//   	slidesToScroll: 5,
//   	asNavFor: '.services__img',
//   	focusOnSelect: true,
// });
}));
