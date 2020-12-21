window.addEventListener('DOMContentLoaded', () => {

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
		let fixedSpot = document.querySelector('.header-hero__tabs').offsetTop;

		window.addEventListener("scroll", function() {
			
			let scrollPos = window.pageYOffset;
				if (scrollPos > fixedSpot) {
				header.classList.add('header-top__wrap--fixed');
				} else {
				header.classList.remove('header-top__wrap--fixed');
				}
		});
	}
	topMenuFixed();

	//Smooth Scroll
	// const links = document.querySelectorAll('.menu__link');

	// links.forEach(link => {
	// 	link.addEventListener("click", clickHandler);
	// });

	// function clickHandler(e) {
	// e.preventDefault();

	// const href = this.getAttribute("href");
	// const offsetTop = document.querySelector(href).offsetTop - 100;

	// scroll({
	// 	top: offsetTop,
	// 	behavior: "smooth"
	// 	});
	// }


		// Vanilla JavaScript Scroll to Anchor

	(function() {
		scrollTo();
	})();

	function scrollTo() {
		const links = document.querySelectorAll('.menu__link');
		links.forEach(each => (each.onclick = scrollAnchors));
	}

	function scrollAnchors(e, respond = null) {
		const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);
		e.preventDefault();
		var targetID = (respond) ? respond.getAttribute('href') : this.getAttribute('href');
		const targetAnchor = document.querySelector(targetID);
		if (!targetAnchor) return;
		const originalTop = distanceToTop(targetAnchor);
		window.scrollBy({ top: originalTop, left: 0, behavior: 'smooth' });
		const checkIfDone = setInterval(function() {
			const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
			if (distanceToTop(targetAnchor) === 0 || atBottom) {
				targetAnchor.tabIndex = '-1';
				targetAnchor.focus();
				window.history.pushState('', '', targetID);
				clearInterval(checkIfDone);
			}
		}, 100);
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


	//Анимации на JavaScript для модального окна
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
	modalClose.addEventListener('click', (event) => {
		event.preventDefault();
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
			event.preventDefault();
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

	//Кнопка menu
	let btn = document.querySelector('.header-top__nav-btn');
	let menu = document.querySelector('.menu');
	let menuItem = document.querySelectorAll('.menu__item');

	btn.addEventListener('click', () => {
		menu.classList.toggle('active');
		btn.classList.toggle('active');
		
		menuItem.forEach(item => {
			item.addEventListener('click', () => {
				btn.classList.remove('active');
				menu.classList.remove('active');
			});
		});
	});


	//Animate CSS
	animateCSS('.header-hero__text', 'animate__fadeInLeft');
	animateCSS('.header-hero__slider', 'animate__fadeInRight');

	function animateCSS (element, animation, prefix = 'animate__') {
		const node  = document.querySelector(element);

		node.classList.add(`${prefix}animated`, animation);
		node.addEventListener('animationend', handleAnimationEnd, {once: true});

		function handleAnimationEnd() {
			node.classList.remove(`${prefix}animated`, animation);
			}		
	}

	let servicesPage = document.querySelector('.about').offsetTop + 350;
	let jobsPage = document.querySelector('.calc').offsetTop - 200;
	let modelsPage = document.querySelector('.jobs').offsetTop - 300;

	function fadeBlock (animationStart, element, animation) {
		window.addEventListener("scroll", function onScroll() {
			if (window.pageYOffset > animationStart) {
				animateCSS(element, animation);
				this.removeEventListener("scroll", onScroll);
			}
		});
	}
	fadeBlock(servicesPage, '.description__img', 'animate__fadeInLeft');
	fadeBlock(servicesPage, '.description__text', 'animate__fadeInRight');
	fadeBlock(jobsPage, '.jobs__wrap', 'animate__fadeInUp');
	fadeBlock(modelsPage, '.models__wrap', 'animate__zoomIn');

	// Табы в блоке Services
	function tabs(tabsSelector) {
		const tabs = document.querySelectorAll(tabsSelector),
			  tabsContent = document.querySelectorAll('.description__item'),
			  tabsParent = document.querySelector('#services__tabs');
	
		function hideTabsContent() {
			tabsContent.forEach(content => {
				content.style.display = 'none';
			});
	
			tabs.forEach(item => {
				item.classList.remove('services__tabs-item--active');
			});
		}
	
		function showTabs (i = 0) {
			tabsContent[i].style.display = 'block';
			tabs[i].classList.add('services__tabs-item--active');
		}
	
		hideTabsContent();
		showTabs();
		
		tabsParent.addEventListener('click', (event) => {
			const target = event.target;
	
			if (target && target.classList.contains(tabsSelector.slice(1))) {
				tabs.forEach((item, i) => {
					if (target == item) {
						hideTabsContent();
						showTabs(i);
					}
				});
			}
		});
	}
	
	tabs('.services__tabs-item');
	

});


