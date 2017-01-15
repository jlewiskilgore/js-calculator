
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
	
	//If newValue is "+","-","*","/" verify that the last character is a number
	lastInput = (currentEquation.value).slice(-1);

	if(!isMathSymbol(newValue) || (isMathSymbol(newValue) && !isMathSymbol(lastInput))) {
		currentEquation.value = (currentEquation.value + newValue);
	}
}

function isMathSymbol(inputChar) {
	switch(inputChar) {
		case '+':
		case '-':
		case '/':
		case '*':
			return true;
			break;
		default:
			return false;
	}
}