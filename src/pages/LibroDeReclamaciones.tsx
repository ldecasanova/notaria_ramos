import { Link } from 'react-router-dom';
import ValidatedForm from '../components/ValidatedForm';
import FileInput from '../components/FileInput';
import { usePageTitle } from '../hooks/usePageTitle';

/** Fecha actual en formato dd/mm/aaaa. */
function formatToday() {
  return new Date().toLocaleDateString('es-PE', { day: '2-digit', month: '2-digit', year: 'numeric' });
}

export default function LibroDeReclamaciones() {
  usePageTitle("Libro de reclamaciones");
  const today = formatToday();

  return (
    <>
      <section className="b47">
        <div className="wancho">
          <div className="b47-libro-top">
            <h3 className="b47-title-libro">
              Libro de Reclamaciones
            </h3>
            <div className="b47-description-libro">
              <p>
                Conforme a lo establecido en el Código de Protección y Defensa del Consumidor, esta institución cuenta con un libro de reclamaciones a su disposición
              </p>
            </div>
          </div>
          <div className="b47-libro-down">
            <div className="b47-libro-form">
              <ValidatedForm id="formulario-reclamos" method="post">
                <div className="b47-date">
                  <div className="b47-date-item date">
                    <p>
                      Fecha:
                    </p>
                    {' '}
                    <span>
                      <input className="b47-current-date" readOnly value={today} />
                    </span>
                  </div>
                  <div className="b47-date-item codigo">
                    <p>
                      Nº 000 000001-201X
                    </p>
                    {' '}
                    <span>
                      Este número se actualizará cuando termine de registrarse
                    </span>
                  </div>
                </div>
                <div className="b47-list-box">
                  <div className="b47-libro-box">
                    <h4 className="b47-subtitle-libro">
                      Antes de empezar, indícanos el lugar en el que se dieron los sucesos del reclamo:
                    </h4>
                    <div className="g5-select g5-item-input">
                      <select id="form-sedes" name="name-sede" className="form-input validate[required]">
                        <option value=""></option>
                        <option value="Establecimiento-1">
                          Establecimiento-1
                        </option>
                        <option value="Establecimiento-2">
                          Establecimiento-2
                        </option>
                      </select>
                      {' '}
                      <label className="input-label" htmlFor="form-sedes">
                        <span>
                          Establecimiento
                        </span>
                        <i className="icon-arrow-down"></i>
                      </label>
                    </div>
                    <div className="b47-nota">
                      <p>
                        Nota: Si la queja o reclamo se relaciona con un proyecto entregado, consignar a la oficina principal.
                      </p>
                    </div>
                  </div>
                  <div className="b47-libro-box">
                    <h5 className="b47-title-box">
                      1. Identificación del consumidor reclamante
                    </h5>
                    <div className="g5-input-two">
                      <div className="g5-input g5-item-input">
                        <input type="text" id="form_nombre" name="your-name" className="validKeypress form-input validate[required] " />
                        {' '}
                        <label className="input-label" htmlFor="form_nombre">
                          <span>
                            Nombres*
                          </span>
                        </label>
                      </div>
                      <div className="g5-input g5-item-input">
                        <input type="text" id="form_apellido" name="your-last-name" className="validKeypress form-input validate[required] " />
                        {' '}
                        <label className="input-label" htmlFor="form_apellido">
                          <span>
                            Apellidos*
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="g5-input-two">
                      <div className="g5-input g5-item-input">
                        <input type="text" id="form_email" name="your-email" className="validate[required,custom[email]] form-input" />
                        {' '}
                        <label htmlFor="form_email">
                          <span>
                            Correo electrónico*
                          </span>
                        </label>
                      </div>
                      <div className="g5-input g5-item-input">
                        <input type="text" maxLength={9} id="form_phone" name="your-phone" className="form-input soloNumber validKeypress validate[required,custom[onlyNumberSp],minSize[9],maxSize[9]]" />
                        {' '}
                        <label className="input-label" htmlFor="form_phone">
                          <span>
                            Teléfono/celular*
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="g5-input-two">
                      <div className="g5-select g5-item-input">
                        <select id="form-documento" name="tipo-documento" className="form-input validate[required]">
                          <option value=""></option>
                          <option value="DNI">
                            DNI
                          </option>
                          <option value="Pasaporte">
                            Pasaporte
                          </option>
                          <option value="C.E.">
                            C.E.
                          </option>
                          <option value="R.U.C.">
                            R.U.C.
                          </option>
                        </select>
                        {' '}
                        <label className="input-label" htmlFor="form-documento">
                          <span>
                            Tipo de documento
                          </span>
                          <i className="icon-arrow-down"></i>
                        </label>
                      </div>
                      <div className="g5-input g5-item-input">
                        <input type="text" id="form_numero" name="nro-documento" className="form-input soloNumber validKeypress validate[required,custom[onlyNumberSp]]" />
                        {' '}
                        <label className="input-label" htmlFor="form_numero">
                          <span>
                            Nº de documento*
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="g5-input-two">
                      <div className="g5-select g5-item-input">
                        <select id="form-departamento" name="departamento" className="form-input validate[required]"></select>
                        {' '}
                        <label className="input-label" htmlFor="form-departamento">
                          <span>
                            Departamento
                          </span>
                          <i className="icon-arrow-down"></i>
                        </label>
                      </div>
                      <div className="g5-select g5-item-input">
                        <select disabled id="form-provincia" name="provincia" className="form-input validate[required]"></select>
                        {' '}
                        <label className="input-label" htmlFor="form-provincia">
                          <span>
                            Provincia
                          </span>
                          <i className="icon-arrow-down"></i>
                        </label>
                      </div>
                    </div>
                    <div className="g5-input-two">
                      <div className="g5-select g5-item-input">
                        <select disabled id="form-distrito" name="distrito" className="form-input validate[required]"></select>
                        {' '}
                        <label className="input-label" htmlFor="form-distrito">
                          <span>
                            Distrito
                          </span>
                          <i className="icon-arrow-down"></i>
                        </label>
                      </div>
                      <div className="g5-input g5-item-input">
                        <input type="text" id="form_direccion" name="address" className="validKeypress form-input validate[required] " />
                        {' '}
                        <label className="input-label" htmlFor="form_direccion">
                          <span>
                            Dirección*
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="g5-input-two">
                      <div className="g5-input g5-item-input">
                        <input type="text" id="form_nombre-tutor" name="name-tutor" className="validKeypress form-input " />
                        {' '}
                        <label className="input-label" htmlFor="form_nombre-tutor">
                          <span>
                            Nombre del Tutor
                          </span>
                        </label>
                      </div>
                      <div className="g5-input g5-item-input">
                        <input type="text" id="form_apellido-tutor" name="apellido-tutor" className="validKeypress form-input" />
                        {' '}
                        <label className="input-label" htmlFor="form_apellido-tutor">
                          <span>
                            Apellidos del Tutor
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="g5-input-two">
                      <div className="g5-select g5-item-input">
                        <select id="form-documento-tutor" name="tipo-documento-tutor" className="form-input">
                          <option value=""></option>
                          <option value="DNI">
                            DNI
                          </option>
                          <option value="Pasaporte">
                            Pasaporte
                          </option>
                          <option value="C.E.">
                            C.E.
                          </option>
                          <option value="R.U.C.">
                            R.U.C.
                          </option>
                        </select>
                        {' '}
                        <label className="input-label" htmlFor="form-documento-tutor">
                          <span>
                            Tipo de documento
                          </span>
                          <i className="icon-arrow-down"></i>
                        </label>
                      </div>
                      <div className="g5-input g5-item-input">
                        <input type="text" id="form_numero-tutor" name="nro-documento-tutor" className="form-input soloNumber" />
                        {' '}
                        <label className="input-label" htmlFor="form_numero-tutor">
                          <span>
                            N° de documento
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="b47-libro-box">
                    <h5 className="b47-title-box">
                      2. Identificación del bien contratado
                    </h5>
                    <div className="b47-list-radios">
                      <div className="g5-input-radio">
                        <input type="radio" value="Producto" defaultChecked name="identificacion-bien-contratado" id="form_detalle-proyecto" />
                        {' '}
                        <label htmlFor="form_detalle-proyecto">
                          Producto
                        </label>
                      </div>
                      <div className="g5-input-radio">
                        <input type="radio" value="Servicio" name="identificacion-bien-contratado" id="form_detalle-servicio" />
                        {' '}
                        <label htmlFor="form_detalle-servicio">
                          Servicio
                        </label>
                      </div>
                    </div>
                    <div className="g5-item-input g5-textarea">
                      <textarea id="form_description" name="descripcion-bien-contratado" className="form-input validate[required]"></textarea>
                      {' '}
                      <label className="input-label" htmlFor="form_description">
                        <span>
                          Descripción*
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className="b47-libro-box">
                    <h5 className="b47-title-box">
                      3. Detalle de la Reclamación y Pedido del Consumidor
                    </h5>
                    <div className="b47-list-radios">
                      <div className="g5-input-radio">
                        <input defaultChecked name="tipo-reclamacion" value="Reclamo" type="radio" id="form_detalle-reclamo" />
                        {' '}
                        <label htmlFor="form_detalle-reclamo">
                          Reclamo
                        </label>
                      </div>
                      <div className="g5-input-radio">
                        <input name="tipo-reclamacion" value="Queja" type="radio" id="form_detalle-queja" />
                        {' '}
                        <label htmlFor="form_detalle-queja">
                          Queja
                        </label>
                      </div>
                    </div>
                    <div className="b47-box-reclamo">
                      <p>
                        <strong>
                          *Reclamo:
                        </strong>
                        {' '}Disconformidad relacionada a los proyectos o servicios
                        <br />
                        <strong>
                          *** Queja:
                        </strong>
                        {' '}Disconformidad no relacionada a los proyectos o servicios; o, malestar o descontento respecto a la atención al público.
                      </p>
                    </div>
                    <div className="g5-item-input g5-textarea">
                      <textarea id="form_detalle" name="detalle-reclamacion" required className="form-input validate[required]"></textarea>
                      {' '}
                      <label className="input-label " htmlFor="form_detalle">
                        <span>
                          Detalle*
                        </span>
                      </label>
                    </div>
                    <div className="g5-item-input g5-textarea">
                      <textarea id="form_pedido" name="pedido-reclamacion" required className="form-input validate[required]"></textarea>
                      {' '}
                      <label className="input-label" htmlFor="form_pedido">
                        <span>
                          Pedido*
                        </span>
                      </label>
                    </div>
                    <FileInput
                      id="file-input"
                      name="file-input"
                      validation="validate[custom[validateMIME[jpg|jpeg|png]]"
                      errorMessage="Debe adjuntar archivo (imágenes JPG, PNG, JPEG)"
                      placeholder="Adjuntar archivo"
                      hint="Adjuntar archivo (PDF, PPTX, WORD o imágenes JPG, PNG)"
                      labelClassName="input-label no-effect"
                    />
                  </div>
                  <div className="b47-libro-box observacion">
                    <h5 className="b47-title-box">
                      4. Observaciones y acciones adoptadas por el proveedor
                    </h5>
                    <div className="b47-libro-observacion">
                      <p>
                        Descripción: “Al ser un reclamo virtual, su caso será derivado al área de atención al cliente, a fin de dar respuesta dentro del plazo legalmente establecido.
                      </p>
                    </div>
                  </div>
                  <div className="b47-libro-box">
                    <h5 className="b47-title-box">
                      5. Autorizo notificación del resultado del reclamo al correo consignado
                    </h5>
                    <div className="b47-list-radios">
                      <div className="g5-input-radio">
                        <input name="autorizo-notificacion-resultado" value="Si" type="radio" defaultChecked id="form_detalle-si" />
                        {' '}
                        <label htmlFor="form_detalle-si">
                          Si
                        </label>
                      </div>
                      <div className="g5-input-radio">
                        <input name="autorizo-notificacion-resultado" value="No" type="radio" id="form_detalle-no" />
                        {' '}
                        <label htmlFor="form_detalle-no">
                          No
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                {' '}
                <span className="g5-required">
                  (*) Campos obligatorios
                </span>
                {' '}
                <div className="b47-libro-formulacion">
                  <p>
                    * La formulación del reclamo no impide acudir a otras vías de solución de controversias ni es requisito previo para interponer una denuncia ante el INDECOPI.
                  </p>
                  <p>
                    * El proveedor deberá dar respuesta al reclamo en un plazo no mayor a treinta (30) días calendario, pudiendo ampliar el plazo hasta por treinta (30) días más, previa comunicación al consumidor.
                  </p>
                </div>
                <div className="g5-terminos">
                  <input type="checkbox" defaultChecked id="form_privacity" className="validate[required]" name="agree-terms-terms" />
                  {' '}
                  <label htmlFor="form_privacity" className="g5-terminos_nota">
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
                <div className="b47-btn">
                  <button type="submit" className="g-btn-bg bg_blue b47-send">
                    Enviar
                  </button>
                </div>
              </ValidatedForm>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
