document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.links');
    const menuOverlay = document.querySelector('.menu-overlay');
    const navItems = document.querySelectorAll('.links li a');
    
    // Toggle menu function
    function toggleMenu() {
      menuToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
      
      if (menuOverlay) {
        menuOverlay.classList.toggle('active');
      }
      
      // Toggle body scroll
      if (navLinks.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }
    
    // Event listeners
    if (menuToggle) {
      menuToggle.addEventListener('click', toggleMenu);
    }
    
    if (menuOverlay) {
      menuOverlay.addEventListener('click', toggleMenu);
    }
    
    // Close menu when clicking on nav links (mobile)
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        if (window.innerWidth <= 768 && navLinks.classList.contains('active')) {
          toggleMenu();
        }
      });
    });
    
    // Resize handler
    window.addEventListener('resize', function() {
      if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
        if (menuOverlay) {
          menuOverlay.classList.remove('active');
        }
        document.body.style.overflow = '';
      }
    });
  });