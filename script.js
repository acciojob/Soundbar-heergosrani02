//your JS code here. If required.
let btns = document.querySelectorAll(".btn");
let stop = document.querySelector(".stop");
const audio = document.getElementById("audio");

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