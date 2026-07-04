import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop — scrolls the window to top on every route change.
 *
 * Place this component inside <BrowserRouter> but outside <Routes>
 * so it fires on every navigation event.
 *
 * Usage in App.tsx:
 *   <BrowserRouter>
 *     <ScrollToTop />
 *     <Routes>...</Routes>
 *   </BrowserRouter>
 */
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}
