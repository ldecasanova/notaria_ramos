import { Link } from 'react-router-dom';
import { useRef } from 'react';
import Carousel, { type CarouselHandle, type CarouselSettings } from '../components/Carousel';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
import { usePageTitle } from '../hooks/usePageTitle';

const B10_SETTINGS: CarouselSettings = {
  infinite: true,
  autoplay: true,
  autoplaySpeed: 500,
  speed: 1000,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 4 } },
    { breakpoint: 960, settings: { slidesToShow: 3 } },
    { breakpoint: 480, settings: { slidesToShow: 2 } },
  ],
};

const B12_SETTINGS: CarouselSettings = {
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Nosotros() {
  usePageTitle("Nosotros");
  const b10Ref = useRef<CarouselHandle>(null);
  const b12Ref = useRef<CarouselHandle>(null);
  const timelineRef = useRef<HTMLElement>(null);
  useRevealOnScroll(timelineRef, '.b11-animation');

  return (
    <>
      <section className="b9">
        <div className="b9-content wancho">
          <figure className="b9-image" style={{ backgroundImage: "url('/static/img/b9-banner.png')" }}></figure>
          <h1 className="b9-title">
            Seguridad jurídica, innovación y calidad desde 1999
          </h1>
        </div>
      </section>
      <section className="b10">
        <div className="b10-content wancho">
          <div className="b10-slider">
            <Carousel ref={b10Ref} className="b10-wrap b10pitcherSlick" settings={B10_SETTINGS}>
              <li className="b10-item">
                <figure className="b10-image">
                  <img src="/static/img/b10-logo-1.png" />
                </figure>
              </li>
              <li className="b10-item">
                <figure className="b10-image">
                  <img src="/static/img/b10-logo-2.png" />
                </figure>
              </li>
              <li className="b10-item">
                <figure className="b10-image">
                  <img src="/static/img/b10-logo-3.png" />
                </figure>
              </li>
              <li className="b10-item">
                <figure className="b10-image">
                  <img src="/static/img/b10-logo-4.png" />
                </figure>
              </li>
              <li className="b10-item">
                <figure className="b10-image">
                  <img src="/static/img/b10-logo-5.png" />
                </figure>
              </li>
              <li className="b10-item">
                <figure className="b10-image">
                  <img src="/static/img/b10-logo-6.png" />
                </figure>
              </li>
            </Carousel>
          </div>
        </div>
      </section>
      <section className="b11" ref={timelineRef}>
        <div className="b11-content wancho">
          <div className="b11-head">
            <div className="b11-title">
              Nuestra Historia
            </div>
            <h2 className="b11-subtitle">
              El pasado que moldea nuestro presente
            </h2>
          </div>
          <div className="b11-block">
            <div className="b11-item b11-animation">
              <div className="b11-left">
                <figure className="b11-image">
                  <img src="/static/img/b11-item.jpg" />
                </figure>
              </div>
              <div className="b11-right">
                <div className="b11-boxleft">
                  <div className="b11-year">
                    1999
                  </div>
                </div>
                <div className="b11-boxright">
                  <div className="b11-textup">
                    Fundación en 1999
                  </div>
                  <div className="b11-textdown">
                    <p>
                      Desde 1999, fundamos Notaria Ramos, arraigados en el compromiso notarial, brindando confianza y servicios legales sólidos
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="b11-item b11-animation">
              <div className="b11-left">
                <figure className="b11-image">
                  <img src="/static/img/b11-item.jpg" />
                </figure>
              </div>
              <div className="b11-right">
                <div className="b11-boxleft">
                  <div className="b11-year">
                    2002
                  </div>
                </div>
                <div className="b11-boxright">
                  <div className="b11-textup">
                    Innovación legal eficiente
                  </div>
                  <div className="b11-textdown">
                    <p>
                      Innovamos constantemente, priorizando la eficiencia y el respeto a las normativas legales, adaptándonos a las necesidades cambiantes
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="b11-item b11-animation">
              <div className="b11-left">
                <figure className="b11-image">
                  <img src="/static/img/b11-item.jpg" />
                </figure>
              </div>
              <div className="b11-right">
                <div className="b11-boxleft">
                  <div className="b11-year">
                    2007
                  </div>
                </div>
                <div className="b11-boxright">
                  <div className="b11-textup">
                    Adaptación proactiva
                  </div>
                  <div className="b11-textdown">
                    <p>
                      A lo largo del tiempo, evolucionamos continuamente, manteniendo un enfoque proactivo en nuestra adaptación a un entorno legal dinámico
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="b11-item b11-animation">
              <div className="b11-left">
                <figure className="b11-image">
                  <img src="/static/img/b11-item.jpg" />
                </figure>
              </div>
              <div className="b11-right">
                <div className="b11-boxleft">
                  <div className="b11-year">
                    2012
                  </div>
                </div>
                <div className="b11-boxright">
                  <div className="b11-textup">
                    Legado Notarial excepcional
                  </div>
                  <div className="b11-textdown">
                    <p>
                      Nuestro legado se basa en una trayectoria de confianza, seguridad y un servicio excepcional, manteniendo nuestros valores inquebrantables
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="b12">
        <div className="b12-content wancho">
          <div className="b12-head">
            <h2 className="b12-title-up">
              Ética, Confianza y Seguridad Jurídica: Nuestros pilares en la visión institucional
            </h2>
            <div className="b12-controls">
              <span className="b12-arrow b12-prev icon-arrow-left" onClick={() => b12Ref.current?.slickPrev()}></span>
              {' '}
              <span className="b12-arrow b12-next icon-arrow-right" onClick={() => b12Ref.current?.slickNext()}></span>
            </div>
          </div>
          <div className="b12-slider">
            <Carousel ref={b12Ref} className="b12-wrap b12pitcherSlick" settings={B12_SETTINGS}>
              <li className="b12-item">
                <div className="b12-card">
                  <div className="b12-left">
                    <figure className="b12-icon">
                      <img src="/static/img/b12-icon-1.png" />
                    </figure>
                    <div className="b12-title">
                      Nuestra Esencia
                    </div>
                    <div className="b12-subtitle">
                      Excelencia orientada a la satisfacción del cliente
                    </div>
                    <div className="b12-description">
                      <p>
                        Nuestro objetivo es lograr siempre la satisfacción de nuestros usuarios para lo cual nos apoyamos en soluciones integrales que permitan cubrir las necesidades actuales siempre bajo el marco legal y principios éticos que nos caracterizan.
                      </p>
                    </div>
                  </div>
                  <div className="b12-right">
                    <figure className="b12-image">
                      <img src="/static/img/b12-item.jpg" />
                    </figure>
                  </div>
                </div>
              </li>
              <li className="b12-item">
                <div className="b12-card">
                  <div className="b12-left">
                    <figure className="b12-icon">
                      <img src="/static/img/b12-icon-2.png" />
                    </figure>
                    <div className="b12-title">
                      Visión
                    </div>
                    <div className="b12-subtitle">
                      Nuestro camino hacia la distinción
                    </div>
                    <div className="b12-description">
                      <p>
                        Buscamos la plena satisfacción de usuarios con soluciones integrales, respetando principios éticos y legales. Nos destacamos por superar expectativas con agilidad, guiados por la transparencia. Como socios estratégicos, ofrecemos servicios de calidad.
                      </p>
                    </div>
                  </div>
                  <div className="b12-right">
                    <figure className="b12-image">
                      <img src="/static/img/b12-item.jpg" />
                    </figure>
                  </div>
                </div>
              </li>
            </Carousel>
          </div>
        </div>
      </section>
      <section className="b13">
        <div className="b13-content wancho">
          <div className="b13-head">
            <div className="b13-title">
              Reconocimientos
            </div>
            <h2 className="b13-subtitle">
              Distinciones que avalan nuestro esfuerzo
            </h2>
          </div>
          <div className="b13-block">
            <div className="b13-item">
              <figure className="b13-icon">
                <img src="/static/img/b13-icon.png" />
              </figure>
              <div className="b13-textup">
                Certificación ISO 9001
              </div>
              <div className="b13-textdown">
                <p>
                  Demuestra la implementación de procesos eficientes, la mejora continua y el enfoque en la satisfacción del cliente, asegurando un servicio notarial de alta calidad
                </p>
              </div>
            </div>
            <div className="b13-item">
              <figure className="b13-icon">
                <img src="/static/img/b13-icon.png" />
              </figure>
              <div className="b13-textup">
                Premio Excelencia
              </div>
              <div className="b13-textdown">
                <p>
                  Reconocimiento a la distinción en sus servicios, destacando la excelencia, eficacia y la satisfacción del cliente como pilares fundamentales en su práctica notarial.
                </p>
              </div>
            </div>
            <div className="b13-item">
              <figure className="b13-icon">
                <img src="/static/img/b13-icon.png" />
              </figure>
              <div className="b13-textup">
                Reconocimiento Ético:
              </div>
              <div className="b13-textdown">
                <p>
                  Resalta las prácticas responsables y éticas evidenciando nuestro compromiso con la integridad, la transparencia y el cumplimiento de altos estándares éticos
                </p>
              </div>
            </div>
            <div className="b13-item">
              <figure className="b13-icon">
                <img src="/static/img/b13-icon.png" />
              </figure>
              <div className="b13-textup">
                Mencion en America TV
              </div>
              <div className="b13-textdown">
                <p>
                  Esta mención en los medios reconoce logros y contribuciones destacadas de la notaría, brindando visibilidad a su labor sobresaliente y aportando valor a la comunidad.
                </p>
              </div>
            </div>
            <div className="b13-item">
              <figure className="b13-icon">
                <img src="/static/img/b13-icon.png" />
              </figure>
              <div className="b13-textup">
                Distinción Legal: Conformidad normativa
              </div>
              <div className="b13-textdown">
                <p>
                  Es un reconocimiento por la observancia y el cumplimiento de las regulaciones y normativas legales vigentes en la práctica notarial, garantizando la seguridad jurídica.
                </p>
              </div>
            </div>
            <div className="b13-item">
              <figure className="b13-icon">
                <img src="/static/img/b13-icon.png" />
              </figure>
              <div className="b13-textup">
                Premio Innovación{' '}
                <br />
                Notarial
              </div>
              <div className="b13-textdown">
                <p>
                  Otorgado a la notaría por su capacidad innovadora en la implementación de soluciones novedosas y eficaces en el ámbito notarial, destacando la creatividad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="b8">
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
