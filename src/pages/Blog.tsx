import { Link } from 'react-router-dom';
import { usePageTitle } from '../hooks/usePageTitle';

export default function Blog() {
  usePageTitle("Blog");

  return (
    <>
      <section className="arch-banner" style={{ backgroundImage: "url('/static/img/blog-banner.jpg')" }}>
        <div className="wancho">
          <h1 className="arch-banner-title">
            Blog NOTARIA RAMOS
          </h1>
        </div>
      </section>
      <section className="arch-list">
        <div className="wancho">
          <div className="arch-list-left">
            <div className="arch-list-list">
              <div className="arch-list-item-left">
                <Link to="/detalle-blog" className="arch-list-figura">
                  <div className="arch-list-figura-bg" style={{ backgroundImage: "url('/static/img/blog-list-item-1.jpg')" }}></div>
                </Link>
                {' '}
                <div className="arch-list-texto-item">
                  <Link to="/blog" className="arch-list-title">
                    Novedades
                  </Link>
                  {' '}
                  <Link to="/detalle-blog" className="arch-list-sub-title">
                    Desmintiendo mitos legales: Verdades sobre documentos notariales
                  </Link>
                  {' '}
                  <div className="arch-list-description">
                    Descubre la realidad oculta tras mitos comunes relacionados con los documentos....
                  </div>
                </div>
              </div>
              <div className="arch-list-item-left">
                <Link to="/detalle-blog" className="arch-list-figura">
                  <div className="arch-list-figura-bg" style={{ backgroundImage: "url('/static/img/blog-list-item-2.jpg')" }}></div>
                </Link>
                {' '}
                <div className="arch-list-texto-item">
                  <Link to="/blog" className="arch-list-title">
                    Consejos
                  </Link>
                  {' '}
                  <Link to="/detalle-blog" className="arch-list-sub-title">
                    El arte de testar: Consejos clave para considerar en tu testamento
                  </Link>
                  {' '}
                  <div className="arch-list-description">
                    Exploraremos los elementos cruciales para redactar un testamento efectivo y legal....
                  </div>
                </div>
              </div>
              <div className="arch-list-item-left">
                <Link to="/detalle-blog" className="arch-list-figura">
                  <div className="arch-list-figura-bg" style={{ backgroundImage: "url('/static/img/blog-list-item-3.jpg')" }}></div>
                </Link>
                {' '}
                <div className="arch-list-texto-item">
                  <Link to="/blog" className="arch-list-title">
                    Legalidad
                  </Link>
                  {' '}
                  <Link to="/detalle-blog" className="arch-list-sub-title">
                    Poderes notariales: importancia y uso eficaz en tus trámites
                  </Link>
                  {' '}
                  <div className="arch-list-description">
                    Aprende cómo utilizar estos poderes de manera eficaz para facilitar trámites.....
                  </div>
                </div>
              </div>
              <div className="arch-list-item-left">
                <Link to="/detalle-blog" className="arch-list-figura">
                  <div className="arch-list-figura-bg" style={{ backgroundImage: "url('/static/img/blog-list-item-4.jpg')" }}></div>
                </Link>
                {' '}
                <div className="arch-list-texto-item">
                  <Link to="/blog" className="arch-list-title">
                    Editorial
                  </Link>
                  {' '}
                  <Link to="/detalle-blog" className="arch-list-sub-title">
                    Armonía legal: soluciones a disputas sin litigio en notaría
                  </Link>
                  {' '}
                  <div className="arch-list-description">
                    Exploraremos estrategias y enfoques legales para resolver disputas sin necesidad de...
                  </div>
                </div>
              </div>
              <div className="arch-list-item-left">
                <Link to="/detalle-blog" className="arch-list-figura">
                  <div className="arch-list-figura-bg" style={{ backgroundImage: "url('/static/img/blog-list-item-5.jpg')" }}></div>
                </Link>
                {' '}
                <div className="arch-list-texto-item">
                  <Link to="/blog" className="arch-list-title">
                    Consejos
                  </Link>
                  {' '}
                  <Link to="/detalle-blog" className="arch-list-sub-title">
                    Claves para elegir el mejor notario: asesoramiento legal adecuado
                  </Link>
                  {' '}
                  <div className="arch-list-description">
                    Descubre aspectos clave a considerar al seleccionar un notario para asuntos legales
                  </div>
                </div>
              </div>
              <div className="arch-list-item-left">
                <Link to="/detalle-blog" className="arch-list-figura">
                  <div className="arch-list-figura-bg" style={{ backgroundImage: "url('/static/img/blog-list-item-6.jpg')" }}></div>
                </Link>
                {' '}
                <div className="arch-list-texto-item">
                  <Link to="/blog" className="arch-list-title">
                    Consejos
                  </Link>
                  {' '}
                  <Link to="/detalle-blog" className="arch-list-sub-title">
                    La importancia de consultar a un notario antes de firmar
                  </Link>
                  {' '}
                  <div className="arch-list-description">
                    Aprende la importancia de buscar orientación notarial antes de firmar documentos legales..
                  </div>
                </div>
              </div>
              <div className="arch-list-item-left">
                <Link to="/detalle-blog" className="arch-list-figura">
                  <div className="arch-list-figura-bg" style={{ backgroundImage: "url('/static/img/blog-list-item-7.jpg')" }}></div>
                </Link>
                {' '}
                <div className="arch-list-texto-item">
                  <Link to="/blog" className="arch-list-title">
                    Legalidad
                  </Link>
                  {' '}
                  <Link to="/detalle-blog" className="arch-list-sub-title">
                    Entendiendo legalizaciones de documentos: tu guía completa
                  </Link>
                  {' '}
                  <div className="arch-list-description">
                    Obtén una guía detallada sobre el proceso de legalización de documentos. Los pasos...
                  </div>
                </div>
              </div>
              <div className="arch-list-item-left">
                <Link to="/detalle-blog" className="arch-list-figura">
                  <div className="arch-list-figura-bg" style={{ backgroundImage: "url('/static/img/blog-list-item-8.jpg')" }}></div>
                </Link>
                {' '}
                <div className="arch-list-texto-item">
                  <Link to="/blog" className="arch-list-title">
                    Editorial
                  </Link>
                  {' '}
                  <Link to="/detalle-blog" className="arch-list-sub-title">
                    Casos curiosos: historias reales de transferencias vehiculares
                  </Link>
                  {' '}
                  <div className="arch-list-description">
                    Descubre la realidad oculta tras mitos comunes relacionados con los documentos....
                  </div>
                </div>
              </div>
              <div className="arch-list-item-left">
                <Link to="/detalle-blog" className="arch-list-figura">
                  <div className="arch-list-figura-bg" style={{ backgroundImage: "url('/static/img/blog-list-item-9.jpg')" }}></div>
                </Link>
                {' '}
                <div className="arch-list-texto-item">
                  <Link to="/blog" className="arch-list-title">
                    Novedades
                  </Link>
                  {' '}
                  <Link to="/detalle-blog" className="arch-list-sub-title">
                    Guía esencial para escribir la escritura pública perfecta
                  </Link>
                  {' '}
                  <div className="arch-list-description">
                    Conoce los aspectos y puntos claves para una excelente redacción en escrituras....
                  </div>
                </div>
              </div>
              <div className="arch-list-item-left">
                <Link to="/detalle-blog" className="arch-list-figura">
                  <div className="arch-list-figura-bg" style={{ backgroundImage: "url('/static/img/blog-list-item-10.jpg')" }}></div>
                </Link>
                {' '}
                <div className="arch-list-texto-item">
                  <Link to="/blog" className="arch-list-title">
                    Consejos
                  </Link>
                  {' '}
                  <Link to="/detalle-blog" className="arch-list-sub-title">
                    Secretos legales: Poderes notariales y su Impacto en Transacciones
                  </Link>
                  {' '}
                  <div className="arch-list-description">
                    Adentrate en el mundo notarial conociendo los secretos del rubro y como aplicarlos en...
                  </div>
                </div>
              </div>
            </div>
            <div className="arch-list-paginador">
              {/* pagination */}
              <ul className="page-numbers">
                <li>
                  <a className="prev page-numbers" href="#">
                    <i className="icon-arrow-left"></i>
                  </a>
                </li>
                <li>
                  <span className="page-numbers current">
                    1
                  </span>
                </li>
                <li>
                  <a className="page-numbers" href="#">
                    2
                  </a>
                </li>
                <li>
                  <a className="next page-numbers" href="#">
                    <i className="icon-arrow-right"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="arch-list-right">
            <div className="arch-list-categoria">
              Categorías
            </div>
            <div className="arch-list-list-categoria">
              <Link to="/blog" className="arch-list-item-categoria">
                Novedades
              </Link>
              {' '}
              <Link to="/blog" className="arch-list-item-categoria">
                Consejos
              </Link>
              {' '}
              <Link to="/blog" className="arch-list-item-categoria">
                Legalidad
              </Link>
              {' '}
              <Link to="/blog" className="arch-list-item-categoria">
                Editorial
              </Link>
            </div>
            <div className="arch-list-categoria last-child">
              Post Recientes
            </div>
            <div className="arch-list-list-right-reciente">
              <Link to="/detalle-blog" className="arch-list-item-right-reciente">
                <div className="arch-list-bg" style={{ backgroundImage: "url('/static/img/blog-list-item-1.jpg')" }}></div>
                <div className="arch-list-text-banner">
                  <div className="arch-list-description-banner">
                    <p>
                      Desmintiendo mitos legales: Verdades sobre...
                    </p>
                    {' '}
                    <span>
                      21 de febrero de 2024
                    </span>
                  </div>
                </div>
              </Link>
              {' '}
              <Link to="/detalle-blog" className="arch-list-item-right-reciente">
                <div className="arch-list-bg" style={{ backgroundImage: "url('/static/img/blog-list-item-2.jpg')" }}></div>
                <div className="arch-list-text-banner">
                  <div className="arch-list-description-banner">
                    <p>
                      Desmintiendo mitos legales: Verdades sobre...
                    </p>
                    {' '}
                    <span>
                      21 de febrero de 2024
                    </span>
                  </div>
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
