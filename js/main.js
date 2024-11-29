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
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');
const navAuth = document.querySelector('.nav-auth');

mobileMenu.addEventListener('click', () => {
  const spans = mobileMenu.querySelectorAll('span');
  mobileMenu.classList.toggle('active');

  if (mobileMenu.classList.contains('active')) {
    spans[0].style.transform = 'translateY(8px) rotate(45deg)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'translateY(-8px) rotate(-45deg)';

    // Show mobile menu content
    navLinks.style.display = 'flex';
    navAuth.style.display = 'flex';
  } else {
    spans[0].style.transform = 'none';
    spans[1].style.opacity = '1';
    spans[2].style.transform = 'none';

    // Hide mobile menu content
    navLinks.style.display = '';
    navAuth.style.display = '';
  }
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

