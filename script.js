const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// ScrollReveal animations
ScrollReveal().reveal('.meet-mateo, .latest-news, .catch-pokemon, .items-for-adventure, .team-go-rocket, .get-up-and-go, footer', {
    delay: 200,
    distance: '50px',
    origin: 'bottom',
    easing: 'ease-in-out',
    reset: true
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});