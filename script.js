# Updated JavaScript code
const noButton = document.getElementById("no-btn");
const yesButton = document.getElementById("yes-btn");
const popup = document.getElementById("popup");

function moveButton() {
    noButton.style.position = "absolute";
    noButton.style.left = Math.random() * 80 + "vw";
    noButton.style.top = Math.random() * 80 + "vh";
}

noButton.addEventListener("mouseover", moveButton);
noButton.addEventListener("touchstart", moveButton);

yesButton.addEventListener("click", () => {
    popup.style.display = "block";
});

popup.addEventListener("click", () => {
    popup.style.display = "none";
});

// Hide the popup initially
popup.style.display = "none";
