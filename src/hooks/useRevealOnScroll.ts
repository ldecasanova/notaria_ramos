import { useEffect, type RefObject } from 'react';

/**
 * Reemplaza jquery.waypoints: agrega la clase `active` a cada elemento que
 * coincida con `selector` cuando entra en pantalla (equivale a offset: '95%').
 * La clase no se quita al volver a subir, igual que en el sitio original.
 */
export function useRevealOnScroll(containerRef: RefObject<HTMLElement | null>, selector: string) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const elements = container.querySelectorAll(selector);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: '0px 0px -5% 0px' },
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [containerRef, selector]);
}
