const baseURL = "https://Jkrant48.github.io/wdd230/";
const dataURL = "https://Jkrant48.github.io/wdd230/chamber/data/members.json";

async function getData(dataURL) {
    try {
        const response = await fetch(dataURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            spotlight(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function spotlight(membersdata){
    const spotlight = document.querySelector('#spotlight');
    const already = new Set();

    for (let index = 0; index < 3; index++) {
        const randomIndex = Math.floor(Math.random() * membersdata['companies'].length);
        const company = membersdata['companies'][randomIndex];
        const membership = company['membership-level'];

        if (membership === 'Silver' || membership === 'Gold') {
            if (already.has(randomIndex)) {
                index--;
                continue;
        }
        already.add(randomIndex);

        const logo = document.createElement("img");
        logo.src = company["logo-image"];
        logo.alt = company.name + "Logo";

        spotlight.appendChild(logo);
        }
        else {
                index--;
            }
    };
}

getData(dataURL);

function checkDay(){
    const today = new Date().getDay();
    return today >= 1 && today <=3;
}

function showBanner(){
    const banner = document.querySelector('#banner');
    if (checkDay()) {
        banner.style.display = 'flex';
    }else {
        banner.style.display = 'none';
    }
}

function closebanner(){
    const banner = document.querySelector('#banner');
    const close = document.querySelector('#close-btn');

    close.addEventListener('click', () => {
        banner.style.display = 'none';
    });
}

closebanner();