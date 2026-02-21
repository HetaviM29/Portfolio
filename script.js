const cursorGlow = document.querySelector('.cursor-glow');

window.addEventListener('pointermove', (event) => {
  if (!cursorGlow) return;
  cursorGlow.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
});

const revealItems = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
revealItems.forEach((item) => observer.observe(item));

const rotatingWords = ['intelligent web products', 'AI-powered solutions', 'scalable cloud apps', 'impactful user experiences'];
const target = document.getElementById('typing-text');
let wordIndex = 0;
let charIndex = 0;
let removing = false;

function typeEffect() {
  if (!target) return;
  const currentWord = rotatingWords[wordIndex];
  charIndex += removing ? -1 : 1;
  target.textContent = currentWord.slice(0, charIndex);

  if (!removing && charIndex === currentWord.length) {
    removing = true;
    setTimeout(typeEffect, 1150);
    return;
  }

  if (removing && charIndex === 0) {
    removing = false;
    wordIndex = (wordIndex + 1) % rotatingWords.length;
  }

  setTimeout(typeEffect, removing ? 40 : 70);
}

typeEffect();

const cards = document.querySelectorAll('.tilt-card');
cards.forEach((card) => {
  card.addEventListener('mousemove', (event) => {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * 6;
    const rotateX = ((y / rect.height) - 0.5) * -6;
    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0)';
  });
});
