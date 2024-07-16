// getDates.js
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

const heading = document.querySelector('.heading');

// // JavaScript for hamburger menu toggle
// document.getElementById("hamburger-toggle").addEventListener("click", function() {
//     // document.querySelector("nav ul").classList.toggle("show");
//     heading.classList.toggle('show');
// });
 
// JavaScript for dark mode toggle
document.getElementById("dark-mode-toggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});
document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('#myButton');
    if (button) {
      button.addEventListener('click', () => {
        button.classList.add('new-class');
      });
    } else {
      console.error('Element not found');
    }
  });
  