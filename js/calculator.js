
function calculate() {
	currentEquation = document.getElementById('results-box');
	currentEquation.value = eval(currentEquation.value);
}

function clearEquation () {
	currentEquation = document.getElementById('results-box');
	currentEquation.value = "";
}

function addValueToEquation(newValue) {
	currentEquation = document.getElementById('results-box');
	currentEquation.value = (currentEquation.value + newValue);
}