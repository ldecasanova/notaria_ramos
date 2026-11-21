import { Link } from 'react-router-dom';
import { usePageTitle } from '../hooks/usePageTitle';

export default function ListadoServicios2() {
  usePageTitle("Servicios");

  return (
    <>
      <section className="b18">
        <div className="b18-content wancho">
          <div className="b18-title">
            <Link to="/listado-servicios-1">
              Servicios
            </Link>
          </div>
          <h2 className="b18-subtitle">
            Escrituras Públicas
          </h2>
        </div>
      </section>
      <section className="b19">
        <div className="b19-content wancho">
          <div className="b19-left">
            <div className="b19-buttons">
              <a href="#" className="b19-button">
                Poder
              </a>
              {' '}
              <a href="#" className="b19-button active">
                Empresas
              </a>
              {' '}
              <a href="#" className="b19-button">
                Transferencia de bienes y arrendamiento
              </a>
              {' '}
              <a href="#" className="b19-button">
                Otros Trámites
              </a>
            </div>
          </div>
          <div className="b19-right">
            <div className="b19-title">
              Podemos ayudarte con
            </div>
            <div className="b19-block">
              <Link to="/detalle-servicio" className="b19-card">
                <figure className="b19-image">
                  <img src="/static/img/b19-item-1.jpg" />
                </figure>
                <div className="b19-info">
                  <div className="b19-subtitle">
                    Anticipo de{' '}
                    <br />
                    Herencia
                  </div>
                  {' '}
                  <span className="b19-link">
                    Ver Requisitos
                  </span>
                </div>
              </Link>
              {' '}
              <Link to="/detalle-servicio" className="b19-card">
                <figure className="b19-image">
                  <img src="/static/img/b19-item-2.jpg" />
                </figure>
                <div className="b19-info">
                  <div className="b19-subtitle">
                    Constitución{' '}
                    <br />
                    de Asociación
                  </div>
                  {' '}
                  <span className="b19-link">
                    Ver Requisitos
                  </span>
                </div>
              </Link>
              {' '}
              <Link to="/detalle-servicio" className="b19-card">
                <figure className="b19-image">
                  <img src="/static/img/b19-item-3.jpg" />
                </figure>
                <div className="b19-info">
                  <div className="b19-subtitle">
                    Constitución{' '}
                    <br />
                    de S.A.C
                  </div>
                  {' '}
                  <span className="b19-link">
                    Ver Requisitos
                  </span>
                </div>
              </Link>
              {' '}
              <Link to="/detalle-servicio" className="b19-card">
                <figure className="b19-image">
                  <img src="/static/img/b19-item-4.jpg" />
                </figure>
                <div className="b19-info">
                  <div className="b19-subtitle">
                    Aclaración de{' '}
                    <br />
                    Constitución
                  </div>
                  {' '}
                  <span className="b19-link">
                    Ver Requisitos
                  </span>
                </div>
              </Link>
              {' '}
              <Link to="/detalle-servicio" className="b19-card">
                <figure className="b19-image">
                  <img src="/static/img/b19-item-5.jpg" />
                </figure>
                <div className="b19-info">
                  <div className="b19-subtitle">
                    Aclaración{' '}
                    <br />
                    de Donación
                  </div>
                  {' '}
                  <span className="b19-link">
                    Ver Requisitos
                  </span>
                </div>
              </Link>
              {' '}
              <Link to="/detalle-servicio" className="b19-card">
                <figure className="b19-image">
                  <img src="/static/img/b19-item-6.jpg" />
                </figure>
                <div className="b19-info">
                  <div className="b19-subtitle">
                    Aclaración{' '}
                    <br />
                    de Compraventa
                  </div>
                  {' '}
                  <span className="b19-link">
                    Ver Requisitos
                  </span>
                </div>
              </Link>
            </div>
          </div>
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
