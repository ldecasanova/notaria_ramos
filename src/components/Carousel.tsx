import { forwardRef, type ReactNode } from 'react';
import SlickImport, { type Settings } from 'react-slick';

// react-slick se publica como CommonJS; según el bundler el default llega envuelto.
const Slider = ((SlickImport as unknown as { default?: typeof SlickImport }).default ?? SlickImport);

export type CarouselHandle = InstanceType<typeof SlickImport>;
export type CarouselSettings = Settings;

type Props = { className?: string; settings: Settings; children: ReactNode };

/**
 * Carrusel basado en Slick (mismo plugin y mismas clases CSS que el sitio original).
 * Las flechas del diseño están fuera del carrusel, así que se usan con
 * `ref.current?.slickPrev()` / `slickNext()`.
 */
const Carousel = forwardRef<CarouselHandle, Props>(function Carousel({ className, settings, children }, ref) {
  return (
    <Slider ref={ref} className={className} arrows={false} {...settings}>
      {children}
    </Slider>
  );
});

export default Carousel;
