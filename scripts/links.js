document.addEventListener('DOMContentLoaded', () => {
    fetch('../data/activities.json')
        .then(response => response.json())
        .then(data => {
            const linkMenu = document.getElementById('link-menu');

            data.forEach(activity => {
                const listItem = document.createElement('li');
                const weekTitle = document.createElement('strong');
                weekTitle.textContent = activity.week + ': ';
                listItem.appendChild(weekTitle);

                activity.links.forEach((link, index) => {
                    const linkElement = document.createElement('a');
                    linkElement.href = link.url;
                    linkElement.textContent = link.title;
                    listItem.appendChild(linkElement);

                    if (index < activity.links.length - 1) {
                        const separator = document.createTextNode(' | ');
                        listItem.appendChild(separator);
                    }
                });

                linkMenu.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching activities:', error));
});
