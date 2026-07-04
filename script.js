const yes = document.getElementById("yes");
const no = document.getElementById("no");
const welcome = document.querySelector(".welcome");
const container = document.querySelector(".container");
const surpriseBtn = document.getElementById("surpriseBtn");
const letter = document.getElementById("letter");
const music = document.getElementById

yes.addEventListener("click", function () {
    welcome.style.display = "none";
    container.classList.remove("hidden");
});

no.addEventListener("click", function () {
    no.style.position = "absolute";
    no.style.left = Math.random() * 250 + "px";
    no.style.top = Math.random() * 450 + "px";
});

surpriseBtn.addEventListener("click", function () {
    letter.classList.remove("hidden");
    if (music) music.play();
});
