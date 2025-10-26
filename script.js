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

// Lazy loading images
document.addEventListener("DOMContentLoaded", function() {
  let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

  if ("IntersectionObserver" in window) {
    let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.classList.remove("lazy");
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });

    lazyImages.forEach(function(lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
  } else {
    // Fallback for browsers that don't support IntersectionObserver
    let lazyLoad = function() {
      let active = false;
      if (active === false) {
        active = true;

        setTimeout(function() {
          lazyImages.forEach(function(lazyImage) {
            if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
              lazyImage.src = lazyImage.dataset.src;
              lazyImage.classList.remove("lazy");

              lazyImages = lazyImages.filter(function(image) {
                return image !== lazyImage;
              });

              if (lazyImages.length === 0) {
                document.removeEventListener("scroll", lazyLoad);
                window.removeEventListener("resize", lazyLoad);
                window.removeEventListener("orientationchange", lazyLoad);
              }
            }
          });
          active = false;
        }, 200);
      }
    };

    document.addEventListener("scroll", lazyLoad);
    window.addEventListener("resize", lazyLoad);
    window.addEventListener("orientationchange", lazyLoad);
  }
});

// Active navigation link styling
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav .container .nav-links a');

window.addEventListener('scroll', ()=> {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if(pageYOffset >= (sectionTop - sectionHeight / 3)){
      current = section.getAttribute('id');
    }
  })

  navLi.forEach( a => {
    a.classList.remove('active');
    if(a.getAttribute('href').includes(current)){
      a.classList.add('active');
    }
  })
});

// Back to top button
const backToTopButton = document.createElement('a');
backToTopButton.href = '#';
backToTopButton.innerHTML = '<i class="bx bx-up-arrow-alt"></i>';
backToTopButton.classList.add('back-to-top');
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
  if(window.pageYOffset > 200){
    backToTopButton.classList.add('active');
  } else {
    backToTopButton.classList.remove('active');
  }
});

// Button click animation
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    button.classList.add('clicked');
    setTimeout(() => {
      button.classList.remove('clicked');
    }, 300);
  });
});
