const toggle = document.getElementById('navbar-toggle');
const menu = document.getElementById('navbar-menu');
toggle.addEventListener('click', () => {
  menu.classList.toggle('open');
  toggle.classList.toggle('open');
});

// Dropdown toggle for all screens (click to open/close)
const dropdown = document.querySelector('.dropdown');
const dropdownToggle = dropdown.querySelector('a');
const dropdownMenu = dropdown.querySelector('.dropdown-menu');

dropdownToggle.addEventListener('click', function(e) {
  e.preventDefault();
  // Toggle dropdown
  const isOpen = dropdownMenu.style.display === 'block';
  // Hide all dropdowns
  document.querySelectorAll('.dropdown-menu').forEach(dm => dm.style.display = 'none');
  dropdownMenu.style.display = isOpen ? 'none' : 'block';
});

// Hide dropdown when clicking outside
document.addEventListener('click', function(e) {
  if (!e.target.closest('.dropdown')) {
    document.querySelectorAll('.dropdown-menu').forEach(dm => dm.style.display = 'none');
  }
});

// Hide inline display on resize to desktop
window.addEventListener('resize', () => {
  if (window.innerWidth >= 700) {
    document.querySelectorAll('.dropdown-menu').forEach(dm => dm.style.display = 'none');
  }
});

// Always hide the dropdown menu on page load/refresh
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.dropdown-menu').forEach(dm => dm.style.display = 'none');
});
