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
Object.values(allData).forEach(speech => {
	const option = document.createElement('option');
	option.id = speech.id;
	option.value = speech.id;
	option.textContent = `"${speech.title}" by ${speech.speaker}`;
	speechSelect.appendChild(option);
});

// Default to first speech in object
let currentSpeechData = allData['1'];

// Render page title, background, and speech title, speaker, date, and speech text
renderPage(currentSpeechData);

/** EVENT LISTENERS **/

// Re-render page when user selects a different speech
speechSelect.addEventListener('change', event => {
	console.log('Selected speech id:', event.target.value); // Initial test
	currentSpeechData = allData[speechSelect.value];
	renderPage(currentSpeechData); // Re-render page with updated speech data
});

/** TASK FUNCTIONS **/

function renderPage(speechData) {
	// Set the <title> in the <head>
	pageTitle.innerText = `${speechData.title} | ${speechData.speaker}`;

	// Set background image of the <body>
	document.body.style.background = `black url(${speechData.imagePath}) no-repeat center top fixed`;
	document.body.style.backgroundSize = '120%';

	// Set the content for all four elements in <main> using the imported data
	title.innerText = speechData.title;
	speaker.innerText = speechData.speaker;
	date.innerText = speechData.date;
	speechText.textContent = speechData.text;
}
