<template>
  <div>
    <template
      v-for="social in socialList"
      :key="social.icon"
    >
      <NuxtLink
        :to="social.link"
        target="_blank"
        class="flex items-center gap-2 hover:bg-accented p-2 rounded transition-colors"
      >
        <UIcon
          :name="social.icon"
          class="size-6"
        />
        <span class="text-sm">{{ social.name }} <UIcon
          name="lucide:external-link"
          class="size-3"
        /></span>
      </NuxtLink>
    </template>
  </div>
</template>

<script lang="ts" setup>
import type { ItemWithIcon } from '~/../types/ItemInterface'

const socialList: ItemWithIcon[] = [
  {
    name: 'Instagram',
    icon: 'simple-icons:instagram',
    link: 'https://www.instagram.com/bkoziii/',
  },
  {
    name: 'GitHub',
    icon: 'simple-icons:github',
    link: 'https://github.com/bKoZii',
  },
]
</script>
