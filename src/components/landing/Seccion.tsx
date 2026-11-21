import type { ReactNode } from 'react';
import { useRevelar } from '../../hooks/useRevelar';
import styles from './Seccion.module.css';

export type TonoSeccion = 'superficie' | 'fondo' | 'cabecera';

type SeccionProps = {
  tono?: TonoSeccion;
  id?: string;
  /** id del título, para `aria-labelledby`. */
  tituloId?: string;
  className?: string;
  /** Imagen de fondo a todo el ancho, fuera del contenedor animado. */
  media?: ReactNode;
  children: ReactNode;
};

/** Bloque de página a todo el ancho con contenido en el grid (máx. 1200 px). */
export default function Seccion({ tono = 'superficie', id, tituloId, className, media, children }: SeccionProps) {
  const ref = useRevelar<HTMLDivElement>();
  return (
    <section id={id} aria-labelledby={tituloId} className={`ds-raiz ${styles.seccion} ${styles[tono]}${className ? ` ${className}` : ''}`}>
      {media}
      <div ref={ref} className="ds-contenedor">
        {children}
      </div>
    </section>
  );
}

type EncabezadoProps = {
  etiqueta: string;
  titulo: string;
  tituloId?: string;
  intro?: string;
  /** Acción terciaria a la derecha en escritorio (p. ej. <EnlaceFlecha />). */
  accion?: ReactNode;
};

/** Etiqueta en mayúsculas + título grande (texto.display-seccion) + intro opcional. */
export function EncabezadoSeccion({ etiqueta, titulo, tituloId, intro, accion }: EncabezadoProps) {
  return (
    <div className={styles.encabezado}>
      <div className={styles.textos}>
        <p data-revelar className={`ds-etiqueta ${styles.etiqueta}`}>{etiqueta}</p>
        <h2 data-revelar id={tituloId} className="ds-display-seccion">{titulo}</h2>
        {intro && <p data-revelar className={`ds-cuerpo ${styles.intro}`}>{intro}</p>}
      </div>
      {accion && <div data-revelar>{accion}</div>}
    </div>
  );
}
