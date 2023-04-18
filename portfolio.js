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



// Show/hide the navigation menu when the hamburger menu is clicked
const burger = document.querySelector('.burger');
const navLinksWrapper = document.querySelector('.nav-links-wrapper');
burger.addEventListener('click', () => {
  navLinksWrapper.classList.toggle('active');
  burger.classList.toggle('toggle');
});


