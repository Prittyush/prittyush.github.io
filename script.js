const noButton = document.getElementById("no-btn");
const yesButton = document.getElementById("yes-btn");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("close-btn");

// Make "No" button run away
function moveButton() {
    noButton.style.position = "absolute";
    noButton.style.left = Math.random() * (window.innerWidth - 100) + "px";
    noButton.style.top = Math.random() * (window.innerHeight - 50) + "px";
}

noButton.addEventListener("mouseover", moveButton);
noButton.addEventListener("touchstart", moveButton);

// Show popup
yesButton.addEventListener("click", () => {
    popup.style.display = "block";
});

// Close popup
closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
});
