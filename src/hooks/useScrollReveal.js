import { useEffect, useRef } from 'react';

/**
 * Premium scroll-reveal hook.
 * Uses IntersectionObserver for performant, GPU-accelerated reveals.
 */
export default function useScrollReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const {
      selector = '.sr',
      threshold = 0.15,
      rootMargin = '0px 0px -60px 0px',
      stagger = 80,
    } = options;

    const targets = selector
      ? [...el.querySelectorAll(selector)]
      : [el];

    targets.forEach((t, i) => {
      t.classList.add('sr-hidden');
      t.style.transitionDelay = `${i * stagger}ms`;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('sr-visible');
            entry.target.classList.remove('sr-hidden');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, [options.selector, options.threshold, options.rootMargin, options.stagger]);

  return ref;
}
