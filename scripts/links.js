const baseURL = 'https://rjruan.github.io/wdd230/'; // Update with your GitHub Pages URL
const linksURL = `${baseURL}data/links.json`;
console.log('links.js loaded');

console.log('links.js loaded'); // Check if the script is loaded

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Data fetched:', data); // Check if data is fetched
        displayLinks(data);
    } catch (error) {
        console.error('Error fetching links:', error);
    }
}

function displayLinks(weeks) {
    const linkMenu = document.getElementById('link-menu');
    if (!linkMenu) {
        console.error('link-menu element not found');
        return;
    }
    linkMenu.innerHTML = ''; // Clear existing content

    weeks.forEach(week => {
        const weekItem = document.createElement('li');
        weekItem.textContent = `${week.week}: `;

        week.links.forEach((link, index) => {
            const anchor = document.createElement('a');
            anchor.href = link.url;
            anchor.textContent = link.title;

            weekItem.appendChild(anchor);

            if (index < week.links.length - 1) {
                const separator = document.createTextNode(' | ');
                weekItem.appendChild(separator);
            }
        });

        linkMenu.appendChild(weekItem);
    });
}

getLinks();
