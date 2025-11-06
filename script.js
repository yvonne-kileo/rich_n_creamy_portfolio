
  
  const navbar = document.querySelector('.custom-navbar');

  window.addEventListener('load', () => {

    navbar.classList.add('visible');
  });

  window.addEventListener('scroll', () => {
    
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });


document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();

  const name = document.getElementById("name").value;
  const order = document.getElementById("order").value;
  const message = document.getElementById("message").value;

  const phoneNumber = "254746738352";

  const url = `https://wa.me/${phoneNumber}?text=Hi%20Peter!%20I'm%20${encodeURIComponent(name)}.%0A%0AI'd%20like%20to%20order:%20${encodeURIComponent(order)}.%0A%0AHere%20are%20some%20details:%20${encodeURIComponent(message)}`;

  window.open(url, "_blank");
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.2 };

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

document.addEventListener('DOMContentLoaded', function() {
  const el = document.getElementById('typed-text');
  const text = "Cake Artist & Baker";
  let i = 0;

  function type() {
    if (i < text.length) {
      el.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, 100); // speed of typing
    }
  }

  type();
});


document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.fade-element');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  elements.forEach(el => observer.observe(el));
});
const slider = document.querySelector('.testimonials-slider');
const slides = document.querySelectorAll('.testimonial-card');
let index = 0;
const totalSlides = slides.length;

function showNext() {
  index = (index + 1) % totalSlides;
  slider.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(showNext, 7000);

  
  document.getElementById("year").textContent = new Date().getFullYear();





