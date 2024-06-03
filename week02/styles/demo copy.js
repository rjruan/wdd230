const section = document.querySelector('button');

document.querySelector('button').addEventListener('click', () => {
        height += 1;
        whidth += 1;
    section.innerHTML += `<article>
            <img src="https://place.dog/$(height)/$(width)" alt="dog"
        </article>`;
    });