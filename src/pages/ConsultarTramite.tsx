import { Link } from 'react-router-dom';
import ValidatedForm from '../components/ValidatedForm';
import { usePageTitle } from '../hooks/usePageTitle';

export default function ConsultarTramite() {
  usePageTitle("Consultar trámite");

  return (
    <>
      <section className="b50">
        <div className="b50-content wancho">
          <div className="b50-left">
            <div className="b50-title">
              Consulta el estado de tu trámite
            </div>
            <div className="b50-description">
              <p>
                Por favor, completa el siguiente formulario para reservar una cita con nosotros. Te contactaremos para confirmar la reservación
              </p>
            </div>
          </div>
          <div className="b50-right">
            <div className="b50-form">
              <ValidatedForm>
                <div className="g5-select g5-item-input">
                  <select id="form_type_document" name="your-type-document" className="form-input validate[required]">
                    <option value=""></option>
                    <option value="DNI">
                      DNI
                    </option>
                    <option value="RUC">
                      RUC
                    </option>
                    <option value="C.E.">
                      C.E.
                    </option>
                  </select>
                  {' '}
                  <label className="input-label" htmlFor="form_type_document">
                    <span>
                      Tipo de documento
                    </span>
                    <i className="icon-arrow-down"></i>
                  </label>
                </div>
                <div className="g5-input g5-item-input">
                  <input type="text" id="form_number_document" name="your-number-document" className="form-input soloNumber validate[required]" />
                  {' '}
                  <label className="input-label" htmlFor="form_number_document">
                    <span>
                      Nª de Documento*
                    </span>
                  </label>
                </div>
                <div className="g5-input g5-item-input">
                  <input type="text" id="form_number_kardex" name="your-number-kardex" className="form-input soloNumber validate[required]" />
                  {' '}
                  <label className="input-label" htmlFor="form_number_kardex">
                    <span>
                      Nª de Kardex*
                    </span>
                  </label>
                </div>
                {' '}
                <span className="g5-required">
                  (*) Campos obligatorios
                </span>
                {' '}
                <div className="g5-terminos">
                  <input type="checkbox" defaultChecked id="company_privacity" className="validate[required]" name="agree-terms-privacity" />
                  {' '}
                  <label htmlFor="company_privacity" className="g5-terminos_nota">
                    <span className="g5-terminos_icon"></span>
                    {' '}
                    <div className="g5-terminos_text">
                      <p>
                        He leído y acepto las{' '}
                        <Link to="/politicas-de-privacidad" target="_blank">
                          Políticas de Privacidad
                        </Link>
                        {' '}de Notaria Ramos
                      </p>
                    </div>
                  </label>
                </div>
                <div className="b50-button">
                  <button type="submit" className="g-btn-bg bg_blue b50-btn-send">
                    Aceptar
                  </button>
                </div>
              </ValidatedForm>
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
