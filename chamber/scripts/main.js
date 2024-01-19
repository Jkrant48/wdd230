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