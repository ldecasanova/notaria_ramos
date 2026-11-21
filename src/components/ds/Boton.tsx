import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import Icono, { type NombreIcono } from './Icono';
import styles from './Boton.module.css';

type Base = {
  /** Primario: la acción principal de la pantalla (solo una). Secundario: volver, cancelar o alternativa. */
  tipo?: 'primario' | 'secundario';
  /** `oscuro` cuando el botón va sobre cabecera, hero o banda oscura. */
  tono?: 'claro' | 'oscuro';
  anchoCompleto?: boolean;
  icono?: NombreIcono;
  children: ReactNode;
};

type ComoBoton = Base & ButtonHTMLAttributes<HTMLButtonElement> & {
  to?: never;
  href?: never;
  cargando?: boolean;
  /** Texto mientras carga, en gerundio («Confirmando…»). */
  textoCargando?: string;
};
type ComoLink = Base & { to: string; href?: never; className?: string };
type ComoEnlace = Base & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; to?: never };

export type BotonProps = ComoBoton | ComoLink | ComoEnlace;

function Spinner() {
  return (
    <svg className={styles.spinner} width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden="true">
      <path d="M21 12a9 9 0 1 1-6.22-8.56" />
    </svg>
  );
}

export default function Boton(props: BotonProps) {
  const { tipo = 'primario', tono = 'claro', anchoCompleto, icono, children } = props;
  const className = [styles.boton, styles[tipo], styles[tono], anchoCompleto && styles.anchoCompleto, props.className]
    .filter(Boolean)
    .join(' ');
  const contenido = (
    <>
      {children}
      {icono && <Icono nombre={icono} tamano={20} />}
    </>
  );

  if ('to' in props && props.to !== undefined) {
    return <Link to={props.to} className={className}>{contenido}</Link>;
  }

  if ('href' in props && props.href !== undefined) {
    const { tipo: _t, tono: _o, anchoCompleto: _a, icono: _i, children: _c, className: _cn, ...rest } = props;
    return <a {...rest} className={className}>{contenido}</a>;
  }

  const { tipo: _t, tono: _o, anchoCompleto: _a, icono: _i, children: _c, className: _cn, cargando, textoCargando, disabled, type, ...rest } =
    props as ComoBoton;
  return (
    <button
      {...rest}
      type={type ?? 'button'}
      className={`${className}${cargando ? ` ${styles.cargando}` : ''}`}
      disabled={disabled || cargando}
      aria-busy={cargando || undefined}
    >
      {cargando ? (
        <>
          <Spinner />
          {textoCargando ?? children}
        </>
      ) : (
        contenido
      )}
    </button>
  );
}

type EnlaceFlechaProps = { to: string; tono?: 'claro' | 'oscuro'; children: ReactNode };

/** Enlace de texto con flecha para acciones terciarias («Ver todos los servicios →»). */
export function EnlaceFlecha({ to, tono = 'claro', children }: EnlaceFlechaProps) {
  return (
    <Link to={to} className={`${styles.enlace}${tono === 'oscuro' ? ` ${styles.enlaceOscuro}` : ''}`}>
      {children}
      <Icono nombre="der" tamano={20} />
    </Link>
  );
}
