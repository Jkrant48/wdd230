//select the year element and last modified element
let year = document.querySelector('#year');
let lastModified = document.querySelector('#lastModified');

//get current date and time
const date = new Date();
let currentYear = date.getFullYear(); 

//display current date in year element
year.innerHTML = currentYear;

function displayLastModifiedDate() {
    let lastModifiedDate = date.toLocaleString();
    lastModifiedDate.textContent = "Last Modification:" + lastModifiedDate;
}

document.addEventListener("DOMContentLoaded", displayLastModifiedDate);