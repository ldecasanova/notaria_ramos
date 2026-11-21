import { useEffect, useState, type CSSProperties } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Icono from './Icono';
import { NAV_ITEMS, WHATSAPP_URL } from '../../routes';
import styles from './Cabecera.module.css';

type Props = {
  /** Inicio: empieza transparente sobre el hero y se vuelve sólida al hacer scroll. */
  tipo?: 'inicio' | 'interna';
};

const UMBRAL_SOLIDA = 24;
/** Cuánto hay que desplazarse en una dirección antes de esconder/mostrar (evita temblores). */
const UMBRAL_DIRECCION = 8;

/** Estado de scroll: si la cabecera debe ser sólida y si debe esconderse (al bajar). */
function useScrollCabecera() {
  const [solida, setSolida] = useState(false);
  const [oculta, setOculta] = useState(false);

  useEffect(() => {
    let ultimoY = window.scrollY;
    let frame = 0;
    const actualizar = () => {
      frame = 0;
      const y = window.scrollY;
      setSolida(y > UMBRAL_SOLIDA);
      const delta = y - ultimoY;
      if (Math.abs(delta) < UMBRAL_DIRECCION) return;
      // Se esconde al bajar pasada la primera pantalla; reaparece apenas se sube.
      setOculta(delta > 0 && y > window.innerHeight * 0.5);
      ultimoY = y;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(actualizar);
    };
    actualizar();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return { solida, oculta };
}

export default function Cabecera({ tipo = 'interna' }: Props) {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const { solida, oculta } = useScrollCabecera();
  const { pathname } = useLocation();

  // Cerrar el menú al navegar o al pasar a escritorio.
  useEffect(() => setMenuAbierto(false), [pathname]);
  useEffect(() => {
    const mql = window.matchMedia('(min-width: 1024px)');
    const cerrar = () => mql.matches && setMenuAbierto(false);
    mql.addEventListener('change', cerrar);
    return () => mql.removeEventListener('change', cerrar);
  }, []);

  // Con el menú abierto: sin scroll de fondo y Escape para cerrar.
  useEffect(() => {
    if (!menuAbierto) return;
    const anterior = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuAbierto(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = anterior;
      window.removeEventListener('keydown', onKey);
    };
  }, [menuAbierto]);

  const transparente = tipo === 'inicio' && !solida && !menuAbierto;
  const clases = [
    'ds-raiz',
    styles.cabecera,
    transparente && styles.transparente,
    oculta && !menuAbierto && styles.oculta,
  ].filter(Boolean).join(' ');

  return (
    <header className={clases}>
      <div className={`ds-contenedor ${styles.barra}`}>
        <Link to="/" className={styles.logo} aria-label="Notaría Ramos, ir al inicio">
          <img src="/static/img/header-logo.svg" alt="" />
        </Link>

        <nav className={styles.nav} aria-label="Principal">
          <ul className={styles.navLista}>
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} className={`ds-pequeno ${styles.navEnlace}`}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.acciones}>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.iconoBoton} icon-whatsapp`}
            aria-label="Escríbenos por WhatsApp"
          ></a>
          <button
            type="button"
            className={`${styles.iconoBoton} ${styles.menuBoton}`}
            aria-expanded={menuAbierto}
            aria-controls="menu-movil"
            aria-label={menuAbierto ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setMenuAbierto((v) => !v)}
          >
            <Icono nombre={menuAbierto ? 'cerrar' : 'menu'} />
          </button>
        </div>
      </div>

      {/* Siempre montado para poder animar la entrada y la salida; `inert` lo saca del foco cuando está cerrado. */}
      <div id="menu-movil" className={`${styles.panel}${menuAbierto ? ` ${styles.panelAbierto}` : ''}`} inert={!menuAbierto}>
        <nav className="ds-contenedor" aria-label="Principal">
          <ul className={styles.panelLista}>
            {NAV_ITEMS.map((item, i) => (
              <li key={item.to} style={{ '--i': i } as CSSProperties}>
                <NavLink to={item.to} className={`ds-titulo2 ${styles.panelEnlace}`}>
                  {item.label}
                  <Icono nombre="der" />
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
