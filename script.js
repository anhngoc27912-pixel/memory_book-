const openButton = document.getElementById("openLetter");
const letterForm = document.getElementById("letterForm");

openButton.addEventListener("click", () => {

    openButton.style.transform = "scale(.9)";
    openButton.style.opacity = "0";

    setTimeout(() => {

        openButton.style.display = "none";

        letterForm.classList.remove("hidden");

        letterForm.classList.add("show");

        letterForm.scrollIntoView({
            behavior:"smooth"
        });

    },300);

});
// ===== MUSIC =====

const music = document.getElementById("bgMusic");
console.log(music);

const musicBtn = document.getElementById("musicBtn");

let isPlaying = false;

// Âm lượng 35%
music.volume = 0.35;

musicBtn.addEventListener("click", async () => {
    try {
        if (!isPlaying) {
            await music.play();
            musicBtn.innerHTML = "⏸ Pause";
            isPlaying = true;
        } else {
            music.pause();
            musicBtn.innerHTML = "🎵 Play Music";
            isPlaying = false;
        }
    } catch (error) {
        console.error(error);
    }
});
