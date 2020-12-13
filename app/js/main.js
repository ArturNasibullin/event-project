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
	let header = document.querySelector('.header-top__wrapper');
	let mainPage = document.querySelector('.header');
	let mainPageH = mainPage.innerHeight();
	let scrollPos = $(window).scrollTop();
	
	$(window).on('scroll load resize', function() {
		let mainPageH = mainPage.innerHeight();
		scrollPos = $(this).scrollTop();
	
		if (scrollPos > mainPageH) {
		header.addClass('fixed');
		} else {
		header.removeClass('fixed');
		}
	});
}