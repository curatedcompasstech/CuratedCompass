
import { useCallback } from 'react';

export const useSmoothScroll = () => {
  const scrollToSection = useCallback((elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      // Prevent default anchor link behavior
      window.scrollTo({
        top: element.offsetTop - 80, // Offset for fixed header
        behavior: 'smooth'
      });
    }
  }, []);

  return { scrollToSection };
};
