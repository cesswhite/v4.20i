Guía técnica y comandos verificados: [docs/REPOSITORY_GUIDE.md](docs/REPOSITORY_GUIDE.md). Instrucciones para agentes: [AGENTS.md](AGENTS.md). Consulta esa guía como referencia actual de instalación y arquitectura.

![v.420i_cover_image](https://github.com/user-attachments/assets/db3b68fb-4677-4326-96b5-8a24e92a91a4)

# v.420i: Nuxt 4 Starter con i18n

Plantilla mínima y rápida de Nuxt 4 con **internacionalización (i18n)** integrada.  
**Leer en otros idiomas:** [English (README.md)](README.md) · [Português (README.pt.md)](README.pt.md) La app soporta **tres idiomas** (inglés, español, portugués) usando [@nuxtjs/i18n](https://i18n.nuxtjs.org/). Utiliza las últimas versiones de Nuxt y está lista para producción tanto en proyectos pequeños como al escalar.

## Stack tecnológico

- **[Nuxt 4](https://nuxt.com/)** – Framework Vue full-stack con SSR, rutas basadas en archivos y auto-imports
- **[@nuxtjs/i18n](https://i18n.nuxtjs.org/)** – Internacionalización: rutas por locale, mensajes en lazy-load, SEO por idioma
- **[Nuxt UI](https://ui.nuxt.com/)** – Biblioteca de componentes Vue accesibles con theming basado en Tailwind
- **[Nuxt Image](https://image.nuxt.com/)** – Optimización de imágenes con redimensionado y múltiples proveedores
- **[Pinia](https://pinia.vuejs.org/ssr/nuxt.html#Nuxt)** – Store de estado Vue con soporte SSR
- **[Tailwind CSS](https://tailwindcss.com/)** – CSS utility-first

## Idiomas (i18n)

Este repo es **i18n-first**. Incluye tres locales:

| Código | Idioma    | Prefijo URL   |
|--------|------------|---------------|
| `en`   | Inglés     | (por defecto, sin prefijo) |
| `es`   | Español    | `/es`         |
| `pt`   | Portugués  | `/pt`         |

- **Módulo:** [@nuxtjs/i18n](https://i18n.nuxtjs.org/) — Integración Vue I18n para Nuxt, rutas por locale y SEO.
- **Traducciones:** `i18n/locales/` — un archivo JSON por locale (`en.json`, `es.json`, `pt.json`) con las mismas claves.
- **Rutas:** El locale por defecto no lleva prefijo en la URL; el resto sí (ej. `/es/about`, `/pt/about`). La primera visita puede redirigir al idioma del navegador; el locale elegido se guarda en una cookie.
- **Enlaces:** Usa `localePath('/ruta')` para mantener el locale actual; usa `switchLocalePath('es')` (u otro código) para enlaces que cambien de idioma.
- **SEO:** `app/app.vue` usa `useLocaleHead` para el idioma del documento y las etiquetas hreflang; títulos y descripciones usan claves de traducción.

## Características

- **Nuxt 4** – Versión actual con mejor rendimiento y DX
- **i18n** – Tres locales (en, es, pt), rutas por locale, selector de idioma, SEO por locale
- **Pinia** – Estado centralizado con hidratación SSR
- **Tailwind CSS** – Estilos utility-first y design tokens
- **Nuxt Image** – Redimensionado, formatos modernos y abstracción de proveedores
- **Modo oscuro** – Alternancia de tema (claro/oscuro)
- **Temas de color** – Paleta primaria configurable
- **Responsive** – Diseño mobile-first
- **SEO** – Meta tags y configuración de head por locale

## Inicio rápido

Usa Bun y Node 22.12+ compatible con Nuxt. Las versiones vigentes están en `package.json` y `bun.lock`. Clona directamente esta plantilla con i18n:

```sh
git clone https://github.com/cesswhite/v4.20i.git
cd v4.20i
bun install --frozen-lockfile
bun run dev
```

```sh
bun run build
bun run preview
```

El servidor de desarrollo normalmente usa `http://localhost:3000`; revisa `/`, `/es` y `/pt`. La salida de producción está en `.output`. Consulta la [guía técnica](docs/REPOSITORY_GUIDE.md) para verificar tipos y SEO.

## Estructura del proyecto

```
app/
├── components/     # Componentes Vue (auto-importados)
├── layouts/        # Layouts
├── pages/          # Rutas basadas en archivos (Vue Router)
├── stores/         # Stores Pinia
└── assets/css/     # Estilos globales
i18n/
└── locales/        # Archivos de traducción (en.json, es.json, pt.json)
```

## Componentes principales

- **Color Picker** – Personalización del color primario (token del tema)
- **Logo** – Logo del sitio en layout/header
- **Layout** – Estructura responsive con navegación, cambio de tema y selector de idioma

## Configuración Pinia SSR

La plantilla incluye un store Pinia preparado para **hidratación SSR**:

- **Hidratación:** El store vuelve a conectar `useLocalStorage` durante la hidratación del cliente; consulta `app/stores/index.ts`.
- **SSR:** Seguro para renderizado en servidor con estado solo en cliente.
- **TypeScript:** Usa `@ts-expect-error` donde hace falta por [limitaciones de tipado de Pinia](https://github.com/vuejs/pinia/issues/2086#issuecomment-1493942501).

Consulta la [documentación de Pinia SSR](https://pinia.vuejs.org/cookbook/composables.html#SSR) para más detalles.

## Internacionalización (i18n) en detalle

- **Dónde están las traducciones:** En `i18n/locales/` en la raíz del proyecto — un JSON por locale (`en.json`, `es.json`, `pt.json`) con las mismas claves.
- **Cambiar de idioma:** Usa los enlaces de idioma en el header del layout; llevan a la misma página en otro locale.
- **Añadir un idioma:** Añade una entrada en `i18n.locales` en `nuxt.config.ts` y un nuevo JSON en `i18n/locales/` con las mismas claves. Actualiza también el mapeo/lista de locales en `app/composables/useNuxtUiI18n.ts` y el sitemap público.
- **Enlaces dentro de la app:** Usa `localePath('/ruta')` (o el nombre de la ruta) para que los enlaces conserven el locale. Usa `switchLocalePath('es')` (u otro código) para enlaces que cambien de idioma.
- **SEO:** `app/app.vue` usa `useLocaleHead` para que el idioma del documento y las etiquetas hreflang sigan el locale activo. Títulos y descripciones usan claves de traducción para mantenerse en sync.

## Asistentes de desarrollo

[AGENTS.md](AGENTS.md) y la [guía técnica](docs/REPOSITORY_GUIDE.md) ofrecen contexto compartido a Codex y Cursor. Claude Code y Gemini CLI importan las mismas instrucciones mediante sus archivos de entrada. El asistente necesita acceso al repo; estos archivos no crean un chatbot público.

## Contribuir

Se aceptan issues y pull requests.

## Licencia

MIT.
