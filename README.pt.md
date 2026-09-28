Guia técnico e comandos verificados: [docs/REPOSITORY_GUIDE.md](docs/REPOSITORY_GUIDE.md). Instruções para agentes: [AGENTS.md](AGENTS.md). Use esse guia como referência atual de instalação e arquitetura.

![v.420i_cover_image](https://github.com/user-attachments/assets/db3b68fb-4677-4326-96b5-8a24e92a91a4)

# v.420i: Nuxt 4 Starter com i18n

Boilerplate mínimo e rápido de Nuxt 4 com **internacionalização (i18n)** integrada.  
**Ler em outros idiomas:** [English (README.md)](README.md) · [Español (README.es.md)](README.es.md) A app suporta **três idiomas** (inglês, espanhol, português) usando [@nuxtjs/i18n](https://i18n.nuxtjs.org/). Usa as últimas versões do Nuxt e fica pronta para produção tanto em projetos pequenos quanto ao escalar.

## Stack tecnológico

- **[Nuxt 4](https://nuxt.com/)** – Framework Vue full-stack com SSR, rotas baseadas em arquivos e auto-imports
- **[@nuxtjs/i18n](https://i18n.nuxtjs.org/)** – Internacionalização: rotas por locale, mensagens em lazy-load, SEO por idioma
- **[Nuxt UI](https://ui.nuxt.com/)** – Biblioteca de componentes Vue acessíveis com theming baseado em Tailwind
- **[Nuxt Image](https://image.nuxt.com/)** – Otimização de imagens com redimensionamento e múltiplos provedores
- **[Pinia](https://pinia.vuejs.org/ssr/nuxt.html#Nuxt)** – Store de estado Vue com suporte SSR
- **[Tailwind CSS](https://tailwindcss.com/)** – CSS utility-first

## Idiomas (i18n)

Este repo é **i18n-first**. Inclui três locales:

| Código | Idioma     | Prefixo URL   |
|--------|------------|---------------|
| `en`   | Inglês     | (padrão, sem prefixo) |
| `es`   | Espanhol   | `/es`         |
| `pt`   | Português  | `/pt`         |

- **Módulo:** [@nuxtjs/i18n](https://i18n.nuxtjs.org/) — Integração Vue I18n para Nuxt, rotas por locale e SEO.
- **Traduções:** `i18n/locales/` — um arquivo JSON por locale (`en.json`, `es.json`, `pt.json`) com as mesmas chaves.
- **Rotas:** O locale padrão não tem prefixo na URL; os demais têm (ex.: `/es/about`, `/pt/about`). A primeira visita pode redirecionar para o idioma do navegador; o locale escolhido é salvo em um cookie.
- **Links:** Use `localePath('/caminho')` para manter o locale atual; use `switchLocalePath('es')` (ou outro código) para links que trocam de idioma.
- **SEO:** `app/app.vue` usa o locale do Nuxt UI para idioma/direção e `useLocaleHead` para canonical/hreflang; títulos e descrições usam chaves de tradução.

## Recursos

- **Nuxt 4** – Versão atual com melhor performance e DX
- **i18n** – Três locales (en, es, pt), rotas por locale, seletor de idioma, SEO por locale
- **Pinia** – Estado centralizado com hidratação SSR
- **Tailwind CSS** – Estilos utility-first e design tokens
- **Nuxt Image** – Redimensionamento, formatos modernos e abstração de provedores
- **Modo escuro** – Alternância de tema (claro/escuro)
- **Temas de cor** – Paleta primária configurável
- **Responsivo** – Layout mobile-first
- **SEO** – Meta tags e configuração de head por locale

## Início rápido

Use Bun e Node 22.12+ compatível com Nuxt. As versões atuais estão em `package.json` e `bun.lock`. Clone diretamente este template com i18n:

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

O servidor de desenvolvimento normalmente usa `http://localhost:3000`; confira `/`, `/es` e `/pt`. A saída de produção fica em `.output`. Consulte o [guia técnico](docs/REPOSITORY_GUIDE.md) para verificar tipos e SEO.

## Estrutura do projeto

```
app/
├── components/     # Componentes Vue (auto-importados)
├── layouts/        # Layouts
├── pages/          # Rotas baseadas em arquivos (Vue Router)
├── stores/         # Stores Pinia
└── assets/css/     # Estilos globais
i18n/
└── locales/        # Arquivos de tradução (en.json, es.json, pt.json)
```

## Componentes principais

- **Color Picker** – Personalização da cor primária (token do tema)
- **Logo** – Logo do site no layout/header
- **Layout** – Estrutura responsiva com navegação, troca de tema e seletor de idioma

## Configuração Pinia SSR

O template inclui um store Pinia preparado para **hidratação SSR**:

- **Hidratação:** O store reconecta `useLocalStorage` durante a hidratação do cliente; consulte `app/stores/index.ts`.
- **SSR:** Seguro para renderização no servidor com estado apenas no cliente.
- **TypeScript:** Usa `@ts-expect-error` onde necessário por [limitações de tipagem do Pinia](https://github.com/vuejs/pinia/issues/2086#issuecomment-1493942501).

Consulte a [documentação do Pinia SSR](https://pinia.vuejs.org/cookbook/composables.html#SSR) para mais detalhes.

## Internacionalização (i18n) em detalhe

- **Onde ficam as traduções:** Em `i18n/locales/` na raiz do projeto — um JSON por locale (`en.json`, `es.json`, `pt.json`) com as mesmas chaves.
- **Mudar de idioma:** Use os links de idioma no header do layout; eles levam à mesma página em outro locale.
- **Adicionar um idioma:** Adicione uma entrada em `i18n.locales` no `nuxt.config.ts` e um novo JSON em `i18n/locales/` com as mesmas chaves. Atualize também o mapeamento/lista de locales em `app/composables/useNuxtUiI18n.ts` e o sitemap público.
- **Links dentro da app:** Use `localePath('/caminho')` (ou o nome da rota) para os links manterem o locale. Use `switchLocalePath('es')` (ou outro código) para links que trocam de idioma.
- **SEO:** `app/app.vue` usa o locale do Nuxt UI para idioma/direção e `useLocaleHead` para canonical/hreflang. Títulos e descrições usam chaves de tradução para ficarem em sync.


## Assistentes de desenvolvimento

[AGENTS.md](AGENTS.md) e o [guia técnico](docs/REPOSITORY_GUIDE.md) oferecem contexto compartilhado ao Codex e Cursor. Claude Code e Gemini CLI importam as mesmas instruções pelos arquivos de entrada. O assistente precisa acessar o repo; estes arquivos não criam um chatbot público.

## Contribuir

Issues e pull requests são bem-vindos.

## Licença

MIT.
