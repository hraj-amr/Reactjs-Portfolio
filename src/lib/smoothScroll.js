export default function initSmoothScroll() {
  // Delegate anchor (<a href="#id">) clicks to perform smooth scrolling.
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a');
    if (!a) return;
    const href = a.getAttribute('href');
    if (!href) return;

    // Only handle internal hash links
    if (href.startsWith('#')) {
      const id = href.slice(1);
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // update URL without jumping
        try {
          history.pushState(null, '', href);
        } catch (err) {}
      }
    }
  });

  // Handle direct hash on page load
  if (window.location.hash) {
    const id = window.location.hash.slice(1);
    const el = document.getElementById(id);
    if (el) {
      // delay slightly to allow layout to settle
      setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
    }
  }

  // Ensure hashchange events also scroll smoothly
  window.addEventListener('hashchange', () => {
    const id = window.location.hash.slice(1);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}
