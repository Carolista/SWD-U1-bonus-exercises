/* CREATE OBJECTS REPRESENTING HTML ELEMENTS */

// It's generally a good idea to declare objects outside of listeners
// so they are in scope for everything, but there are exceptions,
// like if an element gets added into the DOM later

const dateOutput = document.getElementById('date-output');
const numButton = document.getElementById('num-button');
const numBox = document.getElementById('num-box');
const numOutput = document.getElementById('num-output');

/* CODE TO RUN IMMEDIATELY */

// Add date to existing text content
dateOutput.textContent += ` ${new Date().toLocaleDateString()}`;

/* EVENT LISTENERS */

numButton.addEventListener('click', () => {
	console.log('I clicked the button!'); // A good initial test

	let num = Math.ceil(Math.random() * 50);
	numOutput.textContent = num;
	numBox.style.visibility = 'visible';

	if (isEven(num)) {
		numOutput.style.color = 'yellowgreen';
		document.body.style.backgroundColor = 'yellowgreen';
	} else {
		numOutput.style.color = 'coral';
		document.body.style.backgroundColor = 'coral';
	}

	if (isMultipleOfThree(num)) {
		numButton.classList.add('spinning');
	} else {
		numButton.classList.remove('spinning');
	}

	if (isMultipleOfFive(num)) {
		// Handle race condition with setTimeout()
		setTimeout(() => {
			alert(`The number ${num} is a multiple of 5!`);
		}, 50);
	}
});

/** HELPER FUNCTIONS **/

function isEven(num) {
	return num % 2 === 0;
}

function isMultipleOfThree(num) {
	return num % 3 === 0;
}

function isMultipleOfFive(num) {
	return num % 5 === 0;
}

/** INSPECTING OBJECTS IN BROWSER CONSOLE **/

// Note the difference between .log() and .dir() here -
// One gives you a literal representation of the elements
// The other gives you a searchable tree to see all of the
// hidden attributes for the element and its children

console.log(numBox);
console.dir(numBox);
