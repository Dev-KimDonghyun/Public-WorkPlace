document.addEventListener("DOMContentLoaded", () => {
    new TypeIt(".title-2", {
        speed: 100,
        waitUntilVisible: true,
        cursorChar: "",
        lifeLike: true,
        loop: false,
    }).go();
});


const btnOne = document.querySelector(".about-me");

btnOne.addEventListener("click", btnOneCliked);

function btnOneCliked () {
    window.location.href = "main.html";
};