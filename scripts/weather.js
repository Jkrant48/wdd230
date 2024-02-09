
//select elements
const town = document.querySelector('#town');
const description = document.querySelector('#description');
const temp = document.querySelector('#temperature');
const graphic = document.querySelector('#graphic');

// create variables
const apiKey = '70114944cda1fe30100e8b8aaf83e4e6';
const long = '-0.20800';
const lat = '5.55943';

//path

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            //console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    town.innerHTML = data.name;
    description.innerHTML = data.weather[0].description;
    temp.innerHTML = `${data.main.temp}&deg;C`
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    graphic.setAttribute('src', iconsrc);
    graphic.setAttribute('alt', data.weather[0].description);
}

apiFetch();