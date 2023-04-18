// Get the navigation menu and links
const nav = document.querySelector('nav');
const navLinks = nav.querySelectorAll('a');

// Add smooth scrolling to the navigation links
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const section = document.querySelector(link.hash);
    section.scrollIntoView({ behavior: 'smooth' });
  });
});

// Show a fixed navigation menu on scroll
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 0) {
    nav.classList.add('fixed');
  } else {
    nav.classList.remove('fixed');
  }
});

// Highlight the active navigation link on scroll
window.addEventListener('scroll', () => {
  const scrollPos = window.pageYOffset;
  navLinks.forEach(link => {
    const section = document.querySelector(link.hash);
    if (section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});

// Show a message when the contact form is submitted
const form = document.querySelector('form');
form.addEventListener('submit', e => {
  e.preventDefault();
  alert('Thank you for contacting me!');
  form.reset();
});

function toggleMenu() {
  var navLinks = document.querySelector('.nav-links');
  console.log(navLinks);
  var burger = document.querySelector('.burger');
  navLinks.classList.toggle('active');
  burger.classList.toggle('toggle');
}

