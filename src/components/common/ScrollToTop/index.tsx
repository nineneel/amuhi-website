import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const location = useLocation();

  useLayoutEffect(() => {
    // Ensure browser doesn't try to restore the previous scroll position
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Jump to the top on every route change
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });

    // If the URL contains a hash, scroll to that anchor after the jump
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        // Slight delay allows the new page to finish layout before scrolling to the anchor
        requestAnimationFrame(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }));
      }
    }
  }, [location.pathname, location.hash]);

  return null;
}
