// Layers of Rome Component Loader & Interactive Script
document.addEventListener('DOMContentLoaded', () => {
  // Load Header Component
  const headerPlaceholder = document.getElementById('header-placeholder');
  if (headerPlaceholder) {
    fetch('header.html')
      .then(response => response.text())
      .then(data => {
        headerPlaceholder.innerHTML = data;
        highlightActivePage();
      })
      .catch(err => console.error('Error loading header.html:', err));
  }

  // Load Footer Component
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) {
    fetch('footer.html')
      .then(response => response.text())
      .then(data => {
        footerPlaceholder.innerHTML = data;
      })
      .catch(err => console.error('Error loading footer.html:', err));
  }
});

// Function to highlight active menu item based on current URL
function highlightActivePage() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const menuItems = document.querySelectorAll('.nav-menu-item');

  menuItems.forEach(item => {
    const pageAttr = item.getAttribute('data-page');
    if (pageAttr && pageAttr === currentPath) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}
