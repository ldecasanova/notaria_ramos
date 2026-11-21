import { Link } from 'react-router-dom';
import { usePageTitle } from '../hooks/usePageTitle';

export default function DetalleServicio() {
  usePageTitle("Servicio");

  return (
    <>
      <section className="b20">
        <div className="b20-content wancho">
          <div className="b20-title">
            <Link to="/listado-servicios-2">
              Escrituras Publicas
            </Link>
          </div>
          <h2 className="b20-subtitle">
            Aclaración de Anticipo de Herencia
          </h2>
          <figure className="b20-image">
            <img src="/static/img/b20-portada.jpg" />
          </figure>
        </div>
      </section>
      <section className="b21">
        <div className="b21-content wancho">
          <div className="b21-left">
            <div className="b21-title">
              La constitución de asociaciones y juntas de propietarios es un proceso notarial para formalizar legalmente grupos con objetivos comunes y comunidades de propietarios. Se redactan documentos legales y se firman ante notario para establecer reglas y estructuras de estas entidades.
            </div>
          </div>
          <div className="b21-right">
            <div className="b21-subtitle">
              Requisitos para el trámite:
            </div>
            <div className="b21-description">
              <ul>
                <li>
                  Copia de documento de identidad del solicitante (vigente y con constancia de ultima votación y/o tasa de pago respectiva, según sea el caso)​.
                </li>
                <li>
                  Acta original de Constitución de Asociación y/o conformación de Junta de Propietarios, según sea el caso.
                </li>
              </ul>
            </div>
            <div className="b21-note">
              <p>
                IMPORTANTE: La comunicación a SUNAT deberá contener el detalle de la denominación del Libro y/o Registro, el periodo tributario y/o ejercicio al que corresponden estos, la fecha en que fueron legalizados, el número de legalización además de datos de NOTARIO que efectuó la legalización o el número de JUZGADO en que se realizo la misma, si fuera el caso.(ARTICULO 9° .- Resolución de Superintendencia N°234-2006/SUNAT).
              </p>
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
