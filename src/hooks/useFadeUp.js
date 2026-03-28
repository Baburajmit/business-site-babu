import { useEffect } from 'react';

const useFadeUp = () => {
  useEffect(() => {
    const animateElements = () => {
      const elements = document.querySelectorAll('.fade-up:not(.visible)');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        if (rect.top <= windowHeight - 80) {
          el.classList.add('visible');
        }
      });
    };

    // Use IntersectionObserver for best performance
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // stop watching once visible
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -60px 0px',
      }
    );

    const observeAll = () => {
      const elements = document.querySelectorAll('.fade-up');
      elements.forEach((el) => observer.observe(el));
    };

    // Run immediately and after delays to catch dynamically rendered elements
    observeAll();
    animateElements(); // also trigger for already-in-view items
    const t1 = setTimeout(() => { observeAll(); animateElements(); }, 300);
    const t2 = setTimeout(() => { observeAll(); animateElements(); }, 800);
    const t3 = setTimeout(() => { observeAll(); animateElements(); }, 1500);

    // Fallback scroll listener
    window.addEventListener('scroll', animateElements, { passive: true });
    window.addEventListener('resize', animateElements, { passive: true });

    // Watch for new elements added to DOM (e.g. after Loader hides)
    const mutationObserver = new MutationObserver(() => {
      observeAll();
      animateElements();
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
      window.removeEventListener('scroll', animateElements);
      window.removeEventListener('resize', animateElements);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);
};

export default useFadeUp;
