import { Link } from 'react-router-dom';
import { openSharePopup } from '../lib/dom';
import { useRef } from 'react';
import Carousel, { type CarouselHandle, type CarouselSettings } from '../components/Carousel';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { usePageTitle } from '../hooks/usePageTitle';

type Post = { category: string; title: string; excerpt: string; image: string };

const RELATED_POSTS: Post[] = [
  {
    category: 'Novedades',
    title: 'Desmintiendo mitos legales: Verdades sobre documentos notariales',
    excerpt: 'Descubre la realidad oculta tras mitos comunes relacionados con los documentos....',
    image: '/static/img/blog-list-item-1.jpg',
  },
  {
    category: 'Consejos',
    title: 'El arte de testar: Consejos clave para considerar en tu testamento',
    excerpt: 'Exploraremos los elementos cruciales para redactar un testamento efectivo y legal....',
    image: '/static/img/blog-list-item-2.jpg',
  },
  {
    category: 'Productividad',
    title: 'Poderes notariales: importancia y uso eficaz en tus trámites',
    excerpt: 'Aprende cómo utilizar estos poderes de manera eficaz para facilitar trámites.....',
    image: '/static/img/blog-list-item-3.jpg',
  },
];

// Antes era Owl Carousel; se mantienen sus clases (.owl-nav, .owl-prev, .owl-next) para reutilizar el CSS.
const RELATED_SETTINGS: CarouselSettings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    { breakpoint: 1000, settings: { slidesToShow: 2 } },
    { breakpoint: 600, settings: { slidesToShow: 1 } },
  ],
};

function PostCard({ post }: { post: Post }) {
  return (
    <div className="arch-list-item-left">
      <Link to="/detalle-blog" className="arch-list-figura">
        <div className="arch-list-figura-bg" style={{ backgroundImage: `url('${post.image}')` }}></div>
      </Link>
      <div className="arch-list-texto-item">
        <Link to="/blog" className="arch-list-title">{post.category}</Link>
        <Link to="/detalle-blog" className="arch-list-sub-title">{post.title}</Link>
        <div className="arch-list-description">{post.excerpt}</div>
      </div>
    </div>
  );
}

/** En escritorio con menos de 4 posts se muestran en grilla; si no, en carrusel. */
function RelatedPosts({ posts }: { posts: Post[] }) {
  const isMobile = useMediaQuery('(max-width: 1000px)');
  const sliderRef = useRef<CarouselHandle>(null);

  if (!isMobile && posts.length < 4) {
    return (
      <div className="sng-slider desktop">
        {posts.map((post) => <PostCard key={post.title} post={post} />)}
      </div>
    );
  }

  return (
    <div className="sng-slider owl-carousel">
      <Carousel ref={sliderRef} settings={RELATED_SETTINGS}>
        {posts.map((post) => (
          <div key={post.title} className="owl-item" style={{ padding: '5px 10px 30px' }}>
            <PostCard post={post} />
          </div>
        ))}
      </Carousel>
      <div className="owl-nav">
        <button type="button" className="owl-prev" aria-label="Anterior" onClick={() => sliderRef.current?.slickPrev()}>
          <span className="icon-arrow-left"></span>
        </button>
        <button type="button" className="owl-next" aria-label="Siguiente" onClick={() => sliderRef.current?.slickNext()}>
          <span className="icon-arrow-right"></span>
        </button>
      </div>
    </div>
  );
}

