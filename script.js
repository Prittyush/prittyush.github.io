const music = document.getElementById("bg-music");

document.addEventListener("click", function() {
    music.volume = 0.5;
    music.play().catch(() => {});
}, { once: true });

const noButton = document.getElementById("no-btn");
const yesButton = document.getElementById("yes-btn");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("close-btn");
const typingText = document.getElementById("typing-text");

const game = document.getElementById("game");
const gameArea = document.getElementById("game-area");
const scoreDisplay = document.getElementById("score");
const taunt = document.getElementById("taunt");

let score = 0;
let misses = 0;

const taunts = [
    "Aree bhai focus crow thoda😭",
    "Clash Royale player bolte apne apko",
    "Even I wasn’t this hard to catch 😌",
];

const message = `
I know I have been busy and have not been able to give you enough time, and I don't like that at all. I want to say that

I love you a lot. \n
I am proud of you. \n
I will always be there for you \n
I want no one else, just you! \n
I choose you and only you.

Not just today.
Not just this Valentine’s.
But for every year ahead.

So be my Valentine… and my always okay?
`;

let index = 0;

function typeWriter() {
    if (index < message.length) {
        typingText.innerHTML += message.charAt(index);
        index++;
        setTimeout(typeWriter, 15);
    }
}

function moveButton() {
    noButton.style.position = "absolute";
    noButton.style.left = Math.random() * (window.innerWidth - 100) + "px";
    noButton.style.top = Math.random() * (window.innerHeight - 50) + "px";
}

noButton.addEventListener("mouseover", moveButton);

yesButton.addEventListener("click", () => {
    game.classList.remove("hidden");
    startGame();
});

closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
});

function startGame() {
    score = 0;
    misses = 0;
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
        taunt.textContent = "";

        if (score >= 5) {
            game.classList.add("hidden");
            showPopup();
        } else {
            spawnHeart();
        }
    });

    gameArea.appendChild(heart);

    setTimeout(() => {
        if (heart.parentNode) {
            heart.remove();
            misses++;
            taunt.textContent = taunts[Math.floor(Math.random() * taunts.length)];

            if (misses > 5) {
                taunt.textContent = "Okay fine I’ll slow down for you 😂";
            }

            spawnHeart();
        }
    }, 2500);
}

function showPopup() {
    popup.style.display = "block";
    typeWriter();
}
/* MINI KISS GAME */

const grid = document.getElementById("kiss-grid");
const kissMessage = document.getElementById("kiss-message");

const totalBoxes = 9;
const winningIndex = Math.floor(Math.random() * totalBoxes);

for (let i = 0; i < totalBoxes; i++) {
    const box = document.createElement("div");
    box.classList.add("kiss-box");
    box.innerHTML = "❓";

    box.addEventListener("click", () => {
        if (i === winningIndex) {
            box.innerHTML = "💋";
            kissMessage.textContent = "You found it! Okay fine… you get unlimited kisses 😌❤️";
        } else {
            box.innerHTML = "🙈";
        }
    });

    grid.appendChild(box);
}
