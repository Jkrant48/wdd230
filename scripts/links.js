const baseURL = "http://Jkrant48.github.io/wdd230/";

const linksURL = "http://Jkrant48.github.io/wdd230/data/links.json";

async function getLinks() {
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

function displayLinks(weeks) {
    const activities = document.querySelector("#activities");
    weeks.forEach(week => {
        const li = document.createElement("li");

        let list = [];
        week["links"].forEach(link => {
            const a = document.createElement("a");
            a.textContent = `${link.title}`;
            a.href = link.url;
            list.push(a);
        })

        li.innerHTML = `${week}:`;
        list.forEach(link => {
            li.appendChild(link);
            if (list.indexOf(link) != list.length - 1) {
                li.appendChild(" | ");
            }
        })
        activities.appendChild(li);
    })
}

getLinks();