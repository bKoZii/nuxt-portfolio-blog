<template>
  <ClientOnly>
    <UTooltip
      :text="$t('langSwitcher')"
      disable-closing-trigger
    >
      <UButton
        :icon="locale === 'en' ? 'circle-flags:us' : 'circle-flags:th'"
        variant="ghost"
        color="neutral"
        @click="toggleLocale"
      />
    </UTooltip>

    <template #fallback>
      <USkeleton
        class="size-6"
        :ui="{ rounded: 'rounded-full' }"
      />
    </template>
  </ClientOnly>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const toggleLocale = () => {
  locale.value = locale.value === 'en' ? 'th' : 'en'
}
</script>
