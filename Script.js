document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    // Toggle Navigation on Burger click
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation (change to "X" shape)
        burger.classList.toggle('toggle');
    });
});

// Smooth Scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Intersection Observer for Service Cards Animation on Scroll
const serviceCards = document.querySelectorAll('.service-card');

const serviceCardObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target); // Stop observing once the animation is applied
        }
    });
}, { threshold: 0.5 });

serviceCards.forEach(card => {
    serviceCardObserver.observe(card);
});

// Add animations to hero text and services section when they appear in view
const heroText = document.querySelector('.hero h1');
const servicesSection = document.querySelector('.services');

const fadeInObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 2s ease-out forwards';
            observer.unobserve(entry.target); // Stop observing after the animation is applied
        }
    });
}, { threshold: 0.5 });

fadeInObserver.observe(heroText);
fadeInObserver.observe(servicesSection);
