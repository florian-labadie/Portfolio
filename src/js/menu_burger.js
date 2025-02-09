// Toggle Navigation Menu for Mobile
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
});

document.getElementById("toggleCvBtn").addEventListener("click", function() {
    let cvContainer = document.getElementById("cvContainer");
    cvContainer.style.display = (cvContainer.style.display === "none" || cvContainer.style.display === "") ? "block" : "none";
});
