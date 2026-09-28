// https://nuxt.com/docs/api/configuration/nuxt-config
import { SITE_URL } from './shared/site'

export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@pinia/nuxt', '@nuxt/image', '@nuxtjs/i18n'],
  image: {
    format: ['webp']
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2025-11-11',
  i18n: {
    baseUrl: SITE_URL,
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    locales: [
      { code: 'en', name: 'English', language: 'en-US', file: 'en.json' },
      { code: 'es', name: 'Español', language: 'es-ES', file: 'es.json' },
      { code: 'pt', name: 'Português', language: 'pt-BR', file: 'pt.json' }
    ],
    // @ts-expect-error: lazy loading is supported at runtime; module types omit this field in some releases
    lazy: true,
    langDir: 'locales',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    }
  }
})
