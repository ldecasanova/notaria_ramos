import { Link } from 'react-router-dom';
import Boton, { EnlaceFlecha } from '../components/ds/Boton';
import Icono, { type NombreIcono } from '../components/ds/Icono';
import Hero from '../components/landing/Hero';
import Seccion, { EncabezadoSeccion } from '../components/landing/Seccion';
import { usePageTitle } from '../hooks/usePageTitle';
import styles from './Home.module.css';

const SERVICIOS = [
  {
    titulo: 'Escrituras públicas',
    descripcion: 'Documentos notariales que certifican acuerdos legales, validados y autenticados legalmente.',
  },
  {
    titulo: 'Transferencias vehiculares',
    descripcion: 'Área encargada de la compraventa y transferencia de vehículos en general.',
  },
  {
    titulo: 'Asuntos no contenciosos',
    descripcion: 'Soluciones legales para acuerdos amistosos y trámites sin disputas judiciales.',
  },
];

const PILARES: { icono: NombreIcono; titulo: string; texto: string }[] = [
  {
    icono: 'documento',
    titulo: 'Asesoría experta',
    texto: 'Convertimos tus necesidades y documentos en soluciones sólidas y seguras.',
  },
  {
    icono: 'check',
    titulo: 'Seguridad jurídica',
    texto: 'Tu tranquilidad es nuestra prioridad en cada trámite.',
  },
  {
    icono: 'calendario',
    titulo: 'Atención en San Miguel',
    texto: 'Av. La Marina 1443, San Miguel, Lima. Reserva tu cita en línea.',
  },
];

const PASOS = [
  { titulo: 'Consulta tu trámite', texto: 'Ingresa tu tipo y N° de documento, y el N° de kardex.' },
  { titulo: 'Revisa el resultado', texto: 'Te mostramos en qué etapa está y si falta algo.' },
  { titulo: 'Agenda tu cita de firma', texto: 'Elige el día y la hora, y revisa qué necesitas traer.' },
];

const ARTICULOS = [
  {
    categoria: 'Novedades',
    titulo: 'Desmintiendo mitos: verdades sobre documentos notariales',
    resumen: 'Descubre la realidad detrás de los mitos más comunes sobre los documentos notariales.',
    imagen: '/static/img/blog-list-item-1.jpg',
  },
  {
    categoria: 'Consejos',
    titulo: 'El arte de testar: consejos clave para tu testamento',
    resumen: 'Los elementos cruciales para redactar un testamento efectivo y legalmente válido.',
    imagen: '/static/img/blog-list-item-2.jpg',
  },
  {
    categoria: 'Productividad',
    titulo: 'Poderes notariales: importancia y uso eficaz en tus trámites',
    resumen: 'Cómo usar los poderes notariales para facilitar tus transacciones legales.',
    imagen: '/static/img/blog-list-item-3.jpg',
  },
];

