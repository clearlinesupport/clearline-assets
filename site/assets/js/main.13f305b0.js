function initSite() {
  const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('main-nav');

  function updateAria() {
    toggle.setAttribute('aria-expanded', toggle.checked);
  }

  if (toggle) {
    toggle.addEventListener('change', updateAria);
  }

  if (nav) {
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        toggle.checked = false;
        updateAria();
      });
    });
  }

  updateAria();

  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Form submitted (placeholder)');
    });
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { initSite };
}

if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', initSite);
}
