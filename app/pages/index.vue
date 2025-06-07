<template>
  <main class="space-y-12">
    <Hero />
    <AboutMe />
    <HomeCards />
  </main>
</template>

<script lang="ts" setup>
const { t } = useI18n()
useSeoMeta({
  title: () => t('home.hero.myName'),
  description: 'เว็บไซต์ Portfolio & Blogs ของนาย กรกมล ศรีอ่อน - สร้างด้วย Nuxt 3 + TailwindCSS.',
  author: 'Konkamon Sion',
  ogTitle: '%s - Portfolio & Blogs Website',
  ogDescription: 'เว็บไซต์ Portfolio & Blogs ของนาย กรกมล ศรีอ่อน - สร้างด้วย Nuxt 3 + TailwindCSS.',
  creator: 'Konkamon Sion',
  ogImage: '/ogImage-index.webp',
  ogUrl: 'https://konkamon.vercel.app/',
  ogLocale: 'th_TH',
  ogSiteName: 'Konkamon Sion',
  titleTemplate: '%s - Portfolio & Blogs Website',
})
</script>
