# Working with v4.20i

- Start with [the repository guide](docs/REPOSITORY_GUIDE.md), then read only the files relevant to the task. Skip dependencies and generated output during code discovery.
- This is the internationalized Nuxt starter/demo, not a production account or payment service. Answer in the user's language and cite source files and symbols. Distinguish current behavior from proposed additions; questions do not request edits by themselves.
- Read `package.json`, `bun.lock` and current source for exact versions and behavior. Preserve unrelated working-tree changes; never include them in a documentation commit.
- Preserve UI, translations and visible copy for SEO/documentation tasks. Do not change dependencies, authentication or data storage incidentally.
- Locale routes use `prefix_except_default`: English is unprefixed, Spanish `/es`, Portuguese `/pt`. Keep locale links, message keys, Nuxt UI locale mapping and the sitemap aligned when locales change.
- `app/app.vue` owns `useLocaleHead` canonical/hreflang output. `app/composables/useSiteSeo.ts` supplies page metadata/schema. Do not create duplicate canonical owners.
- Persistent demo names and theme preferences are browser-local; do not describe them as server accounts or an authenticated identity.
- Use Bun with the existing lockfile. For docs, check links and commands; for code changes, use the guide's build/typecheck and route checks and report actual outcomes.
- Keep developer guides out of `public/`. Public `llms.txt` is factual product context, not agent rules or guaranteed indexing.
- Update the guide alongside changes to commands, routes, storage or architecture. Keep Claude/Gemini wrappers importing this shared file.
