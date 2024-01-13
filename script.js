

const noButton = document.getElementById("no-btn");
const yesButton = document.getElementById("yes-btn");
const popup = document.getElementById("popup");

function moveButton() {
    noButton.style.position = "absolute";
    noButton.style.left = Math.random() * window.innerWidth + "px";
    noButton.style.top = Math.random() * window.innerHeight + "px";
}

noButton.addEventListener("mouseover", moveButton);
noButton.addEventListener("touchmove", moveButton);

yesButton.addEventListener("click", () => {
    popup.style.display = "block";
});

popup.addEventListener("click", () => {
    popup.style.display = "none";
});

// Hide the popup initially
popup.style.display = "none";
