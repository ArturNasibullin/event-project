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
