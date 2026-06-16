
// Import array of objects from speeches.js
import { allData } from "./data/speeches.js";

window.onload = () => {

    // DECLARE OBJECTS REPRESENTING HTML ELEMENTS ON PAGE
    const pageTitle = document.querySelector("title");
    const main = document.querySelector("main");

    // Add object to represent select
    const speechSelect = document.getElementById("speech-select");

    const title = document.getElementById("title");
    const speaker = document.getElementById("speaker");
    const date = document.getElementById("date");

    const speechBox = document.createElement("div");
    main.appendChild(speechBox);
    speechBox.id = "speech-box"; // for CSS
    

    // RENDER THE PAGE 
    Object.values(allData).forEach(speech => {
        speechSelect.innerHTML += `<option id=${speech.id} value=${speech.id}>"${speech.title}" by ${speech.speaker}</option>`;
    });
    
    // Default to first speech in object
    let currentSpeechData = allData["1"];

    renderPage(currentSpeechData);


    // EVENT LISTENERS
    
    // Event listener for change to select by user
    speechSelect.addEventListener("change", (event) => {
        console.log(event.target.value); // Always check for event firing first
        currentSpeechData = allData[speechSelect.value];
        renderPage(currentSpeechData);
    });


    // FUNCTIONS BELOW
    function renderPage(speechData) {

        // Set the <title> in the <head>
        pageTitle.innerText = `${speechData.title} | ${speechData.speaker}`;

        // Set background image
        document.body.style.background = `black url(${speechData.imagePath}) no-repeat center top fixed`;
        document.body.style.backgroundSize = "120%";
        
        // Set the content for all four elements in <main> using the imported data
        title.innerText = speechData.title;
        speaker.innerText = speechData.speaker;
        date.innerText = speechData.date;
        speechBox.innerHTML = `<span id="speech-span">${speechData.text}</span>`;

        // Improve the readability of the text of the speech
        const speechSpan = document.getElementById("speech-span");
        speechSpan.style.backgroundColor = "rgba(248, 248, 255, 0.8)"
    }
}
