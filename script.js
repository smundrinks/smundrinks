const header = document.querySelector('.site-header');
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.desktop-nav');
const glow = document.querySelector('.cursor-glow');

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
});

menuBtn?.addEventListener('click', () => {
  const open = menuBtn.getAttribute('aria-expanded') === 'true';
  menuBtn.setAttribute('aria-expanded', String(!open));
  nav.classList.toggle('mobile', !open);
  header.classList.toggle('menu-active', !open);
});

nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('mobile');
  header.classList.remove('menu-active');
  menuBtn?.setAttribute('aria-expanded', 'false');
}));

if (window.matchMedia('(pointer:fine)').matches) {
  window.addEventListener('pointermove', e => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
  });
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {threshold: .12});

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.getElementById('quoteForm')?.addEventListener('submit', e => {
  e.preventDefault();
  const data = new FormData(e.currentTarget);
  const name = data.get('name');
  const business = data.get('business') || 'Not specified';
  const message = data.get('message');
  const text = `Hi SMUN DRINKS,%0A%0AName: ${encodeURIComponent(name)}%0ABusiness/Event: ${encodeURIComponent(business)}%0ARequirement: ${encodeURIComponent(message)}%0A%0AI'd like to discuss a custom bottled water order.`;
  window.open(`https://wa.me/923112927605?text=${text}`, '_blank', 'noopener');
});

document.getElementById('year').textContent = new Date().getFullYear();
