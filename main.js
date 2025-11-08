const toggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('site-nav');
const header = document.querySelector('header');
const navLinks = document.querySelectorAll('#site-nav a');

toggle.addEventListener('click', () => {
  const expanded = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', !expanded);
  nav.classList.toggle('open');
});

// Cierra el menú al hacer clic en un enlace
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', false);
  });
});

// Efecto visual del header al hacer scroll
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 10);
});
