// Navigation scroll effect
window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  if(window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Responsive menu toggle
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close menu on nav link click (mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// Animate elements on scroll (simple fade-in)
function revealOnScroll() {
  const reveals = document.querySelectorAll('section, .service-card, .project-card, .testimonial-card');
  for (const el of reveals) {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const elementVisible = 120;
    if (elementTop < windowHeight - elementVisible) {
      el.classList.add('active');
    }
  }
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Prevent form submit (demo)
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for contacting CONSTRUCT! We will get back to you soon.');
    contactForm.reset();
  });
}
