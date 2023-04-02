const inputForm = document.querySelector("form");

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

inputForm.addEventListener("submit", (e) => {
    const inputText = document.getElementById("toTranslateInput").value;

    outputArea.innerHTML = translateToMorse(inputText.toUpperCase());
    e.preventDefault();
    e.stopPropigation();
});
