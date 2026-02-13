const startBtn = document.getElementById("startBtn");
const letter = document.getElementById("letter");
const game = document.getElementById("game");
const gameArea = document.getElementById("gameArea");
const scoreDisplay = document.getElementById("score");
const music = document.getElementById("bg-music");

let score = 0;

// Start everything
startBtn.addEventListener("click", () => {
    music.volume = 0.5;
    music.play().catch(() => {});
    letter.classList.remove("hidden");
    game.classList.remove("hidden");
    startGame();
});

// Floating hearts background
function createFloatingHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "💗";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-20px";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    heart.style.animation = "floatUp 5s linear forwards";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
}

setInterval(createFloatingHeart, 600);

// Mini Game
function startGame() {
    setInterval(createGameHeart, 800);
}

function createGameHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "💖";
    heart.style.position = "absolute";
    heart.style.left = Math.random() * 90 + "%";
    heart.style.top = "0px";
    heart.style.fontSize = "25px";
    heart.style.cursor = "pointer";

    heart.addEventListener("click", () => {
        score++;
        scoreDisplay.textContent = score;
        heart.remove();
    });

    gameArea.appendChild(heart);

    let fall = setInterval(() => {
        heart.style.top = heart.offsetTop + 5 + "px";

        if (heart.offsetTop > 350) {
            heart.remove();
            clearInterval(fall);
        }
    }, 20);
}
