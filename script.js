//your JS code here. If required.
let btns = document.querySelectorAll(".btn");
let stop = document.querySelector(".stop");
const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        audio.play();
    });
});

stop.addEventListener("click", () => {
   let audios = document.querySelectorAll("audio");
    audios.forEach(audio => {
        audio.pause();
    });
});