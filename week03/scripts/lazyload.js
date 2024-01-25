const lastModified = document.querySelector('#lastModified');

const date = new Date();

function displayLastModifiedDate() {
    let currentDate = date.toLocaleString();
    lastModified.textContent = currentDate;
}

document.addEventListener('DOMContentLoaded', displayLastModifiedDate);