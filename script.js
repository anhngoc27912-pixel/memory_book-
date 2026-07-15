const openButton = document.getElementById("openLetter");
const letterForm = document.getElementById("letterForm");

openButton.addEventListener("click", () => {

    letterForm.classList.remove("hidden");

    openButton.style.display = "none";

    letterForm.scrollIntoView({
        behavior: "smooth"
    });

});

const sendButton = document.getElementById("sendLetter");

sendButton.addEventListener("click", () => {

    alert("☀️ Your letter has found its way to AN.\n\nMay your kindness always shine back to you. 💛");

});
