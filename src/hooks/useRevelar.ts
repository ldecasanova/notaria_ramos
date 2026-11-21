import { useLayoutEffect, useRef } from 'react';

/**
 * Aparición escalonada al entrar en pantalla (ver .ds-revelar en ds.css).
 *
 * - Anima, en orden, cada descendiente marcado con `data-revelar`.
 * - Si no hay ninguno, anima el bloque completo.
 * - Se aplica antes del primer pintado (useLayoutEffect) para que no parpadee.
 * - Con `prefers-reduced-motion`, el CSS lo muestra todo sin animación.
 */
export function useRevelar<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const objetivos = el.querySelectorAll<HTMLElement>('[data-revelar]');
    if (objetivos.length === 0) el.setAttribute('data-revelar', '');
    objetivos.forEach((objetivo, i) => objetivo.style.setProperty('--i', String(i)));
    el.classList.add('ds-revelar');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('ds-revelado');
          observer.disconnect();
        }
      },
      { rootMargin: '0px 0px -15% 0px' },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
