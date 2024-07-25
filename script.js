const checkButton = document.getElementById("check-btn");
const paragraphText = document.getElementById("output-msg");
const resultDiv = document.getElementById("result");

checkButton.addEventListener("click", () => {
    const userInput = document.getElementById("text-input").value;
    if (userInput === "") {
        alert("Please input a value");
    } else {
        const result = (palindromeChecker(userInput));
        if (result) {
            paragraphText.innerHTML = `<strong>${userInput}</strong> is a palindrome.`;
        } else {
            paragraphText.innerHTML = `<strong>${userInput}</strong> is not a palindrome.`;
        }
        resultDiv.classList.remove("hidden");
    }
});

function palindromeChecker(string) {
    const standardString = cleanInput(string);
    const newString = standardString.split("").reverse().join("");
    return standardString === newString;
}

function cleanInput(string) {
    const regexMatcher = /[^a-zA-Z0-9]/g;
    return string.toLowerCase().replace(regexMatcher, "");
}
