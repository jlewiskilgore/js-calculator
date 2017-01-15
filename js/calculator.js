// $(document).ready(function() {

// }

function calculate() {
	currentEquation = document.getElementById('results-box');
	currentEquation.value = eval(currentEquation.value);
}

function addValueToEquation(newValue) {
	currentEquation = document.getElementById('results-box');
	currentEquation.value = (currentEquation.value + newValue);
}