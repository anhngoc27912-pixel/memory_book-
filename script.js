const openButton = document.getElementById("openLetter");
const letterForm = document.getElementById("letterForm");
const sendButton = document.getElementById("sendLetter");

openButton.addEventListener("click", () => {
    letterForm.classList.remove("hidden");
    openButton.style.display = "none";

    letterForm.scrollIntoView({
        behavior: "smooth"
    });
});

sendButton.addEventListener("click", async () => {

    const name = document.getElementById("name").value.trim();
    const message = document.getElementById("message").value.trim();

    if (message === "") {
        alert("Please write something for AN 💛");
        return;
    }

    const { error } = await supabase
        .from("letters")
        .insert([
            {
                name: name,
                message: message
            }
        ]);

    if (error) {
        console.error(error);
        alert("Something went wrong 😢");
    } else {
        alert("☀️ Your letter has found its way to AN.\n\nMay your kindness always shine back to you. 💛");

        document.getElementById("name").value = "";
        document.getElementById("message").value = "";
    }

});
