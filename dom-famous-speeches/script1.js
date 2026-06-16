// Import mlkData
import { mlkData } from "./data/speeches.js";

window.onload = () => {

    // DECLARE OBJECTS REPRESENTING HTML ELEMENTS ON PAGE
    const pageTitle = document.querySelector("title");
    const main = document.querySelector("main");

    // Initialize three objects that represent the three elements already in <main>
    const title = document.getElementById("title");
    const speaker = document.getElementById("speaker");
    const date = document.getElementById("date");

    // Use .createElement() to create an element and .append() to add it to <main>
    // Then give it an id of "speech-box"
    const speechBox = document.createElement("div");
    main.appendChild(speechBox);
    speechBox.id = "speech-box"; // for CSS
   
    
    // RENDER THE PAGE
    renderPage(mlkData);


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
