document.addEventListener("DOMContentLoaded", () => {
    const directory = document.getElementById('directory');
    const toggleViewButton = document.getElementById('toggleView');

    fetch('data/members.json')
        .then(response => response.json())
        .then(data => {
            displayDirectory(data, 'grid');
            toggleViewButton.addEventListener('click', () => {
                const currentView = directory.className === 'grid' ? 'list' : 'grid';
                displayDirectory(data, currentView);
            });
        })
        .catch(error => console.error('Error fetching data:', error));

    function displayDirectory(members, view) {
        directory.className = view;
        directory.innerHTML = '';

        members.forEach(member => {
            const memberElement = document.createElement('div');
            memberElement.className = 'member';

            memberElement.innerHTML = `
                <img src="images/${member.image}" alt="${member.name}">
                <h2>${member.name}</h2>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">${member.website}</a>
                <p>Membership Level: ${member.membership_level}</p>
                <p>${member.description}</p>
            `;

            directory.appendChild(memberElement);
        });
    }
});
