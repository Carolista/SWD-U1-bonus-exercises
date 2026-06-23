import { getRandomElement, getTitleCase } from './shared/utils.js';

/* Put shared HTML on all pages */

const url = new URL(window.location.href);
const pathNameArray = url.pathname.split('/');
const fileName = pathNameArray[pathNameArray.length - 1];
const pageName = fileName.slice(0, fileName.indexOf('.'));

const titleText = pageName === 'index' ? 'Welcome' : getTitleCase(fileName);
const navPath = pageName === 'index' ? '/pages' : '';
const homePath = pageName === 'index' ? '' : '../index.html';

const thisYear = new Date().getFullYear();

const head = document.querySelector('head');
const title = document.querySelector('title');
const header = document.querySelector('header');
const footer = document.querySelector('footer');

title.innerText = `Main Street Pet Rescue | ${titleText}`;
head.innerHTML += `<link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Damion&family=Quicksand:wght@300..700&display=swap" rel="stylesheet">
    `;

header.innerHTML = `<h1>Main Street Pet Rescue</h1>
    <nav>
        <li class="nav-link"><a href="${homePath}">Home</a></li>
        <li class="nav-link"><a href=".${navPath}/adopt.html">Adopt</a></li>
        <li class="nav-link"><a href=".${navPath}/volunteer.html">Volunteer</a></li>
        <li class="nav-link"><a href=".${navPath}/donate.html">Donate</a></li>
        <li class="nav-link"><a href=".${navPath}/location.html">Location</a></li>
    </nav>`;

footer.innerHTML = `
    <div>Main Street Pet Rescue | 987 Main Street | St. Louis, MO 63101</div>
    <div>&copy; ${thisYear} Friends of MSPR</div>
    `;

/*
    Fetch photos URLs from public API using modern syntax (linked below)
*/

const photoSection = document.getElementById('photo-section');
const photoUrls = [];

// Call the async function to execute the fetch code
getCatPics();

// RANDOM CAT PICS courtesy of https://thecatapi.com/
async function getCatPics() {
	// Fetch random photos using async/await syntax
	let response = await fetch(
		'https://api.thecatapi.com/v1/images/search?limit=5',
		{
			headers: {
				'x-api-key':
					'live_OGxGd4Qnu16oAEBlonS9roxlp8vKLHd0CNZ7KHIE67CqGGGBPJdg8FSbWEgMMoNA',
			},
		},
	);
	let data = await response.json();

	// console.log(data);

	// Add all urls to photoUrls array (see logged data for structure)
	for (let obj of data) {
		photoUrls.push(obj.url);
	}

	// Put image on page
	displayRandomPhoto();
}

function displayRandomPhoto() {
	randomUrl = getRandomElement(photoUrls);
	photoSection.innerHTML += `<img src="${randomUrl}" maxwidth="400" />`;
}
