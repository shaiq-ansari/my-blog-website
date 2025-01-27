import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // If coming from the previous page (back button), do not scroll to the top
    const savedPosition = sessionStorage.getItem(location.key);
    
    if (savedPosition) {
      window.scrollTo(0, parseInt(savedPosition));
    } else {
      // Scroll to the top on page load
      window.scrollTo(0, 0);
    }

    // Save scroll position before the page changes
    return () => {
      sessionStorage.setItem(location.key, window.scrollY);
    };
  }, [location]);

  return null;
};

export default ScrollToTop;
