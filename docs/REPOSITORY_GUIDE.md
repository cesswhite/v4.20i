# v4.20i: repository guide

## Product and scope

v4.20i is a Nuxt starter with English, Spanish and Portuguese routing. Its public demo has a home page with a name input and an About page that displays that name. It also demonstrates color-mode/theme controls and translated Nuxt UI components. It does not implement a backend account system.

Open the repository in Codex, Cursor, Claude Code or Gemini CLI and ask about the code. `AGENTS.md` contains shared instructions; Claude/Gemini entry files import it. A web chat needs an explicit repository connection or supplied files to read private source; this documentation does not expose it or create a chatbot endpoint.

## Questions and entry points

| Question | Read first |
| --- | --- |
| “Walk me through entering a name and opening About.” | [index.vue](../app/pages/index.vue), `handleGoToAbout`, [index store](../app/stores/index.ts), [about.vue](../app/pages/about.vue) |
| “How do I add a locale without breaking SEO?” | [nuxt.config.ts](../nuxt.config.ts), [useNuxtUiI18n.ts](../app/composables/useNuxtUiI18n.ts), [app.vue](../app/app.vue), [sitemap.xml](../public/sitemap.xml) |
| “Where is user information stored?” | [index store](../app/stores/index.ts), [theme plugin](../app/plugins/theme.ts), [SwitchPrimaryColor.vue](../app/components/App/SwitchPrimaryColor.vue) |
| “Which files identify this deployment rather than a new project based on it?” | [shared/site.ts](../shared/site.ts), [useSiteSeo.ts](../app/composables/useSiteSeo.ts), [robots.txt](../public/robots.txt), [llms.txt](../public/llms.txt) |

Answers should cite implementation files, distinguish evidence from inference, and say when a feature is not implemented. To request a change, state the desired behavior and constraints.

## Code map

| Path | Responsibility |
| --- | --- |
| [nuxt.config.ts](../nuxt.config.ts) | Modules, locale definitions, prefix strategy and language detection. |
| [app/app.vue](../app/app.vue) | Nuxt UI app wrapper, locale head, document language, theme metadata and favicon setup. |
| [app/pages](../app/pages) | Home and About, expanded into six localized routes by i18n. |
| [app/layouts/default.vue](../app/layouts/default.vue) | Shared page shell and locale selection. |
| [i18n/locales](../i18n/locales) | English, Spanish and Portuguese messages, including metadata keys. |
| [app/composables/useNuxtUiI18n.ts](../app/composables/useNuxtUiI18n.ts) | Maps routing locale `pt` to Nuxt UI `pt_br`/`pt-BR` and switches locale routes. |
| [app/stores/index.ts](../app/stores/index.ts) | Browser-persisted demo name with Pinia hydration handling. |
| [app/plugins/theme.ts](../app/plugins/theme.ts) | Restores browser theme choices. |
| [app/composables/useSiteSeo.ts](../app/composables/useSiteSeo.ts) | Translated page titles/descriptions and website/page JSON-LD. |
| [shared/site.ts](../shared/site.ts) | Production name and canonical origin. |
| [public](../public) | Assets, robots, six-page sitemap and optional public AI context. |
| [package.json](../package.json) / [bun.lock](../bun.lock) | Declared commands/dependencies and resolved versions. |

## Flows and boundaries

The home input updates the shared Pinia name. `handleGoToAbout` checks whether it is nonempty, shows a toast and navigates with `localePath('/about')`. The store uses VueUse `useLocalStorage('name', '')` and reattaches that client storage during hydration. This is a local demo value, not an authenticated server identity. Theme preferences also use local storage.

English routes are `/` and `/about`; Spanish routes are `/es` and `/es/about`; Portuguese routes are `/pt` and `/pt/about`. Browser-language detection applies at the root and uses a locale cookie. Nuxt UI has a separate locale mapping, so adding a locale requires reviewing that mapping and switcher list as well as messages/config.

`useLocaleHead` in `app/app.vue` owns canonical and hreflang links; page metadata/schema uses `useSiteSeo`. The static sitemap must track all actual public routes. A project created from this template must change its own canonical identity and public context rather than publishing the demo's identity unchanged.

The checked-in application has no server API or application-specific secret/environment requirement. Do not infer integrations from dependencies alone, or publish local environment values. Public AI context contains only demo/product facts; it is separate from developer instructions.

## Commands and verification

Use Bun with the tracked lockfile and a supported Node runtime (Node 22.12+ satisfies the Nuxt 4 runtime minimum used by this project). Check the installed Nuxt engine constraint after upgrades. Exact package versions may change; read `package.json` and `bun.lock` rather than copying version claims from older docs.

```sh
bun install --frozen-lockfile
bun run dev
bun run build
bun run preview
```

`bun run generate` invokes `nuxt generate`; installation invokes `nuxt prepare` via `postinstall`. There are no `test`, `lint` or `typecheck` package scripts. To invoke the installed checker explicitly, use `bun x nuxi typecheck`; its success depends on the current TypeScript/vue-tsc compatibility, and a successful build is not evidence that a separate typecheck passed.

For i18n/SEO changes, inspect all six routes, a query-string variant, canonical/hreflang reciprocity, the sitemap/robots responses and a genuinely nonexistent route. For state changes, test initial render, client navigation and a reload with existing local storage. Do not substitute destructive storage clearing for reproducing user state.

Documentation-only edits need local link/command checks rather than a dependency upgrade or application rebuild. Keep this guide in sync with changed routes, commands, storage and entry points.
