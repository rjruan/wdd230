document.addEventListener('DOMContentLoaded', () => {
    const gridButton = document.getElementById('grid-view');
    const listButton = document.getElementById('list-view');
    const directoryContainer = document.getElementById('directory-container');

    function fetchMembers() {
        fetch('../data/members.json')
            .then(response => response.json())
            .then(data => {
                renderMembers(data);
            })
            .catch(error => console.error('Error fetching members:', error));
    }

    function renderMembers(members) {
        directoryContainer.innerHTML = ''; // Clear existing content
        members.forEach(member => {
            const memberCard = document.createElement('div');
            memberCard.className = 'member-card';

            memberCard.innerHTML = `
                <img src="../images/${member.image}" alt="${member.name}">
                <h2>${member.name}</h2>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">Website</a>
                <p>Membership Level: ${member.membershipLevel}</p>
                <p>${member.additionalInfo}</p>
            `;

            directoryContainer.appendChild(memberCard);
        });
    }

    function toggleView(view) {
        directoryContainer.className = view;
    }

    gridButton.addEventListener('click', () => toggleView('grid-view'));
    listButton.addEventListener('click', () => toggleView('list-view'));

    fetchMembers(); // Fetch members on page load
});
