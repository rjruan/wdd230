document.addEventListener('DOMContentLoaded', () => {
    const directoryElement = document.getElementById('directory');
    const gridViewButton = document.getElementById('grid-view');
    const listViewButton = document.getElementById('list-view');

    fetch('./data/members.json')
        .then(response => response.json())
        .then(data => displayMembers(data))
        .catch(error => console.error('Error fetching JSON:', error));

    gridViewButton.addEventListener('click', () => {
        directoryElement.classList.add('grid-view');
        directoryElement.classList.remove('list-view');
    });

    listViewButton.addEventListener('click', () => {
        directoryElement.classList.add('list-view');
        directoryElement.classList.remove('grid-view');
    });

    function displayMembers(members) {
        directoryElement.innerHTML = '';
        members.forEach(member => {
            const memberElement = document.createElement('div');
            memberElement.classList.add('member-card');

            memberElement.innerHTML = `
                <img src="./images/${member.image}" alt="${member.name}" width="100" height="100">
                <h3>${member.name}</h3>
                <p><strong>Address:</strong> ${member.address}</p>
                <p><strong>Phone:</strong> ${member.phone}</p>
                <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
                <p><strong>Membership Level:</strong> ${member.membership_level}</p>
                <p>${member.description}</p>
            `;

            directoryElement.appendChild(memberElement);
        });
    }
});
