<template>
  <div class="flex flex-col">
    <a
      v-if="workData.link"
      ref="noopener noreferrer"
      :href="workData.link"
      target="_blank"
      class="hover:text-primary flex shrink-0 gap-2 text-sm sm:text-lg"
    >{{ workData.name }}
      <Icon
        name="ic:baseline-launch"
        mode="svg"
      />
    </a>
    <p
      v-else
      class="text-sm sm:text-lg"
    >
      {{ workData.name }}
    </p>
    <span class="shrink-0 text-xs text-gray-600 sm:text-sm dark:text-gray-400">{{
      workData.description
    }}</span>
  </div>

  <span
    class="hidden grow border-b border-dashed border-gray-300 sm:block dark:border-gray-700"
  />
  <span class="hidden shrink-0 gap-2 text-gray-800 sm:flex dark:text-white">
    <Icon
      :name="workData.icon"
      size="36px"
      mode="svg"
    />
  </span>
</template>

<script lang="ts" setup>
import type workListInterface from '../../types/workListInterface'

defineProps<{
  workData: workListInterface
}>()
</script>
