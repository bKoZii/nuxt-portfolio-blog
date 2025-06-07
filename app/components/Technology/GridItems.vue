<template>
  <div>
    <div class="flex flex-col overflow-auto">
      <h3 class="mb-2 font-bold">
        {{ title }}
      </h3>
      <div class="flex flex-row flex-wrap justify-center sm:justify-start space-x-1 text-white">
        <div
          v-for="item in technologyData"
          :key="item.name"
        >
          <UTooltip
            :text="item.name"
            :arrow="true"
            class="group"
            :content="{ side: 'top' }"
          >
            <UAvatar
              :icon="item.icon"
              size="lg"
              :ui="{
                icon: 'text-highlighted group-hover:text-muted',
                root: 'rounded',
              }"
            />
          </UTooltip>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type FrameworkListInterface from '~/../types/FrameworkListInterface'

defineProps({
  technologyData: {
    type: Array as () => FrameworkListInterface[],
    required: true,
  },
  title: String,
})
</script>
