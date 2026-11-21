# Notaría Ramos — Web (React + TypeScript)

Landing page de la Notaría Ramos hecha con **Vite + React 19 + TypeScript + React Router**.

## Cómo correrla

```bash
npm install      # solo la primera vez
npm run dev      # abre http://localhost:5173
```

Otros comandos:

| Comando             | Qué hace                                      |
| ------------------- | --------------------------------------------- |
| `npm run build`     | Revisa tipos y genera la versión final en `dist/` |
| `npm run preview`   | Sirve `dist/` para probar el build            |
| `npm run typecheck` | Solo revisa los tipos de TypeScript           |

## Estructura

```
src/
  main.tsx              punto de entrada
  App.tsx               rutas (una por cada página)
  routes.ts             enlaces del menú principal
  components/
    Layout.tsx          header + footer + menú móvil (común a todas las páginas)
    Header.tsx, Footer.tsx
    ValidatedForm.tsx   formularios: validación, labels flotantes, solo números/letras
    Carousel.tsx        carruseles (Slick)
    FileInput.tsx       campo para adjuntar archivo
    GoogleMap.tsx       mapa de la página de contacto
  hooks/                usePageTitle, useMediaQuery, useRevealOnScroll
  lib/dom.ts            scroll suave a anclas, popup de compartir
  pages/                una página por cada .html original
public/static/          CSS compilado, fuentes, imágenes (rutas /static/...)
```

## Notas

- Los estilos son los mismos CSS compilados del sitio original (`public/static/css`).
  Si se modifica el Stylus de `static/stylus`, hay que recompilarlo y copiar el resultado ahí.
- El mapa usa la variable `VITE_GOOGLE_MAPS_API_KEY` del archivo `.env` (ver `.env.example`).
- Los formularios validan y muestran `formulario OK` en la consola; para enviarlos a un backend,
  pasar `onValidSubmit` a `<ValidatedForm>`.
- Al publicar con `BrowserRouter`, el hosting debe redirigir todas las rutas a `index.html`
  (en Netlify/Vercel es una regla de "rewrite"/"SPA fallback").
- `static/stylus/` es el código fuente de los estilos (Stylus) y `static/icomoon/` el proyecto de la
  fuente de íconos (`selection.json`, se importa en icomoon.io para agregar íconos). La app no los
  usa directamente.
- El CSS referencia una fuente `ubuntu-bold-webfont` que nunca estuvo en el proyecto (ya faltaba en
  el sitio original); el navegador usa la fuente de respaldo.
# notaria_ramos
