// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// WhatsApp 50/50 routing between two numbers
const WHATSAPP_NUMBERS = ['5511939342490', '5513988725645'];
function pickWhatsAppHref() {
  const n = WHATSAPP_NUMBERS[Math.floor(Math.random() * WHATSAPP_NUMBERS.length)];
  return 'https://wa.me/' + n;
}
document.querySelectorAll('[data-whatsapp-random]').forEach((el) => {
  // set initial href and resort on each click
  el.setAttribute('href', pickWhatsAppHref());
  el.addEventListener('click', () => {
    el.setAttribute('href', pickWhatsAppHref());
  });
});

// Fade-in on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href');
    if (id && id.length > 1) {
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});
