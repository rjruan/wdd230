const baseURL = "https://rjruan.github.io/wdd230/";
const linksURL = `${baseURL}data/links.json`;

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  displayLinks(data.weeks);
}

function displayLinks(weeks) {
  const activitiesDiv = document.getElementById('activities');
  weeks.forEach(week => {
    let weekSection = document.createElement('section');
    let weekTitle = document.createElement('h3');
    weekTitle.textContent = week.week;
    weekSection.appendChild(weekTitle);

    let ul = document.createElement('ul');
    week.links.forEach(link => {
      let li = document.createElement('li');
      let a = document.createElement('a');
      a.href = `${baseURL}${link.url}`;
      a.textContent = link.title;
      li.appendChild(a);
      ul.appendChild(li);
    });

    weekSection.appendChild(ul);
    activitiesDiv.appendChild(weekSection);
  });
}

getLinks();
