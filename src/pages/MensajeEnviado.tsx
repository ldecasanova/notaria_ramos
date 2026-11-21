import { Link } from 'react-router-dom';
import { usePageTitle } from '../hooks/usePageTitle';

export default function MensajeEnviado() {
  usePageTitle("Mensaje enviado");

  return (
    <>
      <section className="b49">
        <div className="b49-content wancho">
          <div className="b49-left">
            <div className="b49-title">
              Bien!
            </div>
            <h2 className="b49-subtitle">
              Mensaje Enviado
            </h2>
            <div className="b49-description">
              <p>
                Tu mensaje ha sido enviado con éxito.
              </p>
            </div>
            <div className="b49-buttons">
              <div className="b49-item">
                <Link to="/" className="g-btn-bg bg_blue">
                  Regresar a la web
                </Link>
              </div>
              <div className="b49-item">
                <Link to="/listado-servicios-1" className="g-btn-bd">
                  Ver Servicios
                </Link>
              </div>
            </div>
          </div>
          <div className="b49-right">
            <figure className="b49-image">
              <img src="/static/img/b49-portada.png" />
            </figure>
          </div>
        </div>
      </section>
    </>
  );
}
