const noButton = document.getElementById("no-btn");
const yesButton = document.getElementById("yes-btn");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("close-btn");
const typingText = document.getElementById("typing-text");

const game = document.getElementById("game");
const gameArea = document.getElementById("game-area");
const scoreDisplay = document.getElementById("score");

let score = 0;

const message = `
Jigglipuff,

From Jan 14, 2024 till today,
these 2 years with you have been my favorite chapter.

Distance only makes us stronger.

I admire your dreams.
I support your journey.
I celebrate you.

I choose you.
Today.
This Valentine’s.
And for every chapter ahead.

Will you be my Valentine… and my always?
`;

let index = 0;

function typeWriter() {
    if (index < message.length) {
        typingText.innerHTML += message.charAt(index);
        index++;
        setTimeout(typeWriter, 20); // FASTER typing
    }
}

function moveButton() {
    noButton.style.position = "absolute";
    noButton.style.left = Math.random() * (window.innerWidth - 100) + "px";
    noButton.style.top = Math.random() * (window.innerHeight - 50) + "px";
}

noButton.addEventListener("mouseover", moveButton);
noButton.addEventListener("touchstart", moveButton);

yesButton.addEventListener("click", () => {
    game.classList.remove("hidden");
    startGame();
});

closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
});

function startGame() {
    score = 0;
    scoreDisplay.textContent = score;
    spawnHeart();
}

function spawnHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💖";

    heart.style.left = Math.random() * 90 + "%";

    heart.addEventListener("click", () => {
        heart.remove();
        score++;
        scoreDisplay.textContent = score;

        if (score >= 5) {
            game.classList.add("hidden");
            showPopup();
        } else {
            spawnHeart();
        }
    });

    gameArea.appendChild(heart);

    setTimeout(() => {
        if (heart.parentNode) heart.remove();
        if (score < 5) spawnHeart();
    }, 3000);
}

function showPopup() {
    popup.style.display = "block";
    popup.style.animation = "zoomIn 0.3s ease";
    typeWriter();
    launchConfetti();
}

/* CONFETTI */
function launchConfetti() {
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement("div");
        confetti.innerHTML = "💘";
        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "%";
        confetti.style.top = "-10px";
        confetti.style.fontSize = "20px";
        confetti.style.animation = "fall 2s linear forwards";
        document.body.appendChild(confetti);

        setTimeout(() => confetti.remove(), 2000);
    }
}
