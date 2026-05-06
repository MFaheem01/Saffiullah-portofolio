// ===== NAVBAR SCROLL =====
const nav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 30);
});

// ===== ACTIVE NAV LINK =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            navLinks.forEach(l => l.classList.remove('active'));
            const active = document.querySelector(`.navbar-nav .nav-link[href="#${e.target.id}"]`);
            if (active) active.classList.add('active');
        }
    });
}, { threshold: 0.35 });
sections.forEach(s => observer.observe(s));

// ===== SCROLL REVEAL =====
const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
const revObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('visible');
            revObs.unobserve(e.target);
        }
    });
}, { threshold: 0.12 });
revealEls.forEach(el => revObs.observe(el));

// ===== BACK TO TOP =====
const backTop = document.getElementById('backTop');
window.addEventListener('scroll', () => {
    backTop.classList.toggle('show', window.scrollY > 400);
});
backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ===== CLOSE MOBILE MENU ON LINK CLICK =====
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const toggler = document.querySelector('.navbar-toggler');
        const menu = document.getElementById('navMenu');
        if (menu.classList.contains('show')) toggler.click();
    });
});