import { allData } from "./data/speeches.js";
import { getRandomNumber } from "./utils/utilityFuncs.js";

// NOTE: This file doesn't listen for window.onload
// I used the defer attribute on <script> in the <head> instead

// OBJECTS REPRESENTING HTML ELEMENTS ON PAGE
const pageTitle = document.querySelector("title");
const main = document.querySelector("main");

// Object to represent select (dropdown) field
const speechSelect = document.getElementById("speech-select");

const title = document.getElementById("title");
const speaker = document.getElementById("speaker");
const date = document.getElementById("date");

const speechBox = document.createElement("div");
main.appendChild(speechBox);
speechBox.id = "speech-box"; // for CSS

// Necessary to clear recursive setTimeout()
let timeoutId;
let shouldClearTimeout = false;


// RENDER ITEMS NOT YET ON PAGE
Object.values(allData).forEach(speech => {
    speechSelect.innerHTML += `<option id=${speech.id} value=${speech.id}>"${speech.title}" by ${allData.speaker}</option>`;
}); // this also could have been done with a for...in loop

// Default to first speech in object
let currentSpeechData = allData["1"];

renderPage(currentSpeechData);


// EVENT LISTENERS

// Event listener for change to select by user
speechSelect.addEventListener("change", (event) => {
    currentSpeechData = allData[event.target.value]; // user selection
    clearSpeechDisplay(); // out with the old
    setTimeout(() => {
        shouldClearTimeout = false;
        renderPage(currentSpeechData); // in with the new
    }, 100); // without this slight delay it will be word salad when switching speeches
});

// FUNCTIONS BELOW

function renderPage(speechData) {

    // Set the <title> in the <head>
    pageTitle.innerText = `${speechData.title} | ${speechData.speaker}`;

    // Set background image
    document.body.style.background = `black url(${speechData.imagePath}) no-repeat center top fixed`;
    document.body.style.backgroundSize = "120%";

    // Set the three headings
    title.innerText = speechData.title;
    speaker.innerText = speechData.speaker;
    date.innerText = speechData.date;

    let interval;
    let idx = 0;
    let text = speechData.text;

    function printNextChar() {
        if (shouldClearTimeout) {
            // debugger; // will allow you to see call stack in DevTools
            clearTimeout(timeoutId);
            return; // if this is missing it will be word salad when switching speeches
        }
        if (idx < text.length) {

            // Check to see what kind of character it is before
            // setting interval to emulate natural rhythm
            let currChar = text[idx];
            if (currChar === "," || currChar === ".") {
                interval = 160; // longer pauses at punctuation
            } else {
                interval = getRandomNumber(80);
            }

            // Set up new character span and add to speechBox
            let id = `character-${idx+1}`;
            let lineBreak = currChar === "\n" ? "<br />" : "";
            speechBox.innerHTML += `<span id=${id} class="animate new-char">${currChar}</span>${lineBreak}`;

            // Now that new character exists in DOM, access it
            const charSpan = document.getElementById(id);
            charSpan.style.backgroundColor = "rgba(248, 248, 255, 0.8)";

            // Wait until character has appeared on page to clear animation
            setTimeout(() => {
                charSpan.classList.remove("animate");
                charSpan.style.opacity = 1;
            }, interval);

            idx++;

            // NOTE: log character and interval to see sequence
            // console.log(idx, currChar, interval);

            // Recurse to prevent concurrent intervals for all characters
            timeoutId = setTimeout(printNextChar, interval); 
        }
    }
    
    printNextChar();
}

// Clears the current innerText and innerHTML from the four elements in <main> before loading a different speech
function clearSpeechDisplay() {
    title.innerText = "";
    speaker.innerText = "";
    date.innerText = "";
    speechBox.innerHTML = "";
    shouldClearTimeout = true;
}
