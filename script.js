const inputForm = document.querySelector("form");

const outputArea = document.getElementById("outputArea");

const translate = (input) => {
    console.log(input);
};

inputForm.addEventListener("submit", (e) => {
    const inputText = document.getElementById("toTranslateInput").value;
    outputArea.innerHTML = translate(inputText);
    e.preventDefault;
    e.stopPropigation;
});
