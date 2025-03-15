const textArray = ["a Developer","a Web Developer"];
const typingSpeed = 100; // Speed of typing each character (ms)
const erasingSpeed = 50; // Speed of erasing each character (ms)
const delayBetweenTexts = 2000; // Delay between typing and erasing (ms)
let textIndex = 0; // Index of the current string
let charIndex = 0; // Index of the current character

const typedText = document.getElementById("typed-text");
const cursor = document.querySelector(".cursor");

function typeText() {
    if (charIndex < textArray[textIndex].length) {
        typedText.textContent += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, typingSpeed);
    } else {
        setTimeout(eraseText, delayBetweenTexts);
    }
}

function eraseText() {
    if (charIndex > 0) {
        typedText.textContent = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, erasingSpeed);
    } else {
        textIndex = (textIndex + 1) % textArray.length;
        setTimeout(typeText, typingSpeed);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeText, delayBetweenTexts);
});
