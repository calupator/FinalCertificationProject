const inputPass = document.querySelectorAll('.pass');
inputPass.forEach(inputEl => {
	inputEl.addEventListener('input', getValue);
});

function getValue(event) {
	if (inputPass[0].value === '' && inputPass[1].value === '') {
		inputPass[0].style.borderColor = 'black';
		inputPass[0].style.borderWidth = '1px';
		inputPass[1].style.borderColor = 'black';
		inputPass[1].style.borderWidth = '1px';
	} else if (inputPass[0].value === '' ||
		inputPass[1].value === '' ||
		inputPass[0].value !== inputPass[1].value) {

		inputPass[0].style.borderColor = 'red';
		inputPass[0].style.borderWidth = '2px';
		inputPass[1].style.borderColor = 'red';
		inputPass[1].style.borderWidth = '2px';
	} else {
		inputPass[0].style.borderColor = 'green';
		inputPass[0].style.borderWidth = '2px';
		inputPass[1].style.borderColor = 'green';
		inputPass[1].style.borderWidth = '2px';
		event.preventDefault();
	}
}