export default function DetalleBlog() {
  usePageTitle("Blog");

  return (
    <>
      <section className="sng-banner" style={{ backgroundImage: "url('/static/img/detalle-blog-banner.jpg')" }}>
        <div className="wancho">
          <div className="sng-banner-current-category">
            <span>
              Novedades
            </span>
          </div>
          <h1 className="sng-banner-title">
            Armonía legal: soluciones a disputas sin litigio en notaría
          </h1>
        </div>
      </section>
      <section className="sng-cnt">
        <div className="wancho">
          <div className="sng-cnt-left">
            <div className="sng-cnt-description">
              <p>
                La armonía legal representa un enfoque pacífico y eficiente para resolver disputas legales sin recurrir a procesos judiciales. En esta entrada, exploraremos cómo la notaría ofrece soluciones y mediación para resolver conflictos, fomentando acuerdos amistosos y evitando litigios prolongados.
              </p>
              <h6>
                1. Papel de la notaría en resolución de disputas
              </h6>
              <p>
                La notaría desempeña un papel fundamental en la resolución de disputas sin litigio. Analizaremos cómo este entorno ofrece un espacio neutral para el diálogo, la mediación y la creación de acuerdos amigables, permitiendo la resolución de conflictos de manera más eficiente.
              </p>
              <h6>
                2. Aprendan algo nuevo juntos
              </h6>
              <p>
                Con los colegios cerrados, la mayoría de niños están recibiendo una combinación de educación en el hogar y aprendizaje virtual. Pero, al estar en casa, los niños tienen la oportunidad de aprender otro tipo de cosas aparte de inglés, matemáticas y ciencias.
              </p>
              <p>
                Habla con tu hijo sobre sus intereses y ve si hay algo que puedas enseñarle o, mejor aún, algo que puedan aprender juntos. Por ejemplo, descarga Duolingo para desafiarse mientras aprenden un nuevo idioma, sigan una clase de cocina en línea o escojan un nuevo pasatiempo juntos.
              </p>
              <h6>
                3. Beneficios de soluciones amigables
              </h6>
              <p>
                Examinaremos los beneficios clave de optar por soluciones amigables en disputas legales. Desde la reducción de costos hasta la preservación de relaciones, estas soluciones ofrecen un enfoque menos confrontativo y más satisfactorio para ambas partes involucradas
              </p>
              <h6>
                4. Métodos y herramientas para la resolución pacífica
              </h6>
              <p>
                Exploraremos diferentes métodos y herramientas utilizados en la notaría para lograr la resolución pacífica de disputas. Desde la mediación hasta la negociación, analizaremos cómo se aplican estos enfoques para llegar a acuerdos satisfactorios.
              </p>
              <h6>
                5. Ejemplos reales de resolución sin litigio
              </h6>
              <p>
                Presentaremos ejemplos reales donde la notaría ha facilitado la resolución de disputas sin litigio. Estos casos ilustrativos ofrecen una visión práctica de cómo se logra la armonía legal y la resolución de conflictos de manera pacífica.
              </p>
              <h6>
                6. Importancia de profesionales notariales en estas soluciones
              </h6>
              <p>
                Los profesionales notariales desempeñan un papel crucial en la resolución de disputas sin litigio, actuando como mediadores imparciales y facilitadores de acuerdos. Su imparcialidad y competencia legal les permiten guiar a las partes en conflicto hacia soluciones amistosas y duraderas.
              </p>
              <p>
                Estos expertos están entrenados en técnicas de negociación y mediación, habilidades esenciales para abordar conflictos de manera objetiva y equitativa. Su neutralidad garantiza un espacio imparcial donde ambas partes pueden exponer sus argumentos, encontrar puntos comunes y trabajar hacia acuerdos que satisfagan sus intereses.
              </p>
            </div>
            <div className="sng-cnt-redes">
              <div className="sng-cnt-text-red">
                Compartir
              </div>
              {' '}
              <a href={"https://www.facebook.com/sharer/sharer.php?u=https://notariaramos.com/blog/novedades/&t=Armonía Legal: Soluciones a disputas sin litigio en notaría"} className="sng-cnt-item-red icon-facebook-2" onClick={openSharePopup}></a>
            </div>
          </div>
          <div className="sng-cnt-right">
            <div className="arch-list-categoria">
              Post Recientes
            </div>
            <div className="arch-list-list-right-reciente">
              <Link to="/detalle-blog" className="arch-list-item-right-reciente">
                <div className="arch-list-bg" style={{ backgroundImage: "url('/static/img/blog-list-item-1.jpg')" }}></div>
                <div className="arch-list-text-banner">
                  <div className="arch-list-description-banner">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    {' '}
                    <span>
                      17 de Noviembre
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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    {' '}
                    <span>
                      17 de Noviembre
                    </span>
                  </div>
                </div>
              </Link>
              {' '}
              <Link to="/detalle-blog" className="arch-list-item-right-reciente">
                <div className="arch-list-bg" style={{ backgroundImage: "url('/static/img/blog-list-item-3.jpg')" }}></div>
                <div className="arch-list-text-banner">
                  <div className="arch-list-description-banner">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    {' '}
                    <span>
                      17 de Noviembre
                    </span>
                  </div>
                </div>
              </Link>
              {' '}
              <Link to="/detalle-blog" className="arch-list-item-right-reciente">
                <div className="arch-list-bg" style={{ backgroundImage: "url('/static/img/blog-list-item-4.jpg')" }}></div>
                <div className="arch-list-text-banner">
                  <div className="arch-list-description-banner">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    {' '}
                    <span>
                      17 de Noviembre
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="sng">
        <div className="wancho">
          <h3 className="sng-title">
            Noticias Relacionados
          </h3>
          <div className="sng-list">
            <RelatedPosts posts={RELATED_POSTS} />
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
