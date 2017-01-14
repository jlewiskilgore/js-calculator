// $(document).ready(function() {

// }

function calculate() {
	alert('calculating');
}

function addValueToEquation(newValue) {
	currentEquation = document.getElementById('results-box');
	currentEquation.value = (currentEquation.value + newValue);
}