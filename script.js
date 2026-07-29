const message =
"Every heartbeat whispers your name. Every prayer carries your happiness. ❤️";

let i = 0;

function typeWriter(){

    if(i < message.length){

        document.getElementById("typing").innerHTML += message.charAt(i);

        i++;

        setTimeout(typeWriter,40);

    }

}

window.onload = function(){

    typeWriter();

}

function openLetter(){

    const letter = document.getElementById("letter");

    if(letter.style.display === "block"){

        letter.style.display = "none";

    }else{

        letter.style.display = "block";

        letter.scrollIntoView({

            behavior:"smooth"

        });

    }

}
