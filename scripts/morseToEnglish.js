export const cannotTranslateCharError = new Error("Cannot Translate Char");
export const emptyStringError = new Error("input cannot be an empty string");
export const noInputError = new Error("at least one paramter must be passed");

export const charToEnglish = (char) => {
    if (char === "") {
        throw emptyStringError;
    }
    if (!char) {
        throw noInputError;
    }
    const cleanChar = char.trim();
    switch (cleanChar) {
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
            throw cannotTranslateCharError;
    }
};

export const wordToEnglish = (word) => {
    if (word === "") {
        throw emptyStringError;
    }
    if (!word) {
        throw noInputError;
    }
    const cleanWord = word.trim();
    const charArr = cleanWord.split(" ");

    const translatedCharArr = charArr
        .filter((item) => item)
        .map((item) => {
            return charToEnglish(item);
        });

    return translatedCharArr.join("");
};

export const translateToEnglish = (input) => {
    if (input === "") {
        throw emptyStringError;
    }
    if (!input) {
        throw noInputError;
    }
    const wordArr = input.split("   ");

    const translatedWordArr = wordArr
        .filter((item) => item)
        .map((item) => {
            return wordToEnglish(item);
        });
    return translatedWordArr.join(" ");
};
