
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
const forecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&units=metric&appid=${apiKey}`;

async function apiFetch(url, forecast) {
    try {
        const response = await fetch(url);
        const response2 = await fetch(forecast);
        if (response.ok) {
            const data = await response.json();
            const data2 = await response2.json();
            //console.log(data);
            displayResults(data);
            displayForecast(data2);
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

function displayForecast(url){
    const forecast = document.querySelector('#forecast');

    const title = document.createElement('h2');
    title.textContent = "3-day forecast";
    forecast.appendChild(title);

    const ulist = document.createElement('ul');
    ulist.className = 'temps';
    for (let index = 0; index < 3; index++) {
        const listItem = document.createElement('li');
        const element = url['list'][index];

        const date = document.createElement('span');
        const degree = document.createElement('span');
        const description = document.createElement('span');
        const icon = document.createElement('img');
        const figure = document.createElement('figure');
        const dateTime = element.dt_txt;

        date.textContent = dateTime.split(" ")[0];
        degree.textContent = `${element.main.temp}℃`;
        description.textContent = element.weather[0].description;
        icon.src = `https://openweathermap.org/img/w/${element.weather[0].icon}.png`;

        figure.appendChild(icon);
        figure.appendChild(degree);

        listItem.appendChild(date);
        listItem.appendChild(figure);
        listItem.appendChild(description);

        ulist.appendChild(listItem);
    };
    forecast.appendChild(ulist);
}


apiFetch(url, forecast);