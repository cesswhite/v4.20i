![v4.20i_cover_image](https://github.com/user-attachments/assets/3f3f824e-4974-4b29-bb7a-abf3ed9a9d63)

# v4.20i: Nuxt 4 Starter with i18n

Start with the [repository guide](docs/REPOSITORY_GUIDE.md) for the code map, verified commands, data flows and questions you can ask a development assistant. Shared instructions are in [AGENTS.md](AGENTS.md).

Minimal, fast Nuxt 4 boilerplate with **internationalization (i18n)** built in.  
**Read this in other languages:** [Español (README.es.md)](README.es.md) · [Português (README.pt.md)](README.pt.md) The app supports **three languages** (English, Spanish, Portuguese) using [@nuxtjs/i18n](https://i18n.nuxtjs.org/). Uses the latest Nuxt releases and stays production-ready whether you keep the project small or scale it.

## Tech Stack

- **[Nuxt 4](https://nuxt.com/)** – Full-stack Vue framework with SSR, file-based routing, and auto-imports
- **[@nuxtjs/i18n](https://i18n.nuxtjs.org/)** – Internationalization: locale routing, lazy-loaded messages, SEO by locale
- **[Nuxt UI](https://ui.nuxt.com/)** – Accessible UI component library with Tailwind-based theming
- **[Nuxt Image](https://image.nuxt.com/)** – Image optimization with built-in resizer and multiple providers
- **[Pinia](https://pinia.vuejs.org/ssr/nuxt.html#Nuxt)** – Vue state store with SSR support
- **[Tailwind CSS](https://tailwindcss.com/)** – Utility-first CSS

## Languages (i18n)

This repo is **i18n-first**. It ships with three locales:

| Code | Language   | URL prefix   |
|------|------------|--------------|
| `en` | English    | (default, no prefix) |
| `es` | Spanish    | `/es`        |
| `pt` | Portuguese | `/pt`        |

- **Module:** [@nuxtjs/i18n](https://i18n.nuxtjs.org/) — Vue I18n integration for Nuxt, locale-aware routes, and SEO.
- **Translations:** `i18n/locales/` — one JSON file per locale (`en.json`, `es.json`, `pt.json`) with the same keys.
- **Routing:** Default locale has no URL prefix; other locales are prefixed (e.g. `/es/about`, `/pt/about`). First visit can redirect to the browser language; the chosen locale is stored in a cookie.
- **Links:** Use `localePath('/path')` to keep the current locale; use `switchLocalePath('es')` (or another code) for language switcher links.
- **SEO:** `app/app.vue` uses `useLocaleHead` for document language and hreflang tags; page titles and descriptions use translation keys.

## Features

- **Nuxt 4** – Current major with improved performance and DX
- **i18n** – Three locales (en, es, pt), locale routing, lang switcher, SEO by locale
- **Pinia** – Centralized state with SSR hydration
- **Tailwind CSS** – Utility-first styling and design tokens
- **Nuxt Image** – Resizing, modern formats, and provider abstraction
- **Dark mode** – Theme toggle (light/dark)
- **Color themes** – Configurable primary palette
- **Responsive** – Mobile-first layout
- **SEO** – Meta tags and head configuration per locale

## Quick Start

Use Bun and a supported Node runtime (Node 22.12+). Read `package.json` and `bun.lock` for the current dependency versions. Clone this internationalized template directly:

```sh
git clone https://github.com/cesswhite/v4.20i.git
cd v4.20i
bun install --frozen-lockfile
bun run dev
```

The development server normally runs at `http://localhost:3000`. Open `/`, `/es` or `/pt` to inspect each locale.

```sh
bun run build
bun run preview
```

The build is written to `.output`. See the [guide](docs/REPOSITORY_GUIDE.md#commands-and-verification) for type checking and locale/SEO checks.

## Project structure

```
app/
├── components/     # Vue components (auto-imported)
├── layouts/        # Layout wrappers
├── pages/          # File-based routes (Vue Router)
├── stores/         # Pinia stores
└── assets/css/     # Global styles
i18n/
└── locales/        # Translation files (en.json, es.json, pt.json)
```

## Main components

- **Color Picker** – Primary color customization (theme token)
- **Logo** – Site logo used in layout/header
- **Layout** – Responsive shell with navigation, theme toggle, and language switcher

## Pinia SSR configuration

The template ships with a Pinia store set up for **SSR hydration**:

- **Hydration**: The name store reconnects its VueUse `useLocalStorage` binding during client hydration; inspect `app/stores/index.ts` for the actual behavior.
- **SSR**: Safe for server-side rendering with client-only state.
- **TypeScript**: Uses `@ts-expect-error` where required due to [Pinia typing limitations](https://github.com/vuejs/pinia/issues/2086#issuecomment-1493942501).

See [Pinia SSR documentation](https://pinia.vuejs.org/cookbook/composables.html#SSR) for details.

## Internationalization (i18n) in depth

- **Where translations live:** `i18n/locales/` at the project root — one JSON file per locale (`en.json`, `es.json`, `pt.json`) with the same keys.
- **Changing language:** Use the language links in the layout header; they point to the same page in another locale.
- **Adding a new language:** Add an entry to `i18n.locales` in `nuxt.config.ts` and a new JSON file in `i18n/locales/` with the same keys as the others. Also update the Nuxt UI locale mappings/list in `app/composables/useNuxtUiI18n.ts` and the public sitemap.
- **Links inside the app:** Use `localePath('/path')` (or the route name) so links keep the current locale. Use `switchLocalePath('es')` (or another code) for links that switch locale.
- **SEO:** `app/app.vue` uses `useLocaleHead` so the document language and hreflang tags follow the active locale. Page titles and descriptions use translation keys so they stay in sync with the locale.

## Development assistants

[AGENTS.md](AGENTS.md) and the [repository guide](docs/REPOSITORY_GUIDE.md) provide shared context for Codex and Cursor. Claude Code and Gemini CLI use thin entry files importing the same instructions. No global settings change is required. These files help an assistant that has repository access; they do not create a hosted chat service.

## Contributing

Issues and pull requests are welcome.

## License

MIT.
