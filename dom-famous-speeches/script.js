// TODO: Import object of objects from speeches.js instead of single speech
import { mlkData } from './data/speeches.js';

// DECLARE OBJECTS REPRESENTING HTML ELEMENTS ON PAGE
const pageTitle = document.querySelector('title');
const main = document.querySelector('main');

// TODO: Add object to represent select element


const title = document.getElementById('title');
const speaker = document.getElementById('speaker');
const date = document.getElementById('date');

const speechBox = document.createElement('div');
main.appendChild(speechBox);
speechBox.id = 'speech-box'; // for CSS

// RENDER THE PAGE
// TODO: Iterate over allData object to place <option> tags in <select>


// TODO: Refactor to use first speech in object of multiple speeches

renderPage(mlkData);

// EVENT LISTENERS

// TODO: Create event listener for user's changes to the select field


// FUNCTIONS BELOW
function renderPage(speechData) {
	// Set the <title> in the <head>
	pageTitle.innerText = `${speechData.title} | ${speechData.speaker}`;

	// Set background image
	document.body.style.background = `black url(${speechData.imagePath}) no-repeat top center fixed`;
	document.body.style.backgroundSize = '120%';

	// Set the content for all four elements in <main> using the imported data
	title.innerText = speechData.title;
	speaker.innerText = speechData.speaker;
	date.innerText = speechData.date;
	speechBox.innerHTML = `<span id="speech-span">${speechData.text}</span>`;

	// Improve the readability of the text of the speech
	const speechSpan = document.getElementById('speech-span');
	speechSpan.style.backgroundColor = 'rgba(248, 248, 255, 0.8)';
}
