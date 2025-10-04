var typed = new Typed(".text", {
  strings: ["Software Engineer", "Full-Stack Developer", "UI-UX Designer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// JavaScript for Mobile Menu Toggle
const menuToggle = document.querySelector("#mobile-menu");
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".navbar a");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
  menuToggle.classList.toggle("active");
});

// Close the menu after clicking a link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (navbar.classList.contains("active")) {
      navbar.classList.remove("active");
      menuToggle.classList.remove("active");
    }
  });
});

// Smooth scrolling for navigation links
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Basic scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (!entry.target.classList.contains("animate-in")) {
        entry.target.classList.add("animate-in");
      }
    }
  });
}, observerOptions);

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Observe all sections
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    observer.observe(section);
  });

  // Observe about section elements
  const aboutImg = document.querySelector(".about-img");
  const aboutText = document.querySelector(".about-text");
  if (aboutImg) observer.observe(aboutImg);
  if (aboutText) observer.observe(aboutText);

  // Observe contact section elements
  const contactText = document.querySelector(".contact-text");
  const contactForm = document.querySelector(".contact-form");
  if (contactText) observer.observe(contactText);
  if (contactForm) observer.observe(contactForm);

  // Observe specific elements for staggered animations
  const skillItems = document.querySelectorAll(".skill-item");
  skillItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.1}s`;
    observer.observe(item);
  });

  const projectBoxes = document.querySelectorAll(".project-category-box");
  projectBoxes.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.15}s`;
    observer.observe(item);
  });

  // Add scroll-triggered navbar highlight
  const sectionsForNav = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".navbar a");

  window.addEventListener("scroll", () => {
    let current = "";
    const scrollPosition = window.scrollY + 100; // Changed from 300 to 100 for better accuracy

    sectionsForNav.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });

  // Smooth scroll to top functionality
  const topButton = document.querySelector(".top");
  if (topButton) {
    topButton.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });

    // Show/hide top button based on scroll position
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        topButton.style.opacity = "1";
        topButton.style.pointerEvents = "auto";
      } else {
        topButton.style.opacity = "0";
        topButton.style.pointerEvents = "none";
      }
    });
  }

  // Theme Toggle Functionality
  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      document.body.classList.add("light-theme");
      themeToggle.textContent = "☀️";
    } else {
      themeToggle.textContent = "🌙";
    }

    // Toggle theme on button click
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("light-theme");
      const isLight = document.body.classList.contains("light-theme");
      themeToggle.textContent = isLight ? "☀️" : "🌙";
      localStorage.setItem("theme", isLight ? "light" : "dark");
    });
  }
});
