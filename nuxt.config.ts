// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: {
    enabled: true
  },
  ssr: true,

  routeRules: {
    '/': { prerender: true },
    '/blog': { isr: true },
    '/blog/**': { isr: false }
  },

  modules: [
    'nuxt-typed-router',
    '@nuxtjs/google-fonts',
    '@nuxt/image',
    '@nuxt/ui',
    'dayjs-nuxt',
    '@stefanobartoletti/nuxt-social-share',
    '@nuxtjs/strapi',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap'
  ],

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
    head: {
      titleTemplate: '%s - Konkamon Sion',
      meta: [
        { name: 'author', content: 'Konkamon Sion' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'charset', content: 'utf-8' }
      ],
      htmlAttrs: {
        lang: 'th'
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [{ rel: 'icon', type: 'image/vnd.microsoft.icon', href: '/favicon.ico' }]
    }
  },
  googleFonts: {
    families: {
      'Space Grotesk': {
        wght: [400, 500, 600, 700, 800, 900]
      },
      'Noto Sans Thai Looped': {
        wght: [400, 600, 700, 800]
      },
      'Fira Code': {
        wght: [400, 600, 700, 800]
      }
    }
  },
  tailwindcss: {
    cssPath: '~/assets/main.css',
    configPath: 'tailwind.config.ts'
  },
  compatibilityDate: '2024-07-04',
  dayjs: {
    locales: ['th'],
    defaultLocale: 'th',
    plugins: ['timezone']
  },
  socialShare: {
    baseUrl: 'https://www.konkamon.live/'
  },
  nitro: {
    compressPublicAssets: true,
    azure: {
      config: {
        platform: {
          apiRuntime: 'node:20'
        }
      }
    },
    netlify: {
      images: {
        remote_images: [`https://res.cloudinary.com/${process.env.CLOUDINARY_KEY}/image/upload/*`]
      }
    }
  },
  pinia: {
    storesDirs: ['./stores/**']
  },
  experimental: {
    externalVue: false
  },
  robots: {
    allow: ['/', '/blog/'],
    disallow: ['/api']
  },
  sourcemap: {
    server: false,
    client: true
  },
  icon: {
    provider: 'server',
    customCollections: [
      {
        prefix: 'my-icon',
        dir: './assets/icons'
      },
    ],
    serverBundle: {
      remote: 'github-raw',
      collections: ['ph', 'simple-icons', 'ic']
    },
    clientBundle: {
      includeCustomCollections: true,
      icons: [
        'ph:monitor-duotone',
        'ph:sun-duotone',
        'ph:moon-duotone',
      ],
      scan: true
    }
  },
  site: {
    url: 'https://www.konkamon.live',
    name: 'เว็บไซต์ Portfolio & Blogs ของนาย กรกมล ศรีอ่อน - สร้างด้วย Nuxt 3 + TailwindCSS.'
  },
  sitemap: {
    sources: [
      '/api/sitemap/urls'
    ],
    excludeAppSources: ['nuxt:route-rules']
  },
  runtimeConfig: {
    strapiUrl: process.env.STRAPI_URL,
    public: {
      strapiUrl: process.env.STRAPI_URL
    }
  }
})