import type { MouseEvent } from 'react';

/** Distancia que se deja libre sobre el destino del scroll (alto del header). */
const HEADER_OFFSET = 90;

export function scrollToElement(target: Element) {
  const top = target.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
  window.scrollTo({ top, behavior: 'smooth' });
}

/** Reemplaza el "Ancla scroll" de main.js: scroll suave hacia el #id del enlace. */
export function scrollToAnchor(event: MouseEvent<HTMLAnchorElement>) {
  const hash = event.currentTarget.hash;
  if (!hash) return;
  const target = document.getElementById(decodeURIComponent(hash.slice(1)))
    ?? document.querySelector(`[name="${hash.slice(1)}"]`);
  if (!target) return;
  event.preventDefault();
  scrollToElement(target);
}

/** Abre el enlace de "compartir" en una ventana emergente pequeña. */
export function openSharePopup(event: MouseEvent<HTMLAnchorElement>) {
  event.preventDefault();
  window.open(
    event.currentTarget.href,
    '',
    'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600',
  );
}
