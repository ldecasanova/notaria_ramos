import type { SVGProps } from 'react';

/** Set cerrado de íconos de línea del design system (2 px de trazo, 24 px). */
const ICONOS = {
  check: <path d="M20 6 9 17l-5-5" />,
  alerta: (
    <>
      <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <path d="M12 9v4M12 17h.01" />
    </>
  ),
  info: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4M12 8h.01" />
    </>
  ),
  error: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="m15 9-6 6M9 9l6 6" />
    </>
  ),
  calendario: (
    <>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </>
  ),
  reloj: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </>
  ),
  izq: <path d="m15 18-6-6 6-6" />,
  der: <path d="m9 18 6-6-6-6" />,
  abajo: <path d="m6 9 6 6 6-6" />,
  arriba: <path d="m18 15-6-6-6 6" />,
  menu: <path d="M4 6h16M4 12h16M4 18h16" />,
  documento: (
    <>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
    </>
  ),
  buscar: (
    <>
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </>
  ),
  sale: <path d="M7 17 17 7M7 7h10v10" />,
  // Extensión v4.1: cerrar el menú móvil.
  cerrar: <path d="M18 6 6 18M6 6l12 12" />,
} as const;

export type NombreIcono = keyof typeof ICONOS;

type Props = Omit<SVGProps<SVGSVGElement>, 'children'> & {
  nombre: NombreIcono;
  /** 24 por defecto; 20 dentro de botones y avisos. */
  tamano?: 20 | 24;
  /** Texto para lectores de pantalla; si no se pasa, el ícono es decorativo. */
  titulo?: string;
};

export default function Icono({ nombre, tamano = 24, titulo, ...rest }: Props) {
  return (
    <svg
      width={tamano}
      height={tamano}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={titulo ? undefined : true}
      role={titulo ? 'img' : undefined}
      focusable="false"
      {...rest}
    >
      {titulo && <title>{titulo}</title>}
      {ICONOS[nombre]}
    </svg>
  );
}
