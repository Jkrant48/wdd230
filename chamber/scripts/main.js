// add year to the footer
const currentYear = document.querySelector('#year');
const date = new Date();

let year = date.getFullYear();

currentYear.innerHTML = year;

// add last modified date to the footer
const dateLastModified = document.querySelector('#lastModified');

function displayLastModifiedDate() {
    let lastModifiedDate = date.toLocaleString();
    lastModified.textContent = lastModifiedDate;
}

document.addEventListener("DOMContentLoaded", displayLastModifiedDate);


//hamburger button
const hamburgerElement = document.querySelector('#myButton');
const navElement = document.querySelector('.menuList');

hamburgerElement.addEventListener('click', ()=> {
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('open');
});

//local storage
const displayDaysVisited = document.querySelector('#daysVisited');

//get number of visits
let visitsCount = Number(window.localStorage.getItem('visitNum')) || 0;

if (visitsCount !== 0) {
    displayDaysVisited.textContent = `You visited ${visitsCount} day/days ago.`;
}else {
    displayDaysVisited.textContent = `This is your first visit. Feel free to explore.`;
}

visitsCount++;

//key='visitNum
localStorage.setItem('visitNum', visitsCount);