import { translateToEnglish } from "./morseToEnglish.js";
import { translateToMorse } from "./englishToMorse.js";
import { detectTranslation } from "./globalFunctions.js";

const inputForm = document.querySelector("form");
let state = "englishMorse";
const outputArea = document.getElementById("outputArea");

const translator = (inputText, state) => {
    const inputLabel = document.querySelector("label");
    const outPutLabel = document.querySelector(".tanslated-container__heading");
    if (state === "englishMorse") {
        inputLabel.innerHTML = "English";
        outPutLabel.innerHTML = "Morse";
        outputArea.innerHTML = translateToMorse(inputText.toUpperCase().trim());
    } else if (state === "morseEnglish") {
        inputLabel.innerHTML = "Morse";
        outPutLabel.innerHTML = "English";
        outputArea.innerHTML = translateToEnglish(inputText.trim());
    }
};

inputForm.addEventListener("submit", (e) => {
    const inputText = document.getElementById("toTranslateInput").value;
    if (detectTranslation(inputText)) {
        console.log("english to morse");
        state = "englishMorse";
    } else {
        console.log("morse to English");
        state = "morseEnglish";
    }
    translator(inputText, state);
    e.preventDefault();
    e.stopPropagation();
});
