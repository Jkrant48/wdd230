//responsive menu
const hamburgerElement = document.querySelector("#myButton");
const navElement = document.querySelector(".menuLinks");

hamburgerElement.addEventListener("click", () => {
   navElement.classList.toggle("open");
   hamburgerElement.classList.toggle("open");
});

const darkButton = document.querySelector("#darkBtn");
const main = document.querySelector("body");

darkButton.addEventListener("click", () => {
   main.classList.toggle("dark");
});