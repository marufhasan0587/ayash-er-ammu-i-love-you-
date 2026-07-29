const text = "Every heartbeat whispers your name ❤️";
let i = 0;

function typingEffect() {
    const typing = document.getElementById("typing");

    if (!typing) return;

    if (i < text.length) {
        typing.innerHTML += text.charAt(i);
        i++;
        setTimeout(typingEffect, 60);
    }
}

window.onload = () => {
    typingEffect();
};

function openLetter() {
    const letter = document.getElementById("letter");

    if (letter.style.display === "block") {
        letter.style.display = "none";
        return;
    }

    letter.style.display = "block";

    setTimeout(() => {
        letter.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }, 150);
}
