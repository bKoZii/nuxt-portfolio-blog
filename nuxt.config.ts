// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@nuxt/content',
    'motion-v/nuxt',
    '@nuxthub/core',
  ],
  devtools: { enabled: true },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  css: ['~/assets/css/main.css'],

  future: {
    compatibilityVersion: 4,
  },
  experimental: {
    noVueServer: true,
  },

  compatibilityDate: '2025-06-03',
  nitro: {
    future: {
      nativeSWR: true,
    },
    prerender: {
      autoSubfolderIndex: false,
      crawlLinks: true,
      routes: ['/en', '/th'],
      ignore: ['/__nuxt_content'],
    },
  },

  vite: {
    vue: {
      features: { optionsAPI: false },
    },
  },
  eslint: {
    config: {
      stylistic: {
        jsx: false,
        braceStyle: '1tbs',
        arrowParens: true,
      },
    },
  },
  fonts: {
    provider: 'google',
    families: [
      {
        name: 'Nunito Sans', display: 'swap', global: true, subsets: ['latin', 'latin-ext'], styles: ['normal'],
      },
      {
        name: 'Noto Sans Thai', display: 'swap', global: true, subsets: ['thai'], styles: ['normal'],
      },
      {
        name: 'Fira Code', display: 'swap', global: true, subsets: ['latin'], styles: ['normal'], weights: [400, 600, 700],
      },
    ],
    defaults: {
      weights: [300, 400, 500, 700, 800],
      styles: ['normal'],
    },
  },
  i18n: {
    bundle: {
      optimizeTranslationDirective: false,
    },
    baseUrl: 'https://www.bkozii.com',
    strategy: 'prefix_and_default',
    defaultLocale: 'en',
    locales: [
      {
        code: 'th',
        language: 'th-TH',
        name: 'ภาษาไทย',
        file: 'th.json',
      },
      {
        code: 'en',
        language: 'en-US',
        name: 'English',
        file: 'en.json',
        isCatchallLocale: true,
      },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_language',
      redirectOn: 'no prefix',
    },
    vueI18n: 'i18n.config.ts',
  },
  icon: {
    customCollections: [
      {
        prefix: 'my-icon',
        dir: './app/assets/icons',
      },
    ],
    provider: 'iconify',
  },
  image: {
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/dqx4sss9s/image/upload',
    },
  },
})
