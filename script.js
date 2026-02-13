const noBtn = document.getElementById("no-btn");
const yesBtn = document.getElementById("yes-btn");
const game = document.getElementById("game");
const scoreDisplay = document.getElementById("score");
const gameArea = document.getElementById("game-area");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("close-btn");
const typingText = document.getElementById("typing-text");
const taunt = document.getElementById("taunt");
const music = document.getElementById("bg-music");

let score = 0;
let yesSize = 1;

/* ---------------- MUSIC ---------------- */

document.addEventListener("click", function () {
    music.volume = 0.5;
    music.play().catch(() => {});
}, { once: true });

/* ---------------- FLOATING HEARTS BACKGROUND ---------------- */

function createFloatingHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "💖";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-20px";
    heart.style.fontSize = "20px";
    heart.style.opacity = "0.7";
    heart.style.animation = "floatUp 8s linear forwards";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 8000);
}

setInterval(createFloatingHeart, 1500);

/* ---------------- NO BUTTON RUNS + YES GROWS ---------------- */

noBtn.addEventListener("mouseover", () => {
    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * 80 + "%";
    noBtn.style.top = Math.random() * 80 + "%";

    yesSize += 0.1;
    yesBtn.style.transform = `scale(${yesSize})`;
});

/* ---------------- YES CLICK STARTS GAME ---------------- */

yesBtn.addEventListener("click", () => {
    game.classList.remove("hidden");
});

/* ---------------- HEART CATCH GAME ---------------- */

const taunts = [
    "Bas itna hi?",
    "Clash Royal skills kaha gaye?",
    "Jigglipuff can do better.",
    "Focus Shrutika focus 😌",
    "Almost there…"
];

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💗";
    heart.style.left = Math.random() * 90 + "%";

    heart.addEventListener("click", () => {
        score++;
        scoreDisplay.textContent = score;
        heart.remove();

        if (score < 5) {
            taunt.textContent = taunts[Math.floor(Math.random() * taunts.length)];
        }

        if (score >= 5) {
            unlockProposal();
        }
    });

    gameArea.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 3000); // slightly slower
}

let gameInterval;

function startGame() {
    gameInterval = setInterval(createHeart, 1200);
}

yesBtn.addEventListener("click", startGame);

function unlockProposal() {
    clearInterval(gameInterval);
    game.classList.add("hidden");
    showPopup();
}

/* ---------------- POPUP + TYPING EFFECT ---------------- */

function showPopup() {
    popup.style.display = "block";

    const message = "You really thought I wouldn’t lock this behind a skill check? I love you more than you know. Always have. Always will.";

    let i = 0;
    function typeWriter() {
        if (i < message.length) {
            typingText.innerHTML += message.charAt(i);
            i++;
            setTimeout(typeWriter, 40);
        }
    }

    typeWriter();
}

/* ---------------- FIREWORKS EFFECT ---------------- */

function createFirework() {
    const fire = document.createElement("div");
    fire.innerHTML = "✨";
    fire.style.position = "fixed";
    fire.style.left = Math.random() * 100 + "vw";
    fire.style.top = Math.random() * 100 + "vh";
    fire.style.fontSize = "25px";
    document.body.appendChild(fire);

    setTimeout(() => fire.remove(), 1000);
}

function fireworks() {
    for (let i = 0; i < 25; i++) {
        setTimeout(createFirework, i * 100);
    }
}

yesBtn.addEventListener("click", fireworks);

/* ---------------- LOVE METER ---------------- */

const loveMeter = document.createElement("div");
loveMeter.style.position = "fixed";
loveMeter.style.bottom = "20px";
loveMeter.style.left = "50%";
loveMeter.style.transform = "translateX(-50%)";
loveMeter.style.background = "white";
loveMeter.style.color = "#ff4d6d";
loveMeter.style.padding = "10px 20px";
loveMeter.style.borderRadius = "20px";
loveMeter.style.fontWeight = "bold";
loveMeter.innerText = "Love Level: 0%";
document.body.appendChild(loveMeter);

let love = 0;
setInterval(() => {
    if (love < 100) {
        love += 1;
        loveMeter.innerText = `Love Level: ${love}%`;
    }
}, 200);

/* ---------------- CLOSE BUTTON ---------------- */

closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
});
const noBtn = document.getElementById("no-btn");
const yesBtn = document.getElementById("yes-btn");
const game = document.getElementById("game");
const scoreDisplay = document.getElementById("score");
const gameArea = document.getElementById("game-area");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("close-btn");
const typingText = document.getElementById("typing-text");
const taunt = document.getElementById("taunt");
const music = document.getElementById("bg-music");

let score = 0;
let yesSize = 1;

/* ---------------- MUSIC ---------------- */

document.addEventListener("click", function () {
    music.volume = 0.5;
    music.play().catch(() => {});
}, { once: true });

/* ---------------- FLOATING HEARTS BACKGROUND ---------------- */

function createFloatingHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "💖";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-20px";
    heart.style.fontSize = "20px";
    heart.style.opacity = "0.7";
    heart.style.animation = "floatUp 8s linear forwards";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 8000);
}

setInterval(createFloatingHeart, 1500);

/* ---------------- NO BUTTON RUNS + YES GROWS ---------------- */

noBtn.addEventListener("mouseover", () => {
    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * 80 + "%";
    noBtn.style.top = Math.random() * 80 + "%";

    yesSize += 0.1;
    yesBtn.style.transform = `scale(${yesSize})`;
});

/* ---------------- YES CLICK STARTS GAME ---------------- */

yesBtn.addEventListener("click", () => {
    game.classList.remove("hidden");
});

/* ---------------- HEART CATCH GAME ---------------- */

const taunts = [
    "Bas itna hi?",
    "Clash Royal skills kaha gaye?",
    "Jigglipuff can do better.",
    "Focus Shrutika focus 😌",
    "Almost there…"
];

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💗";
    heart.style.left = Math.random() * 90 + "%";

    heart.addEventListener("click", () => {
        score++;
        scoreDisplay.textContent = score;
        heart.remove();

        if (score < 5) {
            taunt.textContent = taunts[Math.floor(Math.random() * taunts.length)];
        }

        if (score >= 5) {
            unlockProposal();
        }
    });

    gameArea.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 3000); // slightly slower
}

let gameInterval;

function startGame() {
    gameInterval = setInterval(createHeart, 1200);
}

yesBtn.addEventListener("click", startGame);

function unlockProposal() {
    clearInterval(gameInterval);
    game.classList.add("hidden");
    showPopup();
}

/* ---------------- POPUP + TYPING EFFECT ---------------- */

function showPopup() {
    popup.style.display = "block";

    const message = "You really thought I wouldn’t lock this behind a skill check? I love you more than you know. Always have. Always will.";

    let i = 0;
    function typeWriter() {
        if (i < message.length) {
            typingText.innerHTML += message.charAt(i);
            i++;
            setTimeout(typeWriter, 40);
        }
    }

    typeWriter();
}

/* ---------------- FIREWORKS EFFECT ---------------- */

function createFirework() {
    const fire = document.createElement("div");
    fire.innerHTML = "✨";
    fire.style.position = "fixed";
    fire.style.left = Math.random() * 100 + "vw";
    fire.style.top = Math.random() * 100 + "vh";
    fire.style.fontSize = "25px";
    document.body.appendChild(fire);

    setTimeout(() => fire.remove(), 1000);
}

function fireworks() {
    for (let i = 0; i < 25; i++) {
        setTimeout(createFirework, i * 100);
    }
}

yesBtn.addEventListener("click", fireworks);

/* ---------------- LOVE METER ---------------- */

const loveMeter = document.createElement("div");
loveMeter.style.position = "fixed";
loveMeter.style.bottom = "20px";
loveMeter.style.left = "50%";
loveMeter.style.transform = "translateX(-50%)";
loveMeter.style.background = "white";
loveMeter.style.color = "#ff4d6d";
loveMeter.style.padding = "10px 20px";
loveMeter.style.borderRadius = "20px";
loveMeter.style.fontWeight = "bold";
loveMeter.innerText = "Love Level: 0%";
document.body.appendChild(loveMeter);

let love = 0;
setInterval(() => {
    if (love < 100) {
        love += 1;
        loveMeter.innerText = `Love Level: ${love}%`;
    }
}, 200);

/* ---------------- CLOSE BUTTON ---------------- */

closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
});
