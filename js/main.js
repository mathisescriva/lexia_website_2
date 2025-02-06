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
const closeMenuBtn = document.getElementById('closeMenuBtn');

const closeMenu = () => {
  mobileMenuBtn.classList.remove('active');
  mobileNav.classList.remove('active');
};

mobileMenuBtn.addEventListener('click', () => {
  mobileMenuBtn.classList.toggle('active');
  mobileNav.classList.toggle('active');
});

closeMenuBtn.addEventListener('click', closeMenu);

// Fermer le menu quand on clique sur un lien
const mobileNavLinks = mobileNav.querySelectorAll('a');
mobileNavLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});

// Fermer le menu quand on clique en dehors
document.addEventListener('click', (e) => {
  if (!mobileNav.contains(e.target) && !mobileMenuBtn.contains(e.target) && mobileNav.classList.contains('active')) {
    closeMenu();
  }
});

// Gestion des dropdowns
const dropdownButtons = document.querySelectorAll('.dropdown-button');

dropdownButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const dropdown = button.closest('.dropdown');
    const chevron = button.querySelector('.chevron');
    const dropdownContent = dropdown.querySelector('.dropdown-content');

    // Fermer tous les autres dropdowns
    dropdownButtons.forEach(otherButton => {
      if (otherButton !== button) {
        const otherDropdown = otherButton.closest('.dropdown');
        const otherChevron = otherButton.querySelector('.chevron');
        const otherContent = otherDropdown.querySelector('.dropdown-content');
        otherContent.style.display = 'none';
        otherChevron.style.transform = 'rotate(0)';
      }
    });

    // Toggle le dropdown actuel
    if (dropdownContent.style.display === 'block') {
      dropdownContent.style.display = 'none';
      chevron.style.transform = 'rotate(0)';
    } else {
      dropdownContent.style.display = 'block';
      chevron.style.transform = 'rotate(180deg)';
    }
  });
});

// Fermer les dropdowns quand on clique en dehors
document.addEventListener('click', (e) => {
  if (!e.target.closest('.dropdown')) {
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
      const chevron = dropdown.querySelector('.chevron');
      const dropdownContent = dropdown.querySelector('.dropdown-content');
      if (dropdownContent) {
        dropdownContent.style.display = 'none';
        chevron.style.transform = 'rotate(0)';
      }
    });
  }
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

