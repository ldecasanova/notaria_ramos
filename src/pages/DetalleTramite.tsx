import { Link } from 'react-router-dom';
import ValidatedForm from '../components/ValidatedForm';
import { useRef, type MouseEvent } from 'react';
import FileInput from '../components/FileInput';
import { usePageTitle } from '../hooks/usePageTitle';

export default function DetalleTramite() {
  usePageTitle("Trámite");
  const formSectionRef = useRef<HTMLElement>(null);

  // "Refrescar Campos": limpia los campos marcados con .field-refresh y baja los labels.
  const refreshFields = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const section = formSectionRef.current;
    if (!section) return;
    section
      .querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>('.field-refresh')
      .forEach((field) => { field.value = ''; });
    section.querySelectorAll('.input-label').forEach((label) => label.classList.remove('fijar'));
  };

  return (
    <>
      <section className="b24">
        <div className="b24-content wancho">
          <div className="b24-title">
            Tramites en Linea
          </div>
          <h2 className="b24-subtitle">
            Escrituras Públicas
          </h2>
        </div>
      </section>
      <section className="b25" ref={formSectionRef}>
        <div className="b25-content wancho">
          <div className="b25-refresh">
            <a href="#" className="b25-refresh-btn jsRefreshFields" onClick={refreshFields}>
              Refrescar Campos
            </a>
          </div>
          <div className="b25-form">
            <ValidatedForm>
              <div className="b25-head">
                <div className="b25-head-item">
                  <div className="g5-select g5-item-input">
                    <select id="form_type_act" name="your-type-act" className="form-input field-refresh">
                      <option value=""></option>
                      <option value="Acto-1">
                        Acto-1
                      </option>
                      <option value="Acto-2">
                        Acto-2
                      </option>
                      <option value="Acto-3">
                        Acto-3
                      </option>
                    </select>
                    {' '}
                    <label className="input-label" htmlFor="form_type_act">
                      <span>
                        Tipo de Acto
                      </span>
                      <i className="icon-arrow-down"></i>
                    </label>
                  </div>
                </div>
                <div className="b25-head-item">
                  <div className="g5-input g5-item-input">
                    <input type="text" id="form_name_contact" name="your-name-contact" className="form-input soloLetters validate[required] field-refresh" />
                    {' '}
                    <label className="input-label" htmlFor="form_name_contact">
                      <span>
                        Nombre a contactar*
                      </span>
                    </label>
                  </div>
                </div>
                <div className="b25-head-item">
                  <div className="g5-input g5-item-input">
                    <input type="text" maxLength={9} id="form_phone" name="your-phone" className="form-input soloNumber validate[required,custom[onlyNumberSp],minSize[9],maxSize[9]] field-refresh" />
                    {' '}
                    <label className="input-label" htmlFor="form_phone">
                      <span>
                        Nª de celular*
                      </span>
                    </label>
                  </div>
                </div>
                <div className="b25-head-item">
                  <div className="g5-input g5-item-input">
                    <input type="text" id="form_email" name="your-email" className="form-input validate[required,custom[email]] field-refresh" />
                    {' '}
                    <label className="input-label" htmlFor="form_email">
                      <span>
                        Correo Electrónico*
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="b25-contractors">
                <div className="b25-title">
                  Contratantes*
                </div>
                <div className="b25-container">
                  <div className="b25-itemblock">
                    <div className="b25-itembox">
                      <div className="g5-select g5-item-input">
                        <select id="form_type_condition_1" name="your-type-condition" className="form-input validate[required] field-refresh">
                          <option value=""></option>
                          <option value="Condición-1">
                            Condición-1
                          </option>
                          <option value="Condición-2">
                            Condición-2
                          </option>
                          <option value="Condición-3">
                            Condición-3
                          </option>
                        </select>
                        {' '}
                        <label className="input-label" htmlFor="form_type_condition_1">
                          <span>
                            Tipo de Condición*
                          </span>
                          <i className="icon-arrow-down"></i>
                        </label>
                      </div>
                    </div>
                    <div className="b25-itembox">
                      <div className="g5-select g5-item-input">
                        <select id="form_type_document_1" name="your-type-document" className="form-input validate[required] field-refresh">
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
                        <label className="input-label" htmlFor="form_type_document_1">
                          <span>
                            Tipo de documento*
                          </span>
                          <i className="icon-arrow-down"></i>
                        </label>
                      </div>
                    </div>
                    <div className="b25-itembox">
                      <div className="g5-input g5-item-input">
                        <input type="text" id="form_number_document_1" name="your-number-document" className="form-input soloNumber field-refresh" />
                        {' '}
                        <label className="input-label" htmlFor="form_number_document_1">
                          <span>
                            Nª de Documento
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="b25-itembox">
                      <div className="g5-input g5-item-input">
                        <input type="text" id="form_paternal_1" name="your-paternal" className="form-input soloLetters validate[required] field-refresh" />
                        {' '}
                        <label className="input-label" htmlFor="form_paternal_1">
                          <span>
                            Apellido Paterno*
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="b25-itembox">
                      <div className="g5-input g5-item-input">
                        <input type="text" id="form_maternal_1" name="your-paternal" className="form-input soloLetters validate[required] field-refresh" />
                        {' '}
                        <label className="input-label" htmlFor="form_maternal_1">
                          <span>
                            Apellido Materno*
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="b25-itembox">
                      <div className="g5-input g5-item-input">
                        <input type="text" id="form_names_1" name="your-names" className="form-input soloLetters field-refresh" />
                        {' '}
                        <label className="input-label" htmlFor="form_names_1">
                          <span>
                            Nombres
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="b25-itembox">
                      <div className="g5-select g5-item-input">
                        <select id="form_civil_1" name="your-civil" className="form-input field-refresh">
                          <option value=""></option>
                          <option value="Soltero(a)">
                            Soltero(a)
                          </option>
                          <option value="Casado(a)">
                            Casado(a)
                          </option>
                          <option value="Otros">
                            Otros
                          </option>
                        </select>
                        {' '}
                        <label className="input-label" htmlFor="form_civil_1">
                          <span>
                            Estado Civil
                          </span>
                          <i className="icon-arrow-down"></i>
                        </label>
                      </div>
                    </div>
                    <div className="b25-itembox">
                      <div className="g5-input g5-item-input">
                        <input type="text" id="form_address_1" name="your-address" className="form-input validate[required] field-refresh" />
                        {' '}
                        <label className="input-label" htmlFor="form_address_1">
                          <span>
                            Domicilio*
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="b25-itembox">
                      <div className="g5-select g5-item-input">
                        <select id="form_occupation_1" name="your-occupation" className="form-input field-refresh">
                          <option value=""></option>
                          <option value="Ocupación-1">
                            Ocupación-1
                          </option>
                          <option value="Ocupación-2">
                            Ocupación-2
                          </option>
                          <option value="Ocupación-3">
                            Ocupación-3
                          </option>
                        </select>
                        {' '}
                        <label className="input-label" htmlFor="form_occupation_1">
                          <span>
                            Ocupación
                          </span>
                          <i className="icon-arrow-down"></i>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="b25-add">
                  <a href="#" className="g-btn-bg bg_blue">
                    Agregar
                  </a>
                </div>
              </div>
              <div className="b25-comments">
                <div className="b25-subtitle">
                  Comentarios e indicaciones adicionales
                </div>
                <div className="b25-description">
                  <p>
                    Por favor indique el detalle de su trámite o algún dato que tenga que tener en cuenta nuestros abogados como número de Kardex , Operación, Bien Mueble, Bien Inmueble, entre otros.
                  </p>
                </div>
                <div className="b25-field">
                  <div className="g5-item-input g5-textarea">
                    <textarea id="form_message" name="your-message" className="form-input"></textarea>
                    {/* <label class="input-label" for="form_message"><span>Mensaje</span></label> */}
                  </div>
                </div>
              </div>
              <div className="b25-file">
                <FileInput
                  id="file-input"
                  name="file-input"
                  validation="validate[custom[validateMIME[jpg|jpeg|png]]"
                  errorMessage="Debe adjuntar archivo (imágenes JPG, PNG, JPEG)"
                  placeholder="Adjuntar voucher (Opcional)"
                  hint="Adjuntar archivo (PDF, PPTX, WORD o imágenes JPG, PNG)"
                />
              </div>
              <div className="b25-down">
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
                <div className="b25-button">
                  <button type="submit" className="g-btn-bg bg_blue b25-btn-send">
                    Enviar
                  </button>
                </div>
              </div>
            </ValidatedForm>
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
