import { Link } from 'react-router-dom';
import styles from './Pie.module.css';

type Grupo = { titulo: string; enlaces: { to: string; label: string }[] };

const GRUPOS: Grupo[] = [
  {
    titulo: 'Servicios',
    enlaces: [
      { to: '/listado-servicios-2', label: 'Transferencia vehicular' },
      { to: '/listado-servicios-2', label: 'Escrituras públicas' },
      { to: '/listado-servicios-2', label: 'Asuntos no contenciosos' },
      { to: '/listado-servicios-2', label: 'Legalización de documentos' },
      { to: '/listado-servicios-2', label: 'Servicios notariales' },
    ],
  },
  {
    titulo: 'Explora',
    enlaces: [
      { to: '/nosotros', label: 'La notaría' },
      { to: '/nuestro-equipo', label: 'Nuestro equipo' },
      { to: '/listado-tramites', label: 'Trámites en línea' },
      { to: '/consultar-tramite', label: 'Consultar trámite' },
      { to: '/contacto', label: 'Reservar citas' },
      { to: '/blog', label: 'Blog' },
    ],
  },
  {
    titulo: 'Legales',
    enlaces: [
      { to: '/libro-de-reclamaciones', label: 'Libro de reclamaciones' },
      { to: '/politicas-de-privacidad', label: 'Política de privacidad' },
      { to: '/politicas-de-privacidad', label: 'Política de cookies' },
      { to: '/politicas-de-privacidad', label: 'Términos y condiciones' },
    ],
  },
];

const REDES = [
  { href: '#', icono: 'icon-facebook', nombre: 'Facebook' },
  { href: '#', icono: 'icon-twitter', nombre: 'Twitter' },
  { href: '#', icono: 'icon-youtube', nombre: 'YouTube' },
];

// Datos de contacto vigentes en el sitio. El design system muestra otros
// (+51 978 491 674 · Ruth Alessandra Ramos Rivas): pendiente de confirmar con el equipo.
const TELEFONO = { texto: '01 2638686', href: 'tel:012638686' };
const CORREO = 'informes@notariaramos.pe';
const DIRECCION_URL =
  'https://www.google.com/maps/place/Av.+la+Marina+1443,+San+Miguel+15086/@-12.0796774,-77.0823854,17z';

/** Pie de página: contacto y datos legales al final de cada pantalla (nunca la acción principal). */
export default function Pie() {
  return (
    <footer className={`ds-raiz ${styles.pie}`}>
      <div className="ds-contenedor">
        <div className={styles.arriba}>
          <div className={styles.marca}>
            <img src="/static/img/footer-logo.svg" alt="Alessandra Ramos, Notaria de Lima" />
            <ul className={styles.redes}>
              {REDES.map((red) => (
                <li key={red.nombre}>
                  <a href={red.href} className={`${styles.red} ${red.icono}`} aria-label={red.nombre}></a>
                </li>
              ))}
            </ul>
          </div>

          {GRUPOS.map((grupo) => (
            <nav key={grupo.titulo} className={styles.grupo} aria-label={grupo.titulo}>
              <p className={`ds-etiqueta ${styles.etiqueta}`}>{grupo.titulo}</p>
              <ul className={styles.lista}>
                {grupo.enlaces.map((enlace) => (
                  <li key={enlace.label}>
                    <Link to={enlace.to} className={`ds-pequeno ${styles.enlace}`}>{enlace.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <address className={`${styles.grupo} ${styles.contacto}`}>
            <div className={styles.dato}>
              <p className={`ds-etiqueta ${styles.etiqueta}`}>Llámanos</p>
              <a href={TELEFONO.href} className={`ds-pequeno ds-numeros ${styles.enlace}`}>{TELEFONO.texto}</a>
            </div>
            <div className={styles.dato}>
              <p className={`ds-etiqueta ${styles.etiqueta}`}>Escríbenos</p>
              <a href={`mailto:${CORREO}`} className={`ds-pequeno ${styles.enlace}`}>{CORREO}</a>
            </div>
            <div className={styles.dato}>
              <p className={`ds-etiqueta ${styles.etiqueta}`}>Visítanos</p>
              <a href={DIRECCION_URL} target="_blank" rel="noopener noreferrer" className={`ds-pequeno ${styles.enlace}`}>
                Av. La Marina 1443, San Miguel, Lima
              </a>
            </div>
          </address>
        </div>

        <div className={`ds-pequeno ${styles.abajo}`}>
          <p>© {new Date().getFullYear()} Alessandra Ramos · Notaria de Lima. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
