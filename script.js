const startBtn = document.getElementById("startBtn");
const letter = document.getElementById("letter");
const gallery = document.getElementById("gallery");
const codGame = document.getElementById("codGame");
const proposal = document.getElementById("proposal");
const tauntContainer = document.getElementById("tauntContainer");
const music = document.getElementById("bg-music");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

startBtn.addEventListener("click", () => {
    music.volume = 0.5;
    music.play().catch(()=>{});
    letter.classList.remove("hidden");
    gallery.classList.remove("hidden");
    codGame.classList.remove("hidden");
    startTauntGame();
});

/* COD TAUNT GAME */
const taunts = [
    { question: "You are camping like ____ 😏", answer: "noob" },
    { question: "You got one tapped by ____ 😂", answer: "me" },
    { question: "Clutch king is ____ 👑", answer: "me" }
];

let current = 0;

function startTauntGame() {
    showTaunt();
}

function showTaunt() {
    if (current >= taunts.length) {
        codGame.classList.add("hidden");
        proposal.classList.remove("hidden");
        return;
    }

    tauntContainer.innerHTML = `
        <p>${taunts[current].question}</p>
        <input id="tauntInput" type="text" placeholder="Type here...">
        <button onclick="checkAnswer()">Submit</button>
    `;
}

window.checkAnswer = function() {
    const input = document.getElementById("tauntInput").value.toLowerCase();
    if (input === taunts[current].answer) {
        current++;
        showTaunt();
    } else {
        alert("Wrong answer 😏 Try again!");
    }
};

/* YES NO GAME */

noBtn.addEventListener("mouseover", () => {
    noBtn.style.position = "absolute";
    noBtn.style.top = Math.random() * 400 + "px";
    noBtn.style.left = Math.random() * 400 + "px";
});

yesBtn.addEventListener("click", () => {
    document.body.innerHTML = `
        <h1 style="margin-top:200px;">SHE SAID YESSSSSS ❤️🔥</h1>
        <h2>You are officially my Valentine 💖</h2>
    `;
});
