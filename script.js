
const button = document.getElementById("openBtn");
const letter = document.getElementById("letter");

button.addEventListener("click", () => {
    if (letter.classList.contains("show")) {
        letter.classList.remove("show");
        button.innerHTML = "💌 Open My Heart";
    } else {
        letter.classList.add("show");
        button.innerHTML = "❤️ Close Letter";
    }
});

// Floating Hearts
setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (20 + Math.random() * 30) + "px";
    heart.style.animationDuration = (4 + Math.random() * 3) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);
}, 300);
