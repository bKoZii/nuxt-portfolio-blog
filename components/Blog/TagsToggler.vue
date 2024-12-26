<template>
  <div>
    <ToggleGroupRoot
      v-model="toggledTags"
      type="multiple"
      class="flex gap-1 rounded-lg shadow-sm"
      @update:model-value="$emit('toggledTags', toggledTags)"
    >
      <div
        v-for="tagItem in $props.tags"
        :key="tagItem.documentId"
      >
        <ToggleGroupItem
          :value="tagItem.name"
          :as-child="true"
        >
          <UBadge
            variant="subtle"
            :ui="{
              base: 'dark:data-[state=on]:bg-primary-600 cursor-pointer data-[state=on]:bg-stone-100 dark:data-[state=on]:text-white',
              variant: {
                subtle: 'hover:bg-primary-500 dark:hover:bg-primary-800 hover:text-white',
              },
            }"
            color="primary"
          >
            {{ tagItem.name }}
          </UBadge>
        </ToggleGroupItem>
      </div>
    </ToggleGroupRoot>
  </div>
</template>

<script lang="ts" setup>
import { ToggleGroupItem, ToggleGroupRoot } from 'reka-ui'
import type { tagsItem } from '~/types/BlogTags'

defineProps<{
  tags: tagsItem[]
}>()

defineEmits(['toggledTags'])
const toggledTags = ref([])
</script>
