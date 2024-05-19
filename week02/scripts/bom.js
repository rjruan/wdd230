const input = document.querySelector("#favchap");
const button = document.querySelector('button');
const list = document.querySelector("#list");

button.addEventListener("click", (e) => {
    e.preventDefault();
    if (input.value) {
        // create li element
        const li = document.createElement('li');

        // populate the li element's text content with input value
        li.textContent = input.value;

        // create delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = "❌";

        // add event listener to delete button
        deleteButton.addEventListener("click", () => {
            // remove the li element when delete button is clicked
            list.removeChild(li);
        });

        // append delete button to li element
        li.appendChild(deleteButton);

        // append li element to unordered list
        list.appendChild(li);

        // clear input field
        clearInput();
    } else {
        // if input is empty, focus on input field
        input.focus();
    }
});

// function to clear input field
function clearInput() {
    input.value = "";
    input.focus();
}
