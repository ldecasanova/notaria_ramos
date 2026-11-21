import { Fragment, useEffect, useRef, type CSSProperties, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import Icono from '../ds/Icono';
import styles from './Hero.module.css';

type Acceso = { to: string; label: string };

type Props = {
  etiqueta: string;
  titulo: string;
  bajada: string;
  imagen: string;
  /** Botones (tono oscuro): un primario como máximo. */
  acciones: ReactNode;
  accesos?: Acceso[];
};

/** Orden de entrada; cada paso se retrasa var(--movimiento-escalon). */
const paso = (i: number) => ({ '--i': i }) as CSSProperties;

/** Parallax suave de la foto: se mueve más lento que el scroll. */
function useParallax<T extends HTMLElement>(factor = 0.3) {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let frame = 0;
    const actualizar = () => {
      frame = 0;
      const y = Math.min(window.scrollY, window.innerHeight);
      el.style.setProperty('--parallax', `${y * factor}px`);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(actualizar);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(frame);
    };
  }, [factor]);
  return ref;
}

/** Portada a pantalla completa con foto, velo de color.cabecera y texto en superficie. */
export default function Hero({ etiqueta, titulo, bajada, imagen, acciones, accesos }: Props) {
  const fotoRef = useParallax<HTMLDivElement>();
  const palabras = titulo.split(' ');
  // Después del título, el resto entra en orden.
  const base = palabras.length + 1;

  return (
    <section className={`ds-raiz ${styles.hero}`} aria-labelledby="hero-titulo">
      <div ref={fotoRef} className={styles.fotoMarco} aria-hidden="true">
        <img className={styles.foto} src={imagen} alt="" />
      </div>
      <div className={styles.velo} aria-hidden="true"></div>
      <div className={`ds-contenedor ${styles.contenido}`}>
        <div className={styles.textos}>
          <p className={`ds-etiqueta ${styles.entra}`} style={paso(0)}>{etiqueta}</p>
          <h1 id="hero-titulo" className="ds-display" aria-label={titulo}>
            {palabras.map((palabra, i) => (
              <Fragment key={i}>
                <span className={styles.mascara} aria-hidden="true">
                  <span className={styles.palabra} style={paso(i + 1)}>{palabra}</span>
                </span>
                {i < palabras.length - 1 && ' '}
              </Fragment>
            ))}
          </h1>
          <p className={`ds-cuerpo ${styles.entra}`} style={paso(base)}>{bajada}</p>
          <div className={`${styles.botones} ${styles.entra}`} style={paso(base + 1)}>{acciones}</div>
        </div>
        {accesos && (
          <ul className={styles.accesos} aria-label="Servicios destacados">
            {accesos.map((acceso, i) => (
              <li key={acceso.label} className={styles.entra} style={paso(base + 2 + i)}>
                <Link to={acceso.to} className={`ds-cuerpo ${styles.acceso}`}>
                  {acceso.label}
                  <Icono nombre="sale" tamano={20} />
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
