<template>
  <main>
    <Hero />
    <FullBleedBorder />
    <AboutMe />
    <FullBleedBorder />
    <HomeTechStack />
    <FullBleedBorder />
    <FeaturedWork />
  </main>
</template>

<script lang="ts" setup>
const { t } = useI18n()
useSeoMeta({
  title: () => t('home.hero.myName'),
  description: () => t('seo.description'),
  author: 'Konkamon Sion',
  ogTitle: () => `${t('home.hero.myName')} - Portfolio & Blogs Website`,
  ogDescription: () => t('seo.description'),
  creator: 'Konkamon Sion',
  ogImage: '/ogImage-index.webp',
  ogUrl: 'https://www.bkozii.com/',
  ogSiteName: 'Konkamon Sion',
  titleTemplate: '%s - Portfolio & Blogs Website',
})
</script>
