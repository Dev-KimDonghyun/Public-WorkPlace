window.addEventListener("scroll", () => {
    const fadeDiv = document.querySelector(".main-center");
    const scrollY = window.scrollY;
    const fadeThreshold = 300;

    const newOpacity = Math.max(0, 1.05 - scrollY / fadeThreshold);
    fadeDiv.style.opacity = newOpacity;
});

window.addEventListener("scroll", () => {
    const fadeDiv = document.querySelector(".main-center-2");
    const scrollY = window.scrollY;
    const fadeStart = 50;
    const fadeEnd = 400;

    if (scrollY < fadeStart) {
        fadeDiv.style.opacity = 0;
    } else if (scrollY > fadeEnd) {
        fadeDiv.style.opacity = 1;
    } else {
        const newOpacity = (scrollY - fadeStart) / (fadeEnd - fadeStart);
        fadeDiv.style.opacity = newOpacity;
    }
});

const insta = document.querySelector(".Instagram-Logo");
const github = document.querySelector(".Github-Logo");

insta.addEventListener("click", () => {
    window.open("https://www.instagram.com/ehdgus.kx", "_blank");
});

github.addEventListener("click", () => {
    window.open("https://github.com/Dev-KimDonghyun", "_blank");
});

window.addEventListener("scroll", () => {
    const fadeDiv = document.querySelector(".main-center-3");
    const scrollY = window.scrollY;
    const fadeStart = 50;
    const fadeEnd = 400;

    if (scrollY < fadeStart) {
        fadeDiv.style.opacity = 0;
    } else if (scrollY > fadeEnd) {
        fadeDiv.style.opacity = 1;
    } else {
        const newOpacity = (scrollY - fadeStart) / (fadeEnd - fadeStart);
        fadeDiv.style.opacity = newOpacity;
    }
});