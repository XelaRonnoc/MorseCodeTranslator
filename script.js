const inputForm = document.querySelector("form");
// const toggleBtn = document.querySelector("#toggleTranslationBtn");
let state = "englishMorse";
const outputArea = document.getElementById("outputArea");

const charToMorse = (char) => {
    switch (char) {
        case "A":
            return ".-";
        case "B":
            return "-...";
        case "C":
            return "-.-.";
        case "D":
            return "-..";
        case "E":
            return ".";
        case "F":
            return "..-.";
        case "G":
            return "--.";
        case "H":
            return "....";
        case "I":
            return "..";
        case "J":
            return ".---";
        case "K":
            return "-.-";
        case "L":
            return ".-..";
        case "M":
            return "--";
        case "N":
            return "-.";
        case "O":
            return "---";
        case "P":
            return ".--.";
        case "Q":
            return "--.-";

        case "R":
            return ".-.";
        case "S":
            return "...";

        case "T":
            return "-";
        case "U":
            return "..-";
        case "V":
            return "...-";
        case "W":
            return ".--";
        case "X":
            return "-..-";
        case "Y":
            return "-.--";
        case "Z":
            return "--..";

        case "1":
            return ".----";
        case "2":
            return "..---";
        case "3":
            return "...--";
        case "4":
            return "....-";
        case "5":
            return ".....";
        case "6":
            return "-....";
        case "7":
            return "--...";
        case "8":
            return "---..";
        case "9":
            return "----.";
        case "0":
            return "-----";

        case ",":
            return "--..--";
        case ".":
            return ".-.-.-";
        case "?":
            return "..--..";
        case ":":
            return "---...";
        case ";":
            return "-.-.-.";
        case "/":
            return "-..-.";
        case "-":
            return "-....-";
        case "'":
            return ".----.";
        case '"':
            return ".-..-.";
        case "_":
            return "..--.-";
        case "(":
            return "-.--.";
        case ")":
            return "-.--.-";
        case "=":
            return "-...-";
        case "+":
            return ".-.-";
        case "*":
            return "-..-";
        case "@":
            return ".--.-";
        case "!":
            return "-.-.--";
        case "$":
            return "...-..-";
        case " ":
            return "";

        default:
            return "cannotTranslateChar";
    }
};

const wordToMorse = (word) => {
    const charArr = word.split("");

    const translatedCharArr = charArr.map((item) => {
        return charToMorse(item);
    });

    const translatedWord = translatedCharArr.join(" ");
    return translatedWord;
};

const translateToMorse = (input) => {
    const wordArr = input.split(" ");

    const translatedWordArr = wordArr.map((item) => {
        return wordToMorse(item);
    });

    const translatedSentance = translatedWordArr.join("&nbsp&nbsp&nbsp");
    return translatedSentance;
};

const charToEnglish = (char) => {
    switch (char) {
        case ".-":
            return "A";
        case "-...":
            return "B";
        case "-.-.":
            return "C";
        case "-..":
            return "D";
        case ".":
            return "E";
        case "..-.":
            return "F";
        case "--.":
            return "G";
        case "....":
            return "H";
        case "..":
            return "I";
        case ".---":
            return "J";
        case "-.-":
            return "K";
        case ".-..":
            return "L";
        case "--":
            return "M";
        case "-.":
            return "N";
        case "---":
            return "O";
        case ".--.":
            return "P";
        case "--.-":
            return "Q";

        case ".-.":
            return "R";
        case "...":
            return "S";

        case "-":
            return "T";
        case "..-":
            return "U";
        case "...-":
            return "V";
        case ".--":
            return "W";
        case "-..-":
            return "X";
        case "-.--":
            return "Y";
        case "--..":
            return "Z";

        case ".----":
            return "1";
        case "..---":
            return "2";
        case "...--":
            return "3";
        case "....-":
            return "4";
        case ".....":
            return "5";
        case "-....":
            return "6";
        case "--...":
            return "7";
        case "---..":
            return "8";
        case "----.":
            return "";
        case "-----":
            return "0";

        case "--..--":
            return ",";
        case ".-.-.-":
            return ".";
        case "..--..":
            return "?";
        case "---...":
            return ":";
        case "-.-.-.":
            return ";";
        case "-..-.":
            return "/";
        case "-....-":
            return "-";
        case ".----.":
            return "'";
        case ".-..-.":
            return '"';
        case "..--.-":
            return "_";
        case "-.--.":
            return "(";
        case "-.--.-":
            return ")";
        case "-...-":
            return "=";
        case ".-.-":
            return "+";
        case "-..-":
            return "*";
        case ".--.-":
            return "@";
        case "-.-.--":
            return "!";
        case "...-..-":
            return "$";
        case " ":
            return "";

        default:
            return "cannotTranslateChar";
    }
};

const wordToEnglish = (word) => {
    const charArr = word.split(" ");

    const translatedCharArr = charArr.map((item) => {
        return charToEnglish(item);
    });

    return translatedCharArr.join("");
};

const translateToEnglish = (input) => {
    const wordArr = input.split("   ");

    const translatedWordArr = wordArr.map((item) => {
        return wordToEnglish(item);
    });
    return translatedWordArr.join(" ");
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

const detectTranslation = (input) => {
    const checkChar = new RegExp(/[A-Za-z0-9!-'/]/g);
    return checkChar.test(input);
};

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

// const switchTranslation = (curState) => {
//     const label = document.querySelector("label");
//     if (curState === "englishMorse") {
//         label.innerHTML = "Morse";
//         return "morseEnglish";
//     } else if (curState === "morseEnglish") {
//         label.innerHTML = "English";
//         return "englishMorse";
//     } else {
//         console.log("something went wrong");
//     }
// };

// toggleBtn.addEventListener("click", (e) => {
//     state = switchTranslation(state);
// });
