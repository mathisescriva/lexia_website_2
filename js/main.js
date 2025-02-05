// Navbar shadow on scroll
const nav = document.querySelector('nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    nav.style.boxShadow = 'none';
  } else {
    nav.style.boxShadow = 'var(--shadow-sm)';
  }

  lastScroll = currentScroll;
});

// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu');
const mobileNav = document.getElementById('mobileNav');

mobileMenuBtn.addEventListener('click', () => {
  mobileMenuBtn.classList.toggle('active');
  mobileNav.classList.toggle('active');
});

// Close dropdowns when clicking outside
document.addEventListener('click', (e) => {
  const dropdowns = document.querySelectorAll('.dropdown');
  dropdowns.forEach(dropdown => {
    if (!dropdown.contains(e.target)) {
      const chevron = dropdown.querySelector('.chevron');
      chevron.style.transform = 'rotate(0)';
    }
  });
});
// Ajoutez ce code dans votre fichier main.js
// main.js
const cards = document.querySelectorAll('.feature-card');

cards.forEach(card => {
  card.addEventListener('mousemove', handleMove);
  card.addEventListener('mouseleave', handleLeave);
});

function handleMove(e) {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;

  const multiplier = 15;
  const rotateX = y / rect.height * multiplier;
  const rotateY = -x / rect.width * multiplier;

  card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
}

function handleLeave(e) {
  const card = e.currentTarget;
  card.style.transform = 'rotateX(0) rotateY(0) scale(1)';
}

