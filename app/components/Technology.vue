<template>
  <div class="flex flex-col space-y-3">
    <TechnologyGridItems
      title="Languages"
      :technology-data="languageList"
    />
    <TechnologyGridItems
      title="Frameworks"
      :technology-data="frameworkList"
    />
    <TechnologyGridItems
      title="Softwares / Services"
      :technology-data="softwareList"
    />
  </div>
</template>

<script lang="ts" setup>
import type FrameworkListInterface from '~/../types/FrameworkListInterface'

const languageList: FrameworkListInterface[] = [
  {
    name: 'TypeScript',
    icon: 'simple-icons:typescript',
  },
  {
    name: 'JavaScript',
    icon: 'simple-icons:javascript',
  },
  {
    name: 'Python',
    icon: 'simple-icons:python',
  },
  {
    name: 'HTML',
    icon: 'simple-icons:html5',
  },
  {
    name: 'CSS',
    icon: 'simple-icons:css3',
  },
]

const frameworkList: FrameworkListInterface[] = [
  {
    name: 'VueJS',
    icon: 'simple-icons:vuedotjs',
  },
  {
    name: 'Angular',
    icon: 'simple-icons:angular',
  },
  {
    name: 'Nuxt',
    icon: 'simple-icons:nuxtdotjs',
  },
  {
    name: 'TailwindCSS',
    icon: 'simple-icons:tailwindcss',
  },
  {
    name: 'Quasar',
    icon: 'simple-icons:quasar',
  },
  {
    name: 'Ionic',
    icon: 'simple-icons:ionic',
  },
]

const softwareList: FrameworkListInterface[] = [
  {
    name: 'Visual Studio Code',
    icon: 'simple-icons:visualstudiocode',
  },
  {
    name: 'GitHub',
    icon: 'simple-icons:github',
  },
  {
    name: 'Firebase',
    icon: 'simple-icons:firebase',
  },
]
</script>
