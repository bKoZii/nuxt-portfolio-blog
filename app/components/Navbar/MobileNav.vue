<template>
  <USlideover
    side="top"
    description="Mobile Navigation"
  >
    <template #title>
      <NuxtLinkLocale
        id="myName"
        to="/"
        class="inline-block items-center text-highlighted"
        aria-label="logo"
      >
        <h1 class="font-mono font-bold text-lg">
          bkozii<span class="font-normal text-sm">.com</span>
        </h1>
      </NuxtLinkLocale>
    </template>
    <template #body>
      <UNavigationMenu
        :items="menu"
        orientation="vertical"
        :ui="{
          link: 'py-3',
        }"
      />
    </template>
  </USlideover>
</template>

<script lang="ts" setup>
import type { NavigationMenuItem } from '@nuxt/ui'

defineProps<{
  menu: NavigationMenuItem[]
}>()
</script>
