const baseURL = "https://Jkrant48.github.io/wdd230/";
const dataURL = "https://Jkrant48.github.io/wdd230/chamber/data/members.json";

async function getData(dataURL) {
    try {
        const response = await fetch(dataURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayData(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayData(companiesData) {
    const companies = document.querySelector("#container");
    companiesData.companies.forEach(company => {
        const section = document.createElement("section");

        const logo = document.createElement("img");
        logo.src = company["logo-image"];
        logo.alt = company.name + "Logo";

        const name = document.createElement("h2");
        name.textContent = company.name;

        const address = document.createElement("p");
        address.textContent = "Address: "  + company.address;

        const phoneNumber = document.createElement("p");
        phoneNumber.textContent = "Phone Number: " + company["phone-number"];

        const website = document.createElement("p");
        website.textContent = "Website: " + company.website;

        const level = document.createElement("p");
        level.textContent = "Membership Level: " + company["membership-level"];

        // append
        section.appendChild(logo);
        section.appendChild(name);
        section.appendChild(phoneNumber);
        section.appendChild(address);
        section.appendChild(website);
        section.appendChild(level);

        companies.appendChild(section);
    })
}

getData(dataURL);


// grid display
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#container");

gridbutton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", () => {
    display.classList.add("list");
    display.classList.remove("grid");
});



