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
