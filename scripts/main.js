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


// number of visits
const displayVisits = document.querySelector("#visits");

//get number of visits
let visitsCount = Number(window.localStorage.getItem("numVisits")) || 0;

if (visitsCount !== 0) {
   displayVisits.textContent = visitsCount;
} else {
   displayVisits.textContent = `This is your first visit. Welcome!`;
}

visitsCount++;

//key='numVisits'

localStorage.setItem("numVisits", visitsCount);

