const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
})

sr.reveal('.let', { delay: 200, origin: 'bottom' })
sr.reveal('.element img', { delay: 200, origin: 'top' })
sr.reveal('.news', { delay: 200, origin: 'top' })
sr.reveal('.posts', { delay: 200, origin: 'bottom' })
sr.reveal('.posts1', { delay: 200, origin: 'top' })
sr.reveal('.news_button', { delay: 200, origin: 'bottom' })
sr.reveal('.main', { delay: 200, origin: 'top' })
sr.reveal('.banner', { delay: 200, origin: 'bottom' })
sr.reveal('.grid', { delay: 200, origin: 'top' })
sr.reveal('.module', { delay: 200, origin: 'bottom' })
sr.reveal('.Niantic', { delay: 200, origin: 'bottom' })
