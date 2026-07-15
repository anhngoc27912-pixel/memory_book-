const button = document.getElementById("openLetter");
const form = document.getElementById("letterForm");

button.addEventListener("click", () => {
    form.style.display = "block";
    button.style.display = "none";
});
