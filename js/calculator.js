
function calculate() {
	clearError();
	currentEquation = document.getElementById('results-box');
	lastInput = (currentEquation.value).slice(-1);

	if(lastInput == '') {
		return;
	}
	else if(!isMathSymbol(lastInput)) {
		currentEquation.value = eval(currentEquation.value);
	}
	else {
		currentEquation.value = 'Error';
	}
}

function clearEquation () {
	currentEquation = document.getElementById('results-box');
	currentEquation.value = "";
}

function addValueToEquation(newValue) {
	clearError();
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

function clearError() {
	currentEquation = document.getElementById('results-box');
	if(currentEquation.value === 'Error') {
		currentEquation.value = "";
	}
		console.log(currentEquation.value);
}