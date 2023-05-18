// DOM Elements
const mobileNav = document.querySelector('.mobile_nav');
const navOpenIcon = document.querySelector('.nav_icon');
const navCloseIcon = document.querySelector('.nav_close_icon');
const header = document.querySelector('.header_navbar');
const banner = document.querySelector('.banner');
// FUNCTIONS
// Toggling Nav Function
function toggleMobileNav() {
  mobileNav.classList.toggle('dp-none');
  navOpenIcon.classList.toggle('dp-none');
  header.classList.toggle('blur');
  banner.classList.toggle('blur');
}
navOpenIcon.addEventListener('click', toggleMobileNav, false);
navCloseIcon.addEventListener('click', toggleMobileNav, false);
