import { Link } from 'react-router-dom';
import { usePageTitle } from '../hooks/usePageTitle';

export default function ListadoTramites() {
  usePageTitle("Trámites");

  return (
    <>
      <section className="b22">
        <div className="b22-content wancho">
          <div className="b22-title">
            Tramites en Linea
          </div>
          <h2 className="b22-subtitle">
            Servicios Notariales
          </h2>
        </div>
      </section>
      <section className="b23">
        <div className="b23-content wancho">
          <Link to="/detalle-tramite" className="b23-card">
            <span className="b23-icon icon-tramite"></span>
            {' '}
            <div className="b23-subtitle">
              Escrituras{' '}
              <br />
              Públicas
            </div>
            <div className="b23-description">
              <p>
                Documentos notariales que certifican acuerdos legales, validados y autenticados legalmente.
              </p>
            </div>
            <div className="b23-button">
              <div className="b23-btn">
                Realizar trámite
                <span className="b23-btn-icon icon-arrow-right"></span>
              </div>
            </div>
          </Link>
          {' '}
          <Link to="/detalle-tramite" className="b23-card">
            <span className="b23-icon icon-tramite"></span>
            {' '}
            <div className="b23-subtitle">
              Transferencias{' '}
              <br />
              Vehiculares
            </div>
            <div className="b23-description">
              <p>
                Documentos notariales que certifican acuerdos legales, validados y autenticados legalmente.
              </p>
            </div>
            <div className="b23-button">
              <div className="b23-btn">
                Realizar trámite
                <span className="b23-btn-icon icon-arrow-right"></span>
              </div>
            </div>
          </Link>
          {' '}
          <Link to="/detalle-tramite" className="b23-card">
            <span className="b23-icon icon-tramite"></span>
            {' '}
            <div className="b23-subtitle">
              Asuntos no{' '}
              <br />
              Contenciosos
            </div>
            <div className="b23-description">
              <p>
                Soluciones legales sin litigios. En nuestra notaría, abordamos acuerdos amistosos y trámites sin disputas judiciales.
              </p>
            </div>
            <div className="b23-button">
              <div className="b23-btn">
                Realizar trámite
                <span className="b23-btn-icon icon-arrow-right"></span>
              </div>
            </div>
          </Link>
          {' '}
          <Link to="/detalle-tramite" className="b23-card">
            <span className="b23-icon icon-tramite"></span>
            {' '}
            <div className="b23-subtitle">
              Legalizaciones de apertura de libros
            </div>
            <div className="b23-description">
              <p>
                Proceso notarial para validar y certificar los libros contables de una empresa. Este trámite garantiza la autenticidad y validez
              </p>
            </div>
            <div className="b23-button">
              <div className="b23-btn">
                Realizar trámite
                <span className="b23-btn-icon icon-arrow-right"></span>
              </div>
            </div>
          </Link>
          {' '}
          <Link to="/detalle-tramite" className="b23-card">
            <span className="b23-icon icon-tramite"></span>
            {' '}
            <div className="b23-subtitle">
              Permisos de{' '}
              <br />
              Viajes
            </div>
            <div className="b23-description">
              <p>
                Facilitamos viajes seguros para menores. En nuestra notaría, proporcionamos permisos de viaje garantizados legalmente
              </p>
            </div>
            <div className="b23-button">
              <div className="b23-btn">
                Realizar trámite
                <span className="b23-btn-icon icon-arrow-right"></span>
              </div>
            </div>
          </Link>
          {' '}
          <Link to="/detalle-tramite" className="b23-card">
            <span className="b23-icon icon-tramite"></span>
            {' '}
            <div className="b23-subtitle">
              Constataciones{' '}
              <br />
              de Hechos
            </div>
            <div className="b23-description">
              <p>
                Este servicio garantiza la verificación oficial de domicilios para diversos fines legales segun se requieran.
              </p>
            </div>
            <div className="b23-button">
              <div className="b23-btn">
                Realizar trámite
                <span className="b23-btn-icon icon-arrow-right"></span>
              </div>
            </div>
          </Link>
          {' '}
          <Link to="/detalle-tramite" className="b23-card">
            <span className="b23-icon icon-tramite"></span>
            {' '}
            <div className="b23-subtitle">
              Constitución de{' '}
              <br />
              Empresas
            </div>
            <div className="b23-description">
              <p>
                Proceso legal para establecer empresas, gestión de trámites, obtención de licencias, registros y demás requisitos necesarios.
              </p>
            </div>
            <div className="b23-button">
              <div className="b23-btn">
                Realizar trámite
                <span className="b23-btn-icon icon-arrow-right"></span>
              </div>
            </div>
          </Link>
          {' '}
          <Link to="/detalle-tramite" className="b23-card">
            <span className="b23-icon icon-tramite"></span>
            {' '}
            <div className="b23-subtitle">
              Cartas{' '}
              <br />
              Notariales
            </div>
            <div className="b23-description">
              <p>
                Asegura tus comunicaciones con validez legal. Nuestro servicio ofrece cartas notariales respaldadas por un notario.
              </p>
            </div>
            <div className="b23-button">
              <div className="b23-btn">
                Realizar trámite
                <span className="b23-btn-icon icon-arrow-right"></span>
              </div>
            </div>
          </Link>
          {' '}
          <Link to="/detalle-tramite" className="b23-card">
            <span className="b23-icon icon-tramite"></span>
            {' '}
            <div className="b23-subtitle">
              Poder Fuera de{' '}
              <br />
              Registro
            </div>
            <div className="b23-description">
              <p>
                Este servicio proporciona la legitimidad y validez legal necesaria para actuar en nombre de otra persona.
              </p>
            </div>
            <div className="b23-button">
              <div className="b23-btn">
                Realizar trámite
                <span className="b23-btn-icon icon-arrow-right"></span>
              </div>
            </div>
          </Link>
        </div>
      </section>
      <section className="b8 b8-radius">
        <figure className="b8-image" style={{ backgroundImage: "url('/static/img/b8-banner.png')" }}></figure>
        <div className="b8-block">
          <div className="b8-content wancho">
            <div className="b8-title">
              Asegura tu orientación legal
            </div>
            <div className="b8-subtitle">
              ¡Agenda tu asesoría hoy!
            </div>
            <div className="b8-button">
              <Link to="/contacto" className="b8-btn-link">
                Reserva una cita{' '}
                <span className="b8-btn-icon icon-arrow-right"></span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
