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

// DEMO: Update theme & content of card preview with user input

// DEMO: Add event listener to form for resetting form & card preview
// using handler defined below

// DEMO: Add event listener to form for submitting form 
// using handler defined below

/** TASK FUNCTIONS & EVENT HANDLERS **/

// DEMO: Define a function to apply a theme to the card preview

// DEMO: Define a reset handler that confirms reset before
// resetting the form or resetting the preview content and theme

// DEMO: Define a submit handler for the sake of representation
