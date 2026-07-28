function openLetter() {
    const card = document.querySelector(".card");
    const letter = document.getElementById("letter");

    card.style.display = "none";
    letter.style.display = "block";

    document.body.style.overflow = "hidden";

    createHearts();
}

function createHearts() {
    for (let i = 0; i < 40; i++) {
        let heart = document.createElement("div");

        heart.innerHTML = "❤️";
        heart.className = "heart";

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (3 + Math.random() * 4) + "s";
        heart.style.fontSize = (20 + Math.random() * 30) + "px";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 7000);
    }
}
