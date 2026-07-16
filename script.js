const openButton = document.getElementById("openLetter");
const letterForm = document.getElementById("letterForm");

openButton.addEventListener("click", () => {
  letterForm.classList.remove("hidden");
  openButton.style.display = "none";

  letterForm.scrollIntoView({
    behavior: "smooth"
  });
});
