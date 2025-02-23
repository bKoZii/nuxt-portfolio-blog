// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: [
    'nuxt-typed-router',
    '@nuxtjs/google-fonts',
    '@nuxt/image',
    '@nuxt/ui',
    'dayjs-nuxt',
    '@stefanobartoletti/nuxt-social-share',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    // '@nuxtjs/robots',
    // '@nuxtjs/sitemap',
    '@nuxt/eslint',
    '@formkit/auto-animate/nuxt',
    '@vueuse/nuxt',
    '@vueuse/motion/nuxt',
    '@nuxtjs/i18n',
    '@nuxt/content',
  ],
  ssr: true,
  devtools: {
    enabled: true,
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
    head: {
      titleTemplate: '%s - Konkamon Sion',
      meta: [
        { name: 'author', content: 'Konkamon Sion' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'charset', content: 'utf-8' },
        { name: 'theme-color', content: '#379777' },
      ],
      htmlAttrs: {
        lang: 'th',
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/vnd.microsoft.icon', href: '/favicon.ico' },
      ],
    },
  },
  content: {
    renderer: {
      anchorLinks: false,
    },
    build: {
      markdown: {
        highlight: {
          theme: 'one-dark-pro',
          themes: ['one-dark-pro'],
          langs: ['vue', 'javascript', 'typescript', 'bash'],
        },
      },
    },
  },

  sourcemap: {
    server: false,
    client: true,
  },
  compatibilityDate: '2025-02-23',
  nitro: {
    compressPublicAssets: true,
  },
  dayjs: {
    locales: ['th', 'en'],
    defaultLocale: 'th',
    plugins: ['timezone', 'localeData'],
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
  googleFonts: {
    families: {
      'Albert Sans': {
        wght: [400, 500, 600, 700, 800, 900],
      },
      'Anuphan': {
        wght: [400, 600, 700, 800],
      },
      'Fira Code': {
        wght: [400, 600, 700, 800],
      },
    },
  },
  i18n: {
    baseUrl: 'https://www.konkamon.live',
    strategy: 'no_prefix',
    defaultLocale: 'en',
    lazy: true,
    locales: [
      {
        code: 'th',
        language: 'th-TH',
        name: 'ภาษาไทย',
        file: 'th.json',
        isCatchallLocale: true,
      },
      {
        code: 'en',
        language: 'en-US',
        name: 'English',
        file: 'en.json',
      },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_language',
      fallbackLocale: 'en',
    },
    vueI18n: 'i18n.config.ts',
  },
  icon: {
    provider: 'server',
    customCollections: [
      {
        prefix: 'my-icon',
        dir: './assets/icons',
      },
    ],
    serverBundle: {
      remote: 'github-raw',
      collections: ['ph', 'simple-icons', 'ic', 'mdi', 'circle-flags'],
    },
    clientBundle: {
      includeCustomCollections: true,
      icons: [
        'ph:monitor-duotone',
        'ph:sun-duotone',
        'ph:moon-duotone',
        'circle-flags:us',
        'circle-flags:th',
      ],
      scan: true,
    },
  },
  pinia: {
    storesDirs: ['./stores/**'],
  },
  socialShare: {
    baseUrl: 'https://www.konkamon.live/',
  },
  tailwindcss: {
    cssPath: '~/assets/main.css',
    configPath: 'tailwind.config.ts',
  },
})