export default function Home() {
  usePageTitle('');

  return (
    <>
      <Hero
        etiqueta="Notaría de Lima · San Miguel"
        titulo="Seguridad jurídica a tu servicio"
        bajada="Escrituras públicas, transferencias vehiculares y asuntos no contenciosos, con asesoría notarial en cada paso."
        imagen="/static/img/b1-banner.png"
        acciones={
          <>
            <Boton to="/consultar-tramite" tono="oscuro">Consultar mi trámite</Boton>
            <Boton to="/listado-servicios-1" tipo="secundario" tono="oscuro">Ver servicios</Boton>
          </>
        }
        accesos={SERVICIOS.map((s) => ({ to: '/listado-servicios-2', label: s.titulo }))}
      />

      {/* La notaría */}
      <Seccion tituloId="notaria-titulo">
        <EncabezadoSeccion etiqueta="La notaría" titulo="Asesoría notarial que marca la diferencia." tituloId="notaria-titulo" />
        <div className={styles.dosColumnas}>
          <div data-revelar className={styles.parrafo}>
            <p className="ds-cuerpo">
              En Notaría Ramos, nuestro compromiso es brindarte un servicio legal excepcional, respaldado por años de
              experiencia y dedicación en el campo notarial y de servicios legales. Ofrecemos asesoría experta y confianza
              en cada trámite.
            </p>
            <EnlaceFlecha to="/nosotros">Más sobre nosotros</EnlaceFlecha>
          </div>
          <ul className={styles.pilares}>
            {PILARES.map((pilar) => (
              <li data-revelar key={pilar.titulo} className={styles.pilar}>
                <span className={styles.pilarIcono}><Icono nombre={pilar.icono} /></span>
                <div className={styles.pilarTexto}>
                  <h3 className="ds-titulo2">{pilar.titulo}</h3>
                  <p className={`ds-pequeno ${styles.secundario}`}>{pilar.texto}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Seccion>

      {/* Servicios */}
      <Seccion tono="fondo" tituloId="servicios-titulo">
        <EncabezadoSeccion
          etiqueta="Trámites en línea"
          titulo="Tus trámites notariales, en un solo lugar."
          tituloId="servicios-titulo"
          accion={<EnlaceFlecha to="/listado-servicios-1">Ver todos los servicios</EnlaceFlecha>}
        />
        <ul className={styles.servicios}>
          {SERVICIOS.map((servicio) => (
            <li data-revelar key={servicio.titulo}>
              <Link to="/detalle-tramite" className={styles.servicio}>
                <span className={styles.pilarIcono}><Icono nombre="documento" /></span>
                <h3 className="ds-titulo2">{servicio.titulo}</h3>
                <p className={`ds-pequeno ${styles.secundario}`}>{servicio.descripcion}</p>
                <span className={`ds-cuerpo ${styles.servicioAccion}`}>
                  Realizar trámite <Icono nombre="der" tamano={20} />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Seccion>

      {/* Consulta en 3 pasos (flujo del design system) */}
      <Seccion tituloId="consulta-titulo">
        <div className={styles.dosColumnas}>
          <div>
            <EncabezadoSeccion
              etiqueta="Consulta en línea"
              titulo="Sigue tu trámite en tres pasos."
              tituloId="consulta-titulo"
            />
            <ol className={styles.pasos}>
              {PASOS.map((paso, i) => (
                <li data-revelar key={paso.titulo} className={styles.paso}>
                  <span className={`ds-etiqueta ds-numeros ${styles.pasoNumero}`}>{String(i + 1).padStart(2, '0')}</span>
                  <div className={styles.pilarTexto}>
                    <h3 className="ds-titulo2">{paso.titulo}</h3>
                    <p className={`ds-pequeno ${styles.secundario}`}>{paso.texto}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div data-revelar>
              <Boton to="/consultar-tramite" tipo="secundario" icono="der">Consultar mi trámite</Boton>
            </div>
          </div>
          <div data-revelar className={styles.marcoImagen}>
            <img className={styles.imagen} src="/static/img/b4-consulta-large.png" alt="" />
          </div>
        </div>
      </Seccion>

      {/* Equipo */}
      <Seccion tono="fondo" tituloId="equipo-titulo">
        <div className={styles.dosColumnas}>
          <div data-revelar className={styles.marcoImagen}>
            <img className={styles.imagen} src="/static/img/b6-equipo.jpg" alt="Equipo de la Notaría Ramos" />
          </div>
          <div className={styles.equipoTexto}>
            <p data-revelar className={`ds-etiqueta ${styles.equipoEtiqueta}`}>Nuestro equipo</p>
            <h2 data-revelar id="equipo-titulo" className="ds-display-seccion">
              Experiencia notarial que da confianza y seguridad.
            </h2>
            <p data-revelar className={`ds-cuerpo ${styles.secundario}`}>
              Nuestra sede es más que una oficina: es un centro dedicado a ofrecerte soluciones legales confiables y el
              asesoramiento notarial que necesitas, en un ambiente de seriedad y tranquilidad.
            </p>
            <div data-revelar>
              <EnlaceFlecha to="/nuestro-equipo">Conoce a nuestro equipo</EnlaceFlecha>
            </div>
          </div>
        </div>
      </Seccion>

      {/* Blog */}
      <Seccion tituloId="blog-titulo">
        <EncabezadoSeccion
          etiqueta="Blog"
          titulo="Nos mantenemos siempre actualizados."
          tituloId="blog-titulo"
          accion={<EnlaceFlecha to="/blog">Ir al blog</EnlaceFlecha>}
        />
        <ul className={styles.articulos}>
          {ARTICULOS.map((articulo) => (
            <li data-revelar key={articulo.titulo}>
              <Link to="/detalle-blog" className={styles.articulo}>
                <div className={styles.articuloMarco}>
                  <img className={styles.articuloImagen} src={articulo.imagen} alt="" />
                </div>
                <p className={`ds-etiqueta ${styles.articuloCategoria}`}>{articulo.categoria}</p>
                <h3 className={`ds-titulo2 ${styles.articuloTitulo}`}>{articulo.titulo}</h3>
                <p className={`ds-pequeno ${styles.secundario}`}>{articulo.resumen}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Seccion>

      {/* Banda final de cita */}
      <Seccion
        tono="cabecera"
        tituloId="cita-titulo"
        className={styles.banda}
        media={<img className={styles.bandaFoto} src="/static/img/b8-banner.png" alt="" />}
      >
        <div className={styles.bandaContenido}>
          <p data-revelar className={`ds-etiqueta ${styles.bandaEtiqueta}`}>Citas</p>
          <h2 data-revelar id="cita-titulo" className="ds-display-seccion">Asegura tu atención notarial.</h2>
          <p data-revelar className="ds-cuerpo">Agenda tu cita hoy y te atendemos en nuestra sede de San Miguel.</p>
          <div data-revelar>
            <Boton to="/contacto" tono="oscuro">Reservar una cita</Boton>
          </div>
        </div>
      </Seccion>
    </>
  );
}
