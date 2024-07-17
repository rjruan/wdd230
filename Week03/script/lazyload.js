document.addEventListener('DOMContentLoaded', () => {
    const footer = document.querySelector('footer');
    const date = new Date(document.lastModified);
    footer.innerHTML = `Last modified: ${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
});
