import { Link } from 'react-router-dom';
import { usePageTitle } from '../hooks/usePageTitle';

export default function ListadoServicios1() {
  usePageTitle("Servicios");

  return (
    <>
      <section className="b16">
        <div className="b16-content wancho">
          <div className="b16-title">
            Servicios
          </div>
          <h2 className="b16-subtitle">
            Catálogo de Servicios Notariales
          </h2>
        </div>
      </section>
      <section className="b17">
        <div className="b17-content wancho">
          <Link to="/listado-servicios-2" className="b17-item">
            <figure className="b17-image">
              <img src="/static/img/b17-item-1.jpg" />
            </figure>
            <div className="b17-info">
              <div className="b17-wrap">
                <div className="b17-title">
                  Transferencias Vehiculares
                </div>
                <div className="b17-description">
                  <p>
                    Gestiones seguras y confiables para cambios de dueño
                  </p>
                </div>
                {' '}
                <span className="b17-arrow icon-arrow-up-r"></span>
              </div>
            </div>
          </Link>
          {' '}
          <Link to="/listado-servicios-2" className="b17-item">
            <figure className="b17-image">
              <img src="/static/img/b17-item-2.jpg" />
            </figure>
            <div className="b17-info">
              <div className="b17-wrap">
                <div className="b17-title">
                  Escrituras Publicas
                </div>
                <div className="b17-description">
                  <p>
                    Asesoramiento y creación de documentos con validez legal
                  </p>
                </div>
                {' '}
                <span className="b17-arrow icon-arrow-up-r"></span>
              </div>
            </div>
          </Link>
          {' '}
          <Link to="/listado-servicios-2" className="b17-item">
            <figure className="b17-image">
              <img src="/static/img/b17-item-3.jpg" />
            </figure>
            <div className="b17-info">
              <div className="b17-wrap">
                <div className="b17-title">
                  Asuntos no Contenciosos
                </div>
                <div className="b17-description">
                  <p>
                    Resolución armoniosa de disputas
                  </p>
                </div>
                {' '}
                <span className="b17-arrow icon-arrow-up-r"></span>
              </div>
            </div>
          </Link>
          {' '}
          <Link to="/listado-servicios-2" className="b17-item">
            <figure className="b17-image">
              <img src="/static/img/b17-item-4.jpg" />
            </figure>
            <div className="b17-info">
              <div className="b17-wrap">
                <div className="b17-title">
                  Legalización de Documentos
                </div>
                <div className="b17-description">
                  <p>
                    Certificación y validez legal
                  </p>
                </div>
                {' '}
                <span className="b17-arrow icon-arrow-up-r"></span>
              </div>
            </div>
          </Link>
          {' '}
          <Link to="/listado-servicios-2" className="b17-item">
            <figure className="b17-image">
              <img src="/static/img/b17-item-5.jpg" />
            </figure>
            <div className="b17-info">
              <div className="b17-wrap">
                <div className="b17-title">
                  Diligencias Notariales
                </div>
                <div className="b17-description">
                  <p>
                    Asesoramiento notarial
                  </p>
                </div>
                {' '}
                <span className="b17-arrow icon-arrow-up-r"></span>
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
              Asegura tu atención notarial
            </div>
            <div className="b8-subtitle">
              ¡Agenda tu cita hoy!
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
