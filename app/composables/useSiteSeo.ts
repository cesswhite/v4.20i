import { SITE_NAME, SITE_URL } from '~~/shared/site'

/** Locale head in app.vue owns canonical/hreflang; page metadata uses the same locale route. */
export function useSiteSeo(page: 'home' | 'about') {
  const { t, locale } = useI18n()
  const localePath = useLocalePath()
  const pagePath = page === 'home' ? '/' : '/about'
  const pageUrl = computed(() => `${SITE_URL}${localePath(pagePath).replace(/\/$/, '')}`)
  const title = computed(() => t(`seo.${page}Title`))
  const description = computed(() => t(`seo.${page}Description`))

  useSeoMeta({
    title: () => title.value,
    description: () => description.value,
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    ogTitle: () => title.value,
    ogDescription: () => description.value,
    ogType: 'website',
    ogUrl: () => pageUrl.value,
    ogSiteName: SITE_NAME,
    twitterCard: 'summary',
    twitterTitle: () => title.value,
    twitterDescription: () => description.value,
  })

  useHead(() => ({
    script: [
      {
        key: 'schema-website',
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          '@id': `${SITE_URL}/#website`,
          url: SITE_URL,
          name: SITE_NAME,
          inLanguage: ['en', 'es', 'pt-BR'],
          publisher: { '@id': 'https://www.ecostudios.dev/#organization' },
        }),
      },
      {
        key: 'schema-webpage',
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': page === 'about' ? 'AboutPage' : 'WebPage',
          '@id': `${pageUrl.value}#webpage`,
          url: pageUrl.value,
          name: title.value,
          description: description.value,
          inLanguage: locale.value === 'pt' ? 'pt-BR' : locale.value,
          isPartOf: { '@id': `${SITE_URL}/#website` },
        }),
      },
    ],
  }))
}
