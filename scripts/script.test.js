import { detectTranslation } from "./globalFunctions.js";
import {
    translateToEnglish,
    charToEnglish,
    wordToEnglish,
} from "./morseToEnglish.js";
import {
    translateToMorse,
    wordToMorse,
    charToMorse,
} from "./englishToMorse.js";

describe("test that tests working", () => {
    it("tests it's working", () => {
        expect(true).toBe(true);
    });
});

describe("Test that the translation Detection Function works", () => {
    it("returns true on english input", () => {
        expect(detectTranslation("Alex")).toBe(true);
        expect(detectTranslation("Alex Milton")).toBe(true);
    });

    it("returns true on numeric string input", () => {
        expect(detectTranslation("1234567890")).toBe(true);
        expect(detectTranslation("1 2 3 4 5 6 7 8 9 0")).toBe(true);
    });

    it("returns true on special char string input", () => {
        expect(detectTranslation("!@#$%&*()_-+=.',?/")).toBe(true);
    });
    it("returns true on morse string with one non-morse char", () => {
        expect(detectTranslation("..- -..- -.A")).toBe(true);
    });
    it("returns false on pure morse string", () => {
        expect(detectTranslation("..- -..- -.")).toBe(false);
    });
});

describe("Test that the char to morse function works as expected", () => {
    it(" returns correct morse char when letter is passed to the function", () => {
        expect(charToMorse("a")).toBe(".-");
        expect(charToMorse("A")).toBe(".-");
        expect(charToMorse("q")).toBe("--.-");
        expect(charToMorse("Q")).toBe("--.-");
    });

    it(" returns correct morse char when num is passed to the function", () => {
        expect(charToMorse("1")).toBe(".----");
    });
    it(" returns correct morse char when special char is passed to the function", () => {
        expect(charToMorse(",")).toBe("--..--");
        expect(charToMorse(".")).toBe(".-.-.-");
        expect(charToMorse("$")).toBe("...-..-");
    });
    it("empty sting when space is passed to the function", () => {
        expect(charToMorse(" ")).toBe("");
    });
});

describe("Test that the char to english function works as expected", () => {
    it(" returns correct english char when morse is passed to the function", () => {
        expect(charToEnglish(".-")).toBe("A");
        expect(charToEnglish("--.-")).toBe("Q");
    });

    it(" returns correct number when morse is passed to the function", () => {
        expect(charToEnglish(".----")).toBe("1");
        expect(charToEnglish("--...")).toBe("7");
    });
    it(" returns correct special char when morse is passed to the function", () => {
        expect(charToEnglish("--..--")).toBe(",");
        expect(charToEnglish("..--..")).toBe("?");
    });
});

describe("Test that the word to morse function works as expected", () => {
    it(" returns correct english char when morse is passed to the function", () => {
        expect(wordToMorse("$2Alex")).toBe("...-..- ..--- .- .-.. . -..-");
    });
});

describe("Test that the word to English function works as expected", () => {
    it(" returns correct english char when morse is passed to the function", () => {
        expect(wordToEnglish("...-..- ..--- .- .-.. . -..-")).toBe("$2ALEX");
    });
});

describe("Test that the translate to morse function works as expected", () => {
    it(" returns correct english char when morse is passed to the function", () => {
        expect(translateToMorse("My name is Alex I have $12")).toBe(
            "-- -.--&nbsp&nbsp&nbsp-. .- -- .&nbsp&nbsp&nbsp.. ...&nbsp&nbsp&nbsp.- .-.. . -..-&nbsp&nbsp&nbsp..&nbsp&nbsp&nbsp.... .- ...- .&nbsp&nbsp&nbsp...-..- .---- ..---"
        );
    });
});

describe("Test that the translate to morse function works as expected", () => {
    it(" returns correct english char when morse is passed to the function", () => {
        expect(
            translateToEnglish(
                "-- -.--   -. .- -- .   .. ...   .- .-.. . -..-   ..   .... .- ...- .   ...-..- .---- ..---"
            )
        ).toBe("MY NAME IS ALEX I HAVE $12");
    });
});
