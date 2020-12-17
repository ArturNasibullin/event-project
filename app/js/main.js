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
				header.style.opacity = "0.9";
				} else {
				header.style.position = "absolute";
				}
		});
	}
	topMenuFixed();

	//Smooth Scroll
	const links = document.querySelectorAll(".menu__item a");

	links.forEach(link => {
		link.addEventListener("click", clickHandler);
	});

	function clickHandler(e) {
	e.preventDefault();

	const href = this.getAttribute("href");
	const offsetTop = document.querySelector(href).offsetTop - 100;

	scroll({
		top: offsetTop,
		behavior: "smooth"
		});
	}

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


	//Анимации
	// fadeIn function 
	function fadeIn(el, display) {
		el.style.opacity = 0;
		el.style.display = display || 'block';
		(function fade() {
			var val = parseFloat(el.style.opacity);
			if (!((val += .1) > 1)) {
				el.style.opacity = val;
				requestAnimationFrame(fade);
			}
		})();
	}
	// fadeOut function 
	function fadeOut(el) {
		el.style.opacity = 1;
		(function fade() {
			if ((el.style.opacity -= .1) < 0) {
				el.style.display = 'none';
			} else {
				requestAnimationFrame(fade);
			}
		})();
	}


	// Модальное окно
	let modal = document.querySelector('.modal');
	let modalOpen = document.querySelectorAll('.modal-open');
	let modalClose = document.querySelector('.modal__close');
	let modalOverlay = document.querySelector('.modal__overlay');

	//Открыть модальное окно при клике на кнопки с классом .modal-open
	modalOpen.forEach(mdl => {
		mdl.addEventListener('click', () => {
			fadeIn(modal, 'block');
			document.body.style.overflow = 'hidden';
		});
	});

	//Закрыть модальное окно при клике на крестик
	modalClose.addEventListener('click', () => {
		fadeOut(modal);
		document.body.style.overflow = '';
	});

	// Закрыть модальное окно при нажатии на клавишу Ecs
	document.addEventListener('keydown', function(event) {
		if (event.code === 'Escape') {
			event.preventDefault();
			fadeOut(modal);
			document.body.style.overflow = '';
		}
	}, false);

	// Закрыть модальное окно при нажатии на подложку
	modalOverlay.addEventListener('click', function(event) {
		if (event.target == modalOverlay) {
			fadeOut(modal);
			document.body.style.overflow = '';
		}
	});

	// Открыть модальное окно при прокрутке до конца страницы
	function showModalByScroll () {
		if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
			fadeIn(modal, 'block');
			document.body.style.overflow = 'hidden';
			window.removeEventListener('scroll', showModalByScroll);
		}
	}
	window.addEventListener('scroll', showModalByScroll);

	//Калькулятор

	function calc() {
		let inputDays = 3, //default
			inputHumans = 2, //default
			inputHours = 4, //default
			selectValue = 1;

		function getDynamicInformation (selector) {
			let input = document.querySelector(selector);
			let select = document.querySelector('.form__select');
			
			//Слушать изменение в Select и подставлять значение в calcTotal
			select.addEventListener('change', (e) => {
				switch (e.target.value) {
					case '1':
						selectValue = +e.target.value;
						break;
					case '2':
						selectValue = +e.target.value;
						break;
					case '3':
						selectValue = +e.target.value;
						break;
					case '4':
						selectValue = +e.target.value;
						break;	
					case '5':
						selectValue = +e.target.value;
						break;
			}});
			
			//Слушать изменение в input и подставлять значение в calcTotal
			input.addEventListener('input', () => {
				switch (input.getAttribute('id')) {
					case 'inputDays':
						inputDays = +input.value;
						break;
					case 'inputHumans':
						inputHumans = +input.value;
						break;
					case 'inputHours':
						inputHours = +input.value;
						break;
				}
				calcTotal(inputDays, inputHumans, inputHours, selectValue);
			});
		}
		getDynamicInformation('#inputDays');
		getDynamicInformation('#inputHumans');
		getDynamicInformation('#inputHours');

		function calcTotal (inputDays, inputHumans, inputHours, selectValue) {
			let result = document.querySelector('.form__precoast-big');
			
			if (selectValue === 1) {
				result.textContent = Math.round(inputDays * inputHumans * (1000 * inputHours));
				calcTotal();
			} else if (selectValue == 2) {
				result.textContent = Math.round(inputDays * inputHumans * (1100 * inputHours));
				calcTotal();
			} else if (selectValue == 3) {
				result.textContent = Math.round(inputDays * inputHumans * (1200 * inputHours));
				calcTotal();
			} else if (selectValue == 4) {
				result.textContent = Math.round(inputDays * inputHumans * (1300 * inputHours));
			} else if (selectValue == 5) {
				result.textContent = Math.round(inputDays * inputHumans * (1400 * inputHours));
			}
		}	
	}
	calc();

	const animateCSS = (element, animation, prefix = 'animate__') => {
	// We create a Promise and return it
	return new Promise((resolve, reject) => {
		const animationName = `${prefix}${animation}`;
		const node = document.querySelector(element);
	
		node.classList.add(`${prefix}animated`, animationName);
	
		// When the animation ends, we clean the classes and resolve the Promise
		function handleAnimationEnd() {
		node.classList.remove(`${prefix}animated`, animationName);
		resolve('Animation ended');
		}
	
		node.addEventListener('animationend', handleAnimationEnd, {once: true});
		animateCSS('.my-element', 'bounce');
	});
		
	};
  });


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
		slidesToScroll: 5,
		asNavFor: '.header-hero__slider-wrap',
		focusOnSelect: true,
	});

	// Слайдер jobs
	$('.jobs__wrap').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		swipe: true,
		prevArrow: $('.jobs__arrow-left'),
		nextArrow: $('.jobs__arrow-right'),
	});

	// Слайдер models
	$('.models__wrap').slick({
		slidesToShow: 4,
		slidesToScroll: 2,
		swipe: true,
		prevArrow: $('.models__arrow-left'),
		nextArrow: $('.models__arrow-right'),
	});

	// Слайдер partners
	$('.partners__wrap').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		swipe: true,
		prevArrow: $('.partners__arrow-left'),
		nextArrow: $('.partners__arrow-right'),
	});
}));
