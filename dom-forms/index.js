/** OBJECTS REPRESENTING ELEMENTS ON PAGE **/

// Card preview elements
const cardBkg = document.getElementById('card-bkg');
const name = document.getElementById('name');
const address1 = document.getElementById('address1');
const address2 = document.getElementById('address2');
const phoneEmail = document.getElementById('phone-email');

// Form element
const form = document.querySelector('form');

// Input elements
const styleInput = document.getElementById('style-input');
const nameInput = document.getElementById('name-input');
const address1Input = document.getElementById('address1-input');
const address2Input = document.getElementById('address2-input');
const omitAddress2 = document.getElementById('omit-address2');
const phoneInput = document.getElementById('phone-input');
const emailInput = document.getElementById('email-input');

/** DATA FOR UPDATING THEMES **/

const themeClasses = [
	'theme-elegant',
	'theme-floral',
	'theme-geometric',
	'theme-luxe',
	'theme-classic',
];

const styleClassMap = {
	none: '',
	elegant: 'theme-elegant',
	floral: 'theme-floral',
	geometric: 'theme-geometric',
	luxe: 'theme-luxe',
	classic: 'theme-classic',
};

/** EVENT LISTENERS **/

nameInput.addEventListener('input', () => {
    name.textContent = nameInput.value || 'Your Name';
});

address1Input.addEventListener('input', () => {
    address1.textContent = address1Input.value || 'Your Address Line 1';
});

address2Input.addEventListener('input', () => {
    address2.textContent = address2Input.value || 'Your Address Line 2';
});

omitAddress2.addEventListener('input', () => {
    address2.style.display = omitAddress2.checked ? 'none' : 'block';
});

phoneInput.addEventListener('input', handlePhoneAndEmailUpdate);

emailInput.addEventListener('input', handlePhoneAndEmailUpdate);

styleInput.addEventListener('change', () => {
    applyTheme(styleInput.value);
});

form.addEventListener('reset', handleFormReset);

form.addEventListener('submit', handleFormSubmit);

/** TASK FUNCTIONS & EVENT HANDLERS **/

// Update phone and email on same line
function handlePhoneAndEmailUpdate() {
	phoneEmail.textContent = `${phoneInput.value || 'Your Phone'} | ${
		emailInput.value || 'Your Email'
	}`;
}

// Use data to easily apply a new theme using classes
function applyTheme(selectedStyle) {
	cardBkg.classList.remove(...themeClasses);
	const className = styleClassMap[selectedStyle] || '';
	if (className) {
		cardBkg.classList.add(className);
	}
}

// Confirm and handle any form reset action
function handleFormReset(event) {
	// Confirm before resetting
	const shouldReset = confirm('\nAre you sure you want to start over?\n');
	if (!shouldReset) {
		event.preventDefault();
		return; // exit function early
	}

	// Control timing of visual resets in browser's re-rendering lifecycle
	requestAnimationFrame(() => {
		name.textContent = 'Your Name';
		address1.textContent = 'Your Address Line 1';
		address2.textContent = 'Your Address Line 2';
		phoneEmail.textContent = 'Your Phone | Your Email';
		address2.style.display = 'block';
		applyTheme('none');
	});
}

function handleFormSubmit() {
	// You could provide additional custom validation here
	//  with event.preventDefault() if invalid
	// This is also where you would save data to database 
    //  with a POST call instead of default GET
	// The form's action attribute handles navigation to next page
}
