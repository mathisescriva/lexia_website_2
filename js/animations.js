// animations.js
gsap.registerPlugin(ScrollTrigger);

// Floating elements animation
const floatingElements = document.querySelectorAll('.element');
floatingElements.forEach((element, index) => {
  gsap.to(element, {
    y: `${20 + index * 5}px`,
    duration: 2 + index,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
  });
});

// Text reveal animation
const heroTitle = document.querySelector('h1');
const chars = heroTitle.textContent.split('');
heroTitle.textContent = '';
chars.forEach((char, index) => {
  const span = document.createElement('span');
  span.textContent = char;
  span.style.opacity = 0;
  span.style.transform = 'translateY(20px)';
  heroTitle.appendChild(span);

  gsap.to(span, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    delay: index * 0.05,
    ease: "power2.out"
  });
});

// Scroll animations for service cards
gsap.utils.toArray('.service-item').forEach((item, index) => {
  gsap.from(item, {
    scrollTrigger: {
      trigger: item,
      start: "top bottom-=100",
      toggleActions: "play none none reverse"
    },
    y: 100,
    opacity: 0,
    duration: 0.8,
    delay: index * 0.2,
    ease: "power2.out"
  });
});

// Hover effect for service cards
document.querySelectorAll('.service-item').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const color = card.getAttribute('data-color');
    card.style.background = `
            radial-gradient(
                circle at ${x}px ${y}px,
                ${color}20,
                transparent 80%
            )
        `;
  });

  card.addEventListener('mouseleave', () => {
    card.style.background = 'transparent';
  });
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    gsap.to(window, {
      duration: 1,
      scrollTo: target,
      ease: "power2.inOut"
    });
  });
});
