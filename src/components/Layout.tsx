import { useLayoutEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Cabecera from './ds/Cabecera';
import Pie from './ds/Pie';
import { scrollToElement } from '../lib/dom';

/** Estructura común de todas las páginas: Cabecera + contenido + Pie (design system). */
export default function Layout() {
  const { pathname, hash } = useLocation();

  // Al navegar: subir al inicio, o ir al #ancla si la URL trae una.
  useLayoutEffect(() => {
    const target = hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null;
    if (target) scrollToElement(target);
    // 'instant': el scroll suave global no debe animar el salto al cambiar de página.
    else window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, hash]);

  return (
    <>
      <a href="#contenido" className="ds-sr">Saltar al contenido</a>
      <Cabecera tipo={pathname === '/' ? 'inicio' : 'interna'} />
      {/* `wrapper` se mantiene para el CSS heredado de las páginas aún no migradas. */}
      <main id="contenido" className={pathname === '/' ? undefined : 'wrapper'}>
        {/* La key reinicia el fundido en cada cambio de página. */}
        <div key={pathname} className="ds-pagina">
          <Outlet />
        </div>
      </main>
      <Pie />
    </>
  );
}
