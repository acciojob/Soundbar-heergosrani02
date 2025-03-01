//your JS code here. If required.
let btns = document.querySelectorAll(".btn");
let stop = document.querySelector(".stop");

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        let soundId = btn.getAttribute("data-sound");
        let audio = document.getElementById(soundId);
        audio.play();
    });
});

stop.addEventListener("click", () => {
    let audios = document.querySelectorAll("audio");
    audios.forEach(audio => {
        audio.pause();
    });
});