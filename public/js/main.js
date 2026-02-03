// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuClose = document.querySelector('.mobile-menu-close');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');

function openMobileMenu() {
  mobileMenu.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
  mobileMenu.classList.remove('active');
  document.body.style.overflow = '';
}

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener('click', openMobileMenu);
}

if (mobileMenuClose) {
  mobileMenuClose.addEventListener('click', closeMobileMenu);
}

// Close mobile menu when clicking on a link
mobileMenuLinks.forEach(link => {
  link.addEventListener('click', closeMobileMenu);
});

// Close mobile menu when clicking outside
if (mobileMenu) {
  mobileMenu.addEventListener('click', (e) => {
    if (e.target === mobileMenu) {
      closeMobileMenu();
    }
  });
}

// Expertise accordion toggle
function toggleExpertise(header) {
  const item = header.parentElement;
  const isActive = item.classList.contains('active');

  // Close all other items
  document.querySelectorAll('.expertise-item').forEach(el => {
    el.classList.remove('active');
  });

  // Toggle current item
  if (!isActive) {
    item.classList.add('active');
  }
}

// Open first expertise item by default
document.addEventListener('DOMContentLoaded', () => {
  const firstItem = document.querySelector('.expertise-item');
  if (firstItem) {
    firstItem.classList.add('active');
  }
});

// Scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
  observer.observe(el);
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      // Account for fixed header
      const headerOffset = 100;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Staggered animation for cards
document.querySelectorAll('.case-study-card, .industry-card, .why-card').forEach((card, index) => {
  card.style.transitionDelay = `${index * 0.1}s`;
});
