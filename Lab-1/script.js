// Script for FSD Lab 1 - DevTools Inspection

console.log("FSD Lab 1: Webpage loaded successfully.");
console.info("Info: Inspecting Console panel output.");
console.warn("Warning: Sample warning message for DevTools testing.");

document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("testBtn");
    const outputMessage = document.getElementById("outputMessage");

    if (button && outputMessage) {
        button.addEventListener("click", () => {
            console.log("Interactive Button was clicked!");
            outputMessage.textContent = "Button was clicked! Check the Console panel for log output.";
        });
    }
});
