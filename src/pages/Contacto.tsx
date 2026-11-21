import { Link } from 'react-router-dom';
import ValidatedForm from '../components/ValidatedForm';
import GoogleMap from '../components/GoogleMap';
import { usePageTitle } from '../hooks/usePageTitle';

export default function Contacto() {
  usePageTitle("Contacto");

  return (
    <>
      <section className="b26">
        <div className="b26-content wancho">
          <div className="b26-left">
            <div className="b26-title">
              Contacto
            </div>
            <h2 className="b26-subtitle">
              Agenda tu asesoría legal e{' '}
              <strong>
                inicia tu trámite notarial
              </strong>
            </h2>
            <div className="b26-info">
              <div className="b26-blockup">
                <div className="b26-box">
                  <span className="b26-icon icon-email"></span>
                  {' '}
                  <div className="b26-texts">
                    <div className="b26-textup">
                      ESCRIBENOs
                    </div>
                    <div className="b26-textdown">
                      <p>
                        <a href="mailto:informes@notariaramos.pe">
                          informes@notariaramos.pe
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="b26-box">
                  <span className="b26-icon icon-phone"></span>
                  {' '}
                  <div className="b26-texts">
                    <div className="b26-textup">
                      LLAMANOS
                    </div>
                    <div className="b26-textdown">
                      <p>
                        <a href="tel:012638686">
                          01 2638686
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="b26-box">
                  <span className="b26-icon icon-location"></span>
                  {' '}
                  <div className="b26-texts">
                    <div className="b26-textup">
                      VISITANOS EN
                    </div>
                    <div className="b26-textdown">
                      <p>
                        Avenida La Marina 1443{' '}
                        <br />
                        San Miguel, Lima - Perú
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="b26-blockdown">
                <div className="b26-schedule">
                  <div className="b26-schedule-title">
                    HOrARIO DE ATENCIÓN
                  </div>
                  <div className="b26-schedule-list">
                    <ul>
                      <li>
                        Lunes a Viernes: 9:00 a.m. a 6:00 p.m.
                      </li>
                      <li>
                        Sábados: 10:00 a.m. a 1:00 p.m.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="b26-links">
                  <div className="b26-links-item">
                    <a href={"https://www.google.com/maps/place/Av.+de+la+Marina+1443,+San+Miguel+15086/@-12.078686,-77.1017188,11z/data=!4m6!3m5!1s0x9105c90ce371107b:0x650a490d0d31a08a!8m2!3d-12.0796827!4d-77.0775145!16s%2Fg%2F11fszsnhpy?authuser=0&entry=ttu"} target="_blank" className="b26-links-btn" rel="noopener noreferrer">
                      Ir con Maps
                      <span className="b26-links-icon icon-maps"></span>
                    </a>
                  </div>
                  <div className="b26-links-item">
                    <a href="https://www.waze.com/es/live-map/directions/san-miguel?to=place.ws.row.11111378.none" target="_blank" className="b26-links-btn" rel="noopener noreferrer">
                      Ir con WAZE
                      <span className="b26-links-icon icon-waze"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="b26-right">
            <div className="b26-description">
              <p>
                Por favor, completa el siguiente formulario para reservar una cita con nosotros. Te contactaremos para confirmar la reservación
              </p>
            </div>
            <div className="b26-form">
              <ValidatedForm>
                <div className="g5-input g5-item-input">
                  <input type="text" id="form_name_contact" name="your-name" className="form-input soloLetters validate[required]" />
                  {' '}
                  <label className="input-label" htmlFor="form_name_contact">
                    <span>
                      Nombres y Apellidos*
                    </span>
                  </label>
                </div>
                <div className="g5-input-two">
                  <div className="g5-input g5-item-input">
                    <input type="text" maxLength={9} id="form_phone" name="your-phone" className="form-input soloNumber validate[required,custom[onlyNumberSp],minSize[9],maxSize[9]]" />
                    {' '}
                    <label className="input-label" htmlFor="form_phone">
                      <span>
                        Telefono*
                      </span>
                    </label>
                  </div>
                  <div className="g5-input g5-item-input">
                    <input type="text" id="form_email" name="your-email" className="form-input validate[required,custom[email]]" />
                    {' '}
                    <label className="input-label" htmlFor="form_email">
                      <span>
                        Correo Electrónico*
                      </span>
                    </label>
                  </div>
                </div>
                <div className="g5-input-two">
                  <div className="g5-select g5-item-input">
                    <select id="form_area" name="your-area" className="form-input validate[required]">
                      <option value=""></option>
                      <option value="Área-1">
                        Área-1
                      </option>
                      <option value="Área-2">
                        Área-2
                      </option>
                      <option value="Área-3">
                        Área-3
                      </option>
                    </select>
                    {' '}
                    <label className="input-label" htmlFor="form_area">
                      <span>
                        Área de interés*
                      </span>
                      <i className="icon-arrow-down"></i>
                    </label>
                  </div>
                  <div className="g5-select g5-item-input">
                    <select id="form_area" name="your-professional" className="form-input validate[required]">
                      <option value=""></option>
                      <option value="Profesional-1">
                        Profesional-1
                      </option>
                      <option value="Profesional-2">
                        Profesional-2
                      </option>
                      <option value="Profesional-3">
                        Profesional-3
                      </option>
                    </select>
                    {' '}
                    <label className="input-label" htmlFor="form_area">
                      <span>
                        Profesional a citar*
                      </span>
                      <i className="icon-arrow-down"></i>
                    </label>
                  </div>
                </div>
                <div className="g5-select g5-item-input">
                  <select id="form_area" name="your-professional" className="form-input validate[required]">
                    <option value=""></option>
                    <option value="Horario-1">
                      Horario-1
                    </option>
                    <option value="Horario-2">
                      Horario-2
                    </option>
                    <option value="Horario-3">
                      Horario-3
                    </option>
                  </select>
                  {' '}
                  <label className="input-label" htmlFor="form_area">
                    <span>
                      Seleccionar horario de interés*
                    </span>
                    <i className="icon-arrow-down"></i>
                  </label>
                </div>
                <div className="g5-item-input g5-textarea">
                  <textarea id="form_message" name="your-message" className="form-input"></textarea>
                  {' '}
                  <label className="input-label" htmlFor="form_message">
                    <span>
                      Mensaje
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
                <div className="b26-button">
                  <button type="submit" className="g-btn-bg bg_blue b26-btn-send">
                    Enviar
                  </button>
                </div>
              </ValidatedForm>
            </div>
          </div>
        </div>
      </section>
      <section className="b27">
        <div className="b27-content wancho">
          <GoogleMap id="map_google" className="b27-map" lat={-12.11193} lng={-76.97606} />
        </div>
      </section>
    </>
  );
}
