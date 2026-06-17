/** IMPORTS **/

import { allData } from './data/speeches.js';

/** OBJECTS REPRESENTING HTML ELEMENTS ON PAGE **/

// Create JS objects for existing elements
const pageTitle = document.querySelector('title');
const speechSelect = document.getElementById('speech-select');
const title = document.getElementById('title');
const speaker = document.getElementById('speaker');
const date = document.getElementById('date');
const speechBox = document.getElementById('speech-box');
const speechText = document.getElementById('speech-text');

/** INITIAL RENDERING OF PAGE **/

// Add options to select
allData.forEach(speech => {
	const option = document.createElement('option');
	option.id = speech.id;
	option.value = speech.id;
	option.textContent = `"${speech.title}" by ${speech.speaker}`;
	speechSelect.appendChild(option);
});

// Default to first speech in object
let currentSpeechData = allData[0];

// Render page using current speech data
renderPage(currentSpeechData);

/** EVENT LISTENERS **/

// Re-render page when user selects a different speech
speechSelect.addEventListener('change', () => {
	console.log('Selected speech id:', speechSelect.value); // Initial test
	currentSpeechData = allData.find(speech => speech.id == speechSelect.value);
	renderPage(currentSpeechData); // Re-render page with updated speech data
});

/** TASK FUNCTIONS **/

function renderPage(speechData) {
	// Set the <title> in the <head>
	pageTitle.textContent = `${speechData.title} | ${speechData.speaker}`;

	// Set background image of the <body>
	document.body.style.background = `black url(${speechData.imagePath}) no-repeat center top fixed`;
	document.body.style.backgroundSize = '120%';

	// Set the content for all four elements in <main> using the imported data
	title.textContent = speechData.title;
	speaker.textContent = speechData.speaker;
	date.textContent = speechData.date;
	speechText.textContent = speechData.text;
}
