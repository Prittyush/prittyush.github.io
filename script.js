const noButton = document.getElementById("no-btn");
const yesButton = document.getElementById("yes-btn");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("close-btn");
const typingText = document.getElementById("typing-text");

const message = `
Jigglipuff,

From Jan 14, 2024 till today,
these 2 years with you have been my favorite chapter.

Distance doesn’t change what we have.
It just makes our story stronger.

I admire your dreams.
I support your journey.
I celebrate the person you are becoming.

I choose you.
Not just today.
Not just this Valentine’s.
But for every season ahead.

Will you be my Valentine… and my always?
`;

let index = 0;

function typeWriter() {
    if (index < message.length) {
        typingText.innerHTML += message.charAt(index);
        index++;
        setTimeout(typeWriter, 40);
    }
}

// Make No button run away
function moveButton() {
    noButton.style.position = "absolute";
    noButton.style.left = Math.random() * (window.innerWidth - 100) + "px";
    noButton.style.top = Math.random() * (window.innerHeight - 50) + "px";
}

noButton.addEventListener("mouseover", moveButton);
noButton.addEventListener("touchstart", moveButton);

yesButton.addEventListener("click", () => {
    popup.style.display = "block";
    typeWriter();
});

closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
});
