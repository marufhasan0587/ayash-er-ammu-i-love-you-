const text = "Every heartbeat whispers your name. Every prayer carries your happiness. ❤️";

let i = 0;

function typingEffect(){

    if(i < text.length){

        document.getElementById("typing").innerHTML += text.charAt(i);

        i++;

        setTimeout(typingEffect,50);

    }

}

window.onload=function(){

    typingEffect();

}

function openLetter(){

    const letter=document.getElementById("letter");

    if(letter.style.display==="block"){

        letter.style.display="none";

    }else{

        letter.style.display="block";

        letter.scrollIntoView({

            behavior:"smooth"

        });

    }

}
