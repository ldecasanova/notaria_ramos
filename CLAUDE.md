# Notaría Ramos · Web

Sitio de la Notaría Ramos (Alessandra Ramos, Notaria de Lima). Proyecto del curso AD4014 Experience Research & Design (UTEC), Equipo 4.

- **Stack:** Vite + React 19 + TypeScript (strict) + React Router 7. La UI está en español (Perú).
- **Comandos:** `npm run dev` (http://localhost:5173), `npm run build` (tipos + build) y `npm run typecheck`.
- **Estructura:** las rutas están en `src/App.tsx`. Las páginas viven en `src/pages/` y las piezas compartidas en `src/components/`. Los assets se sirven desde `public/static/` con rutas `/static/...`.
- **CSS heredado:** `public/static/css/styles.css` y `blocks_styl.css` vienen del sitio original, compilados desde `static/stylus/`. Las páginas convertidas del HTML original todavía los usan.
- **Código del design system:**
  - `src/styles/tokens.css`: todos los tokens como variables CSS.
  - `src/styles/ds.css`: estilos de texto (`ds-titulo1`, `ds-etiqueta`…), `ds-contenedor`, `ds-raiz` y la animación de aparición.
  - `src/components/ds/`: componentes del sistema (Icono, Boton, Cabecera, Pie).
  - `src/components/landing/`: bloques de landing (Hero, Seccion).
  - Cada componente tiene su `*.module.css`.
- **Estado de la migración:** Home, Cabecera y Pie ya usan el sistema. Las demás páginas en `src/pages/` siguen con el CSS heredado, pero dentro de la Cabecera y el Pie nuevos.
- **Choque con el CSS heredado:** el CSS heredado aplica `margin: auto` a `a`, `span`, `h1`–`h6`, `img`, `ul`, `li`, `section`, `header`, etc. Todo elemento raíz de un componente del sistema lleva la clase `ds-raiz`, que anula ese reset. Los `<p>` sin clase `ds-*` reciben `margin: 0 0 15px` del CSS heredado. En `main.tsx`, `tokens.css` y `ds.css` se importan **antes** que `App`, para que los CSS modules ganen en caso de empate.

---

# Design system (v4 · «mini design system»)

Fuente: *Mini_Design_System_Notaria_Ramos.pdf* (Semana 13, noviembre 2026). Reemplaza al sistema v3.1.1.

**Es la referencia obligatoria para toda pantalla o componente nuevo, y para todo lo que se rediseñe.** Las páginas heredadas mantienen su CSS hasta que se migren. Si se toca una de ellas, la parte modificada se migra a este sistema; no se agregan estilos nuevos al CSS heredado.

## Reglas de oro

1. **Si no aparece en el flujo, no va en el sistema.** El sistema tiene 11 componentes. No inventes uno nuevo para salir del paso.
2. **No se improvisa.** No uses valores fuera de los tokens: ningún hex, tamaño, espacio o radio suelto. Si de verdad falta algo, primero se agrega aquí (tokens + este archivo) y después se usa.
3. **Una acción principal por pantalla.** Solo puede haber un botón primario visible.
4. **Un color, un significado.** El estado siempre se comunica con **palabra + ícono**, nunca solo con color.
5. **El lavanda (`acento`) no rellena botones.** Se usa para foco, enlaces, la etapa actual y el asterisco de obligatorio.

## Flujo que cubre el sistema

«Consultar trámite y agendar la cita de firma»:

1. **Consultar trámite:** tipo y N° de documento, N° de kardex.
2. **Resultado:** p. ej. «Falta la firma del segundo comprador».
3. **Agendar cita de firma:** día, hora y qué traer.
4. **Cita confirmada:** resumen y mensaje por WhatsApp.

**Fuera del sistema:** adjuntar archivo y casilla de privacidad (son de otro flujo); pestañas, paginación y tarjeta con foto; carta, cotización y firma de correo (documentos impresos).

## Tokens

Los nombres describen la **función**, nunca el tono: nada de «azul», «navy» o «rojo».

En código se usan como variables CSS con el mismo nombre, cambiando el punto por un guion: `color.texto-sec` → `--color-texto-sec`, `espacio.m` → `--espacio-m`. Viven en un solo archivo, `src/styles/tokens.css`. Nunca escribas un hex o un px suelto en un componente: usa `var(--…)`. En Figma, `color.primario` es la variable `color/primario`.

### Color · roles base

| Token | Valor | Uso |
|---|---|---|
| `color.primario` | `#041E48` | Botón principal; día y hora elegidos |
| `color.primario-presionado` | `#031533` | Botón principal presionado |
| `color.primario-claro` | `#EFF1FA` | Fondo de selección y aviso informativo |
| `color.acento` | `#5F6EC9` | Foco, enlaces, etapa actual, `*` de obligatorio |
| `color.acento-oscuro` | `#434E8F` | Texto de acento sobre `primario-claro` |
| `color.acento-sobre-oscuro` | `#7F8BD4` | Enlace y página actual en la cabecera; etiquetas del pie |
| `color.cabecera` | `#021128` | Fondo de cabecera, banda de título y pie |
| `color.texto` | `#181818` | Títulos, cuerpo y borde de campos |
| `color.texto-sec` | `#646464` | Ayudas, etiquetas y metadatos |
| `color.superficie` | `#FFFFFF` | Pantalla, campos y tarjetas |
| `color.fondo` | `#F7F7F7` | Fondo alterno y controles deshabilitados |
| `color.borde` | `#E0E0E0` | Separadores (**solo decorativo**) |
| `color.deshabilitado` | `#B7B7B7` | Texto de controles deshabilitados |

### Color · semánticos

| Token | Valor | Uso |
|---|---|---|
| `color.error` / `color.error-fondo` | `#C62828` / `#FDF1F0` | Solo errores y trámites observados |
| `color.exito` / `color.exito-fondo` | `#0B5F43` / `#F3FAF6` | Solo confirmaciones y requisitos listos |
| `color.aviso` / `color.aviso-fondo` | `#8A5D06` / `#FFFBF2` | «Falta algo» / «te toca hacer algo» |

### Contraste (WCAG 2.1 AA)

El texto necesita al menos **4.5:1**, y los elementos que no son texto (bordes, foco) al menos **3:1**.

| Par (texto sobre fondo) | Contraste | Estado |
|---|---|---|
| texto sobre superficie | 17.8:1 | ✓ |
| texto-sec sobre superficie / fondo | 5.9:1 / 5.5:1 | ✓ |
| superficie sobre primario | 16.3:1 | ✓ |
| superficie sobre cabecera | 18.9:1 | ✓ |
| acento sobre superficie | 4.6:1 | ✓ (justo: solo enlaces y `*`) |
| error / exito / aviso sobre su fondo | 5.1 / 7.3 / 5.6:1 | ✓ |
| **acento sobre primario-claro** | 4.1:1 | ✗ → usar `acento-oscuro` (6.8:1) |
| **acento sobre cabecera** | 4.1:1 | ✗ → usar `acento-sobre-oscuro` (5.9:1) |
| **ámbar claro sobre superficie** | 2.9:1 | ✗ → descartado; usar `color.aviso` |

- El borde de los campos usa `color.texto` y el anillo de foco usa `color.acento`. `color.borde` (1.3:1) nunca sirve para delimitar un control.
- `color.deshabilitado` (2.0:1) solo se usa en controles inactivos, nunca en texto que se deba leer.
- Antes de crear un par texto/fondo que no esté en esta tabla, calcula su contraste. Si falla, corrígelo y agrégalo a la tabla.

### Tipografía · una sola familia: Poppins

| Token | Tamaño/interlínea · peso | Uso |
|---|---|---|
| `texto.titulo1` | 30/38 · Medium (500) | Título de pantalla |
| `texto.titulo2` | 20/28 · Medium (500) | Título de bloque y de tarjeta |
| `texto.cuerpo` | 16/24 · Regular (400) | Texto, campos y botones |
| `texto.pequeno` | 14/20 · Regular (400) | Ayudas y metadatos |
| `texto.etiqueta` | 12/16 · Medium (500), MAYÚSCULAS con tracking | Etiquetas y estados («ELIGE EL DÍA», «LISTO») |

- Ningún texto puede medir menos de 12 px.
- Los montos, DNI, kardex, fechas y horas van con números de ancho fijo (`font-variant-numeric: tabular-nums`).

### Espaciado · escala de 8

| Token | px | Uso |
|---|---|---|
| `espacio.xs` | 4 | Entre ícono y texto |
| `espacio.s` | 8 | Entre chips |
| `espacio.m` | 16 | Margen de pantalla y gutter |
| `espacio.l` | 24 | Padding dentro de tarjetas |
| `espacio.xl` | 32 | Entre bloques |
| `espacio.xxl` | 48 | Entre secciones |

Al migrar valores heredados: 12 → 16, 20 → 24, y las secciones de 64/96 pasan a 48 en móvil.

### Grid

- **Móvil (base 375 px):** 4 columnas, margen de 16 y gutter de 16 (`espacio.m`).
- **Escritorio:** 12 columnas, ancho máximo de 1200 px y gutter de 24.
- Se diseña primero para móvil.

### Forma y alturas

| Token | Valor | Uso |
|---|---|---|
| `radio.chico` | 10 px | Avisos, chips de día, etiquetas |
| `radio.marca` | 20 px | Botones, campos, tarjetas, chips de hora |
| `alto.toque` | 44 px | Área mínima de toque de cualquier control |
| `alto.control` | 48 px | Altura de botón y campo |

Los bordes miden 1 px. El anillo de foco mide de 2 a 3 px en `color.acento`, con separación del control, y siempre es visible con teclado (`:focus-visible`).

### Íconos · un solo estilo: línea

- Trazo de 2 px y tamaño de 24 px (20 px dentro de botones y avisos). Toman el color del texto que acompañan (`currentColor`).
- **Set cerrado:** check, alerta, info, error, calendario, reloj, izq, der, abajo, arriba, menu, documento, buscar, sale y cerrar (v4.1). Están en `src/components/ds/Icono.tsx`.
- Los íconos de relleno de la fuente icomoon heredada (`icon-*`) **no** se usan en componentes nuevos.
- Los logos de WhatsApp y de las redes no se consideran íconos: se usan como marca.

## Extensión landing (v4.1 · noviembre 2026)

La Home se rediseñó con el estilo de moritzlegal.com: hero fotográfico oscuro a pantalla completa, mucho aire entre secciones, titulares grandes, etiquetas en mayúsculas y separadores finos. El flujo de cita de 375 px no cubría una landing de escritorio, así que, siguiendo la regla «si falta algo, se agrega al sistema», se agregó lo siguiente. **En móvil no cambia nada:** siguen valiendo 30 px y 48 px como máximos.

**Tokens nuevos**

| Token | Valor | Uso |
|---|---|---|
| `texto.display` | Fluido de 30/38 (375 px) a 64/72 (1440 px) · Medium · tracking −0.02em | Solo el h1 del hero |
| `texto.display-seccion` | Fluido de 30/38 a 40/48 · Medium · tracking −0.02em | Título de sección de landing (h2) |
| `espacio.xxxl` | 96 | Tope del espacio entre secciones (`--seccion-espacio`, fluido de 48 a 96) |
| `color.borde-sobre-oscuro` | blanco al 20 % | Separadores sobre fondos oscuros (solo decorativo) |
| `color.velo-suave` / `color.velo-fuerte` | `cabecera` al 70 % / 90 % | Velo sobre fotos. Donde hay texto, mínimo el 70 % |
| `ícono cerrar` | X de línea | Cerrar el menú móvil |

- **Grid fluido:** el margen y el gutter crecen de 16 a 24 entre 375 y 1440 px. Los anchos de lectura se derivan del grid: 8/12 columnas (`grid-max × 2/3`) para títulos y 6/12 para intros.

**Contraste de los pares nuevos** (calculado con WCAG)

| Par | Contraste | Estado |
|---|---|---|
| acento-oscuro sobre fondo / superficie | 7.2:1 / 7.7:1 | ✓ Enlaces en secciones claras |
| **acento sobre fondo** | 4.3:1 | ✗ → usar `acento-oscuro` |
| superficie sobre velo de 70 % (con foto blanca debajo, peor caso) | 7.2:1 | ✓ |
| **acento-sobre-oscuro sobre velo de 70 %** | 2.2:1 | ✗ → sobre fotos solo va texto `superficie` |
| acento-sobre-oscuro sobre cabecera | 5.9:1 | ✓ |

- **Enlaces sobre fondos claros:** van siempre en `acento-oscuro`, que se lee bien sobre `superficie` y sobre `fondo`. `acento` queda para el foco y el asterisco.

**Variantes y estados nuevos**

- **Boton · `Tono: Claro | Oscuro`.** Oscuro es para cabecera, hero y bandas oscuras.
  - Primario: fondo `superficie` y texto `primario`; al presionar, `primario-claro`.
  - Secundario: transparente con borde y texto `superficie`; al presionar, `primario`.
- **Hover (solo escritorio):** usa el mismo color que *Presionado*. En los enlaces, subrayado con la flecha desplazada `espacio.xs`.
- **Cabecera `Inicio`:** es transparente sobre el hero y se vuelve sólida (`cabecera` con borde inferior `borde-sobre-oscuro`) al hacer scroll. En móvil, el menú es un panel a pantalla completa con enlaces `titulo2`.
- **Página actual en la Cabecera:** `acento-sobre-oscuro` sobre fondo sólido, o subrayado en `superficie` cuando la cabecera está transparente.

**Bloques de landing** (solo para páginas de marketing, nunca dentro del flujo de trámite)

| Bloque | Archivo | Cuándo |
|---|---|---|
| Hero | `landing/Hero.tsx` | Primera sección de la Home. Foto + velo + etiqueta + `display` + bajada + máx. 1 primario + accesos rápidos |
| Seccion | `landing/Seccion.tsx` | Todo bloque de landing. `tono`: superficie, fondo o cabecera, alternando claro/fondo. Padding `--seccion-espacio`. Aparece al hacer scroll (respeta `prefers-reduced-motion`) |
| EncabezadoSeccion | `landing/Seccion.tsx` | Etiqueta (`acento-oscuro`) + h2 `display-seccion` + intro opcional + EnlaceFlecha a la derecha |
| EnlaceFlecha | `ds/Boton.tsx` | Acción terciaria «Ver todos…», «Ir al blog» |

- ✓ Una sola idea por sección, con la etiqueta en mayúsculas encima del título.
- ✓ Separadores de 1 px en lugar de cajas.
- ✓ Las tarjetas de servicio usan `radio.marca`, borde `borde` y padding `espacio.l`; en hover el borde pasa a `texto`.
- ✗ Cifras inventadas (Moritz usa contadores). Solo se agregan con datos reales de la notaría.
- ✗ Texto directo sobre una foto sin velo.
- ✗ Una segunda familia tipográfica: Moritz usa Inter Tight y Garamond, aquí solo Poppins.

### Movimiento (v4.2)

**Regla:** todo lo que se mueve usa estos tokens. Nunca escribas una duración o una curva sueltas.

| Token | Valor | Uso |
|---|---|---|
| `movimiento.rapido` | 200 ms | Hover, foco, cambios de color |
| `movimiento.medio` | 400 ms | Cabecera, menú móvil, cambio de página |
| `movimiento.lento` | 800 ms | Aparición de contenido |
| `movimiento.escalon` | 80 ms | Retraso entre elementos de un mismo grupo |
| `curva.salida` | `cubic-bezier(0.22, 1, 0.36, 1)` | Entradas: arranca rápido y frena suave |
| `curva.estandar` | `cubic-bezier(0.65, 0, 0.35, 1)` | Cambios de estado de ida y vuelta |

- **Aparición al hacer scroll:** cada `Seccion` revela en orden sus hijos marcados con `data-revelar` (hook `useRevelar`). Los elementos suben `espacio.xl` y aparecen con el escalonado. Si nada está marcado, aparece el bloque completo. En una sección nueva, marca con `data-revelar` cada pieza que deba entrar por separado.
- **Hero:** el titular sube palabra por palabra desde detrás de una máscara, y después entran la bajada, los botones y los accesos. La foto hace un leve acercamiento al cargar y un parallax suave (30 % del scroll).
- **Cabecera:** se esconde al bajar (pasada media pantalla) y vuelve apenas se sube. El menú móvil se despliega como una cortina opaca y sus enlaces entran escalonados.
- **Cambio de página:** fundido de `movimiento.medio`. El scroll suave aplica a los anclas, pero no al cambio de página.
- **Hover:** las tarjetas suben `espacio.xs`, las fotos del blog hacen zoom al 104 % y las flechas se desplazan `espacio.xs`.
- **Accesibilidad:** con `prefers-reduced-motion` se anulan todas las animaciones, retrasos y el parallax, y el contenido aparece de inmediato. No animes nada que no pase por `ds.css` o por los tokens, porque escaparía a esta regla.
- ✗ Animaciones que bloqueen la lectura o la acción, como esperar a que algo termine para poder hacer clic.
- ✗ Rebotes o efectos llamativos: el tono es sobrio, como una notaría.

## Componentes (11)

Los nombres de componentes y propiedades coinciden con Figma: `Componente/Tipo/Estado`, p. ej. `Boton/Primario/Foco`. En React, cada uno es un componente con props `tipo` y `estado` (o los equivalentes semánticos: `disabled`, `loading`, `error`). Para los estados no se usan clases sueltas.

### 1. Boton · `Tipo: Primario | Secundario` · `Estado: Normal | Foco | Presionado | Deshabilitado | Cargando`
- **Primario:** fondo `primario`, texto `superficie`, `radio.marca` y alto de 48. Presionado: `primario-presionado`. Deshabilitado: fondo `fondo`, texto `deshabilitado` y borde `borde`. Cargando: spinner de línea + gerundio («Confirmando…»), sin poder volver a pulsarlo.
- **Secundario:** fondo `superficie` y borde de 1 px en `texto`. Presionado: fondo `borde`. Sirve para volver o cancelar.
- Foco: anillo `acento`.
- ✓ El texto es verbo + objeto («Confirmar cita», «Agendar cita de firma»).
- ✗ Dos primarios juntos. ✗ Textos sueltos como «OK», «Aceptar» o «Enviar».

### 2. Campo · `Tipo: Texto | Selector` · `Estado: Vacío | Foco | Lleno | Error | Deshabilitado`
- Alto de 48, `radio.marca` y borde de 1 px en `texto`. La etiqueta queda dentro del campo: vacía se ve al tamaño de cuerpo y, con foco o con valor, sube sobre el valor.
- Los obligatorios llevan `*` en `acento`. Con foco se muestra el anillo `acento`, y la ayuda va debajo en `texto-sec` (p. ej. «8 dígitos»).
- **Error:** borde `error` y, debajo, el ícono alerta + un mensaje que dice cómo corregirlo («El DNI tiene 8 dígitos», «Elige un tipo de documento»). El error se asocia al campo con `aria-describedby`.
- **Deshabilitado:** fondo `fondo`, texto `deshabilitado` y sin borde fuerte.
- **Selector:** tiene la flecha «abajo» a la derecha.
- ✗ Usar un ejemplo como etiqueta. ✗ «--SELECCIONE--» como opción.

### 3. Chip (cita) · `Tipo: Día | Hora` · `Estado: Disponible | Elegido | Ocupado | Foco`
- **Día:** `radio.chico`, con el día abreviado en `texto.etiqueta` («JUE») y el número debajo («12»).
- **Hora:** `radio.marca`, con la hora en `texto.cuerpo` («10:30 a.m.»).
- Disponible: borde `texto` sobre `superficie`. Elegido: fondo `primario` y texto `superficie`. Ocupado: borde punteado `borde`, texto `deshabilitado` **tachado**, no se puede pulsar (`disabled`). Foco: anillo `acento`.
- Se separan con `espacio.s`. Funcionan como un grupo de radio: `role="radiogroup"` y `aria-checked`.
- ✓ Solo sirve para elegir el día y la hora de la cita. ✗ Usarlo como filtro, etiqueta o botón de otra acción.

### 4. TarjetaEstado · `Tipo: En curso | Listo | Falta algo | Observado`
| Tipo | Fondo | Etiqueta / ícono | Ejemplo |
|---|---|---|---|
| En curso | `primario-claro` | `acento-oscuro` · reloj | «Estamos revisando tu trámite» |
| Listo | `exito-fondo` | `exito` · check | «Tu cita está confirmada» |
| Falta algo | `aviso-fondo` | `aviso` · alerta | «Falta la firma del segundo comprador» + botón primario |
| Observado | `error-fondo` | `error` · error | «No encontramos tu trámite» |
- Orden interno: ícono en círculo blanco → etiqueta (`texto.etiqueta`) → título (`texto.titulo2`) → descripción (`texto.cuerpo`) → acción opcional. Usa `radio.marca`, padding `espacio.l` y un borde de 1 px del tono del estado.
- ✓ Primero el estado y después la acción: qué pasa y qué hacer. Abre el resultado de una consulta o de una confirmación.
- ✗ Anidar tarjetas. ✗ Más de una tarjeta de estado por pantalla.

### 5. Aviso · `Tipo: Info | Éxito | Error`
- Una sola línea de `texto.cuerpo` (o `pequeno`) con un ícono de 20 px, `radio.chico` y el fondo del tipo. Info usa `primario-claro` con ícono `acento-oscuro`.
- Info: «La firma toma unos 30 minutos. Llega 10 minutos antes.»
- Éxito: «Guardamos tus datos. Te escribiremos hoy antes de las 6:00 p.m.»
- Error: «No pudimos consultar. Guardamos lo que escribiste: reintenta.»
- ✓ Habla de la pantalla actual; el aviso de error dice qué hacer. ✗ Anunciar el resultado de un trámite (eso le toca a TarjetaEstado).

### 6. Requisito · `Estado: Listo | Falta` · `Etiqueta: sí | no`
- A la izquierda, un ícono en círculo: check en `exito` si está listo, alerta en `aviso` si falta. Luego el título (`texto.cuerpo`, Medium) y la descripción (`texto.pequeno`, `texto-sec`): dónde se consigue y en qué condición.
- La etiqueta opcional es una píldora `texto.etiqueta` sobre `fondo` («SI APLICA»). Los ítems se separan con líneas `borde`.
- ✓ El requisito se escribe como lo busca el cliente («DNI original de los compradores. Vigente. Si alguno es extranjero, carné de extranjería.»).
- ✗ Jerga notarial sin explicar. ✗ Marcar el estado solo con color.

### 7. Paso (de etapa) · `Estado: Hecho | Actual | Pendiente`
- Lista vertical con un conector. **Hecho:** círculo relleno `acento` con check blanco, conector `acento` y fecha debajo («24 oct 2026»). **Actual:** círculo con borde `acento`, número en `acento` y detalle debajo («Falta 1 de 2 firmas»). **Pendiente:** círculo con borde `texto-sec` y título en `texto-sec`.
- La etapa actual se marca con `aria-current="step"`.
- ✓ Muestra en qué etapa está el trámite. ✗ Usarlo para los pasos de un formulario.

### 8. FilaDato · sin variantes
- Etiqueta a la izquierda (`texto.cuerpo`, `texto-sec`) y valor a la derecha (`texto.cuerpo`, Medium, `tabular-nums`). Las filas se separan con líneas `borde`. Ejemplos: «Kardex — N° 1071», «Cita — Jue 12/11/2026 · 10:30 a.m.».
- Semánticamente es un `<dl>`.
- ✓ Resúmenes del trámite o de la cita, un dato por fila. ✗ Meter esos datos dentro de tarjetas.

### 9. Pregunta (frecuente) · `Estado: Cerrada | Abierta`
- La pregunta va en `texto.cuerpo` con el chevron abajo o arriba. La respuesta va en `texto-sec`. Las preguntas se separan con líneas `borde`.
- Se implementa como `<button aria-expanded>` (o `<details>`).
- ✓ Dudas que bloquean el paso actual, máximo 3 o 4 por pantalla. ✗ Esconder ahí información obligatoria, como un requisito.

### 10. Cabecera · `Tipo: Inicio | Interna`
- Fondo `cabecera`, logo a la izquierda e ícono de menú a la derecha (en móvil).
- **Interna:** suma una fila de miga de pan con «‹ Consultar trámite» en `acento-sobre-oscuro`. La banda de título (`texto.titulo1` en `superficie`, más el subtítulo con kardex o trámite) puede continuar debajo con el mismo fondo.
- ✓ Aparece en todas las pantallas y la miga de pan indica de dónde viene el usuario. ✗ Cambiar el menú según la pantalla.

### 11. Pie · sin variantes
- Fondo `cabecera`. Las etiquetas van en `texto.etiqueta` con `acento-sobre-oscuro` (LLÁMANOS, ESCRÍBENOS) y los valores en `superficie`. La línea legal va en `texto.pequeno` con `acento-sobre-oscuro`.
- Datos del sistema: +51 978 491 674 · informes@notariaramos.pe · «2026 Ruth Alessandra Ramos Rivas · Notaria de Lima».
- ⚠️ El footer heredado (`src/components/Footer.tsx`) tiene otro teléfono (01 2638686) y otro nombre legal. Antes de unificar, confirma con el equipo cuál es el dato correcto; no lo cambies por tu cuenta.
- ✓ Contacto y datos legales al final de cada pantalla. ✗ Poner ahí la acción principal.

## Pantalla de referencia: «Agendar la cita de firma» (móvil, 375 px)

1. Cabecera interna con la miga «‹ Consultar trámite». Banda `cabecera` con «Agenda tu cita de firma» (`titulo1`) y «Compraventa de inmueble · Kardex N° 1071».
2. Aviso info: «La firma toma unos 30 minutos. Llega 10 minutos antes.»
3. «ELIGE EL DÍA» (`etiqueta`) + chips de día (LUN 9 … VIE 13, con uno ocupado).
4. «ELIGE LA HORA» + chips de hora en filas de 3 (9:00 a.m. … 11:30 a.m.).
5. Resumen de la elección con el ícono calendario: «Jueves 12 de noviembre · 10:30 a.m.»
6. «Qué necesitas para firmar» (`titulo2`) + «2 de 3 listos» + ítems de Requisito.
7. «Preguntas frecuentes» + Pregunta (cerradas).
8. Botón primario «Confirmar cita», a todo el ancho y **fijo abajo**.

Solo usa tokens del sistema: `color.cabecera`, `color.primario`, `color.primario-claro`, `texto.titulo1`, `texto.etiqueta`, `espacio.m`, `espacio.l` y `radio.marca`.

## Checklist antes de entregar una pantalla

- [ ] Todos los colores, tamaños, espacios y radios salen de los tokens (ningún valor literal).
- [ ] Hay un solo botón primario y su texto es verbo + objeto.
- [ ] Cada estado lleva palabra + ícono, no solo color.
- [ ] Los pares texto/fondo están en la tabla de contraste (≥ 4.5:1).
- [ ] Los campos tienen etiqueta visible, `*` si son obligatorios y un error que explica cómo corregir.
- [ ] Los controles miden al menos 44 px de alto y el foco es visible con teclado.
- [ ] Ningún texto mide menos de 12 px y los números usan `tabular-nums`.
- [ ] Funciona primero en móvil (375 px, 4 columnas) y luego en escritorio (12 columnas, máx. 1200 px).
- [ ] Solo se usan los 11 componentes del sistema, los bloques de landing (en páginas de marketing) y los íconos de línea del set.
- [ ] El elemento raíz de cada componente nuevo lleva `ds-raiz`.
