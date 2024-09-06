var typed = new Typed(".text", {
    strings: ["Software Engineer", "Web Developer", "Graphic Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// JavaScript for Mobile Menu Toggle
const menuToggle = document.querySelector('#mobile-menu');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.navbar a');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Close the menu after clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navbar.classList.contains('active')) {
            navbar.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });
});  