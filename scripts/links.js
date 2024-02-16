const baseURL = "https://Jkrant48.github.io/wdd230/";

const linksURL = "https://Jkrant48.github.io/wdd230/data/links.json";

async function getLinks(linksURL) {
    try {
        const response = await fetch(linksURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayLinks(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayLinks(weeksData) {
    const activities = document.querySelector("#activities");
    weeksData.weeks.forEach(week => {
        const li = document.createElement("li");

        let list = [];
        week.links.forEach(link => {
            const a = document.createElement("a");
            a.textContent = `${link.title}`;
            a.href = baseURL + link.url;
            list.push(a);
        })

        li.innerHTML = `${week.week}: `;
        list.forEach((link, index) => {
            li.appendChild(link);
            if (index !== list.length - 1) {
                const separator = document.createTextNode(" | ");
                li.appendChild(separator);
            }
        })
        activities.appendChild(li);
    })
}

getLinks(linksURL);