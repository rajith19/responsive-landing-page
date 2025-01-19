document.addEventListener("DOMContentLoaded", () => {

    const nav = document.querySelector("#nav");
    const navToggle = document.querySelector(".nav-toggle");
    const closeNav = document.querySelector(".close-nav");

    // Open/close navigation
    navToggle.addEventListener("click", () => {
        nav.classList.toggle("expanded");
        navToggle.classList.toggle("expanded");
    });

    // Close navigation on clicking the close button
    closeNav.addEventListener("click", () => {
        nav.classList.remove("expanded");
        navToggle.classList.remove("expanded");
    });
});

document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const errorMessage = document.getElementById('error-message');
    // Validate form fields
    if (!name || !email || !message || !/\S+@\S+\.\S+/.test(email)) {
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';
        alert('Form submitted successfully!');
        // Clear the form fields
        document.getElementById('contact-form').reset();
    }
});