console.log("JS file loaded");

// Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// Toggle Buttons
document.querySelectorAll('.toggle-btn').forEach(btn => {
  btn.addEventListener('click', function () {
    const serviceBox = this.closest('.service-box');
    const cardInner = serviceBox?.querySelector('.card-inner');
    const moreText = serviceBox?.querySelector('.more-text');

    if (cardInner) {
      cardInner.classList.toggle('flipped');
    }

    if (moreText) {
      moreText.classList.toggle('show');
      if (moreText.classList.contains('show')) {
        moreText.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }

    const isExpanded = cardInner?.classList.contains('flipped') || moreText?.classList.contains('show');
    this.textContent = isExpanded ? 'Read Less' : 'Read More';
  });
});
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    if (navLinks.classList.contains('active')) {
      navLinks.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('open');
});
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});
