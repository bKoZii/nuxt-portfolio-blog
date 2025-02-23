<!-- <template>
  <div class="border dark:border-gray-700 dark:bg-gray-900">
    <span>{{ filename }}</span>
  </div>
  <pre
    :class="$props.class"
    class="mt-0 dark:bg-black"
  ><slot /></pre>
</template> -->
<template>
  <div class="relative">
    <div
      v-if="$props.filename"
      class="rounded-t-lg border border-neutral-600 bg-neutral-900 p-2 text-sm dark:border-b-0 dark:border-neutral-800 dark:bg-neutral-900"
    >
      <div class="flex flex-row flex-nowrap items-center justify-between gap-2 text-white">
        <span>{{ $props.filename }}</span>
        <UButton
          variant="soft"
          class="p-1"
          :color="copied ? 'primary' : 'white'"
          size="xs"
          :icon="copied ? 'ph:check-square-duotone' : 'ph:clipboard-duotone'"
          aria-label="Copy Code"
          :label="copied ? 'Copied!' : 'Copy Code'"
          @click="copy(code as string)"
        />
      </div>
    </div>
    <div v-else>
      <UButton
        variant="solid"
        class="absolute right-0 m-2 p-1"
        :color="copied ? 'primary' : 'white'"
        size="xs"
        :icon="copied ? 'ph:check-square-duotone' : 'ph:clipboard-duotone'"
        aria-label="Copy Code"
        :label="copied ? 'Copied!' : 'Copy Code'"
        @click="copy(code as string)"
      />
    </div>
    <pre
      :class="`${$props.class} ${$props.filename ? 'rounded-t-none' : 'rounded-t-lg'} prose-pre:m-0 m-0 !mt-0 tracking-normal`"
    ><slot /></pre>
  </div>
</template>

<script setup lang="ts">
defineProps({
  code: {
    type: String,
    default: '',
    required: true,
  },
  language: {
    type: String,
    default: null,
    required: false,
  },
  filename: {
    type: String,
    default: null,
    required: false,
  },
  highlights: {
    type: Array as () => number[],
    default: () => [],
    required: false,
  },
  meta: {
    type: String,
    default: null,
    required: false,
  },
  class: {
    type: String,
    default: null,
    required: false,
  },
})
const toast = useToast()
const { copy, copied } = useClipboard()

watch(copied, (value) => {
  if (value === true) {
    toast.add({
      title: 'Copied!',
      description: 'คัดลอก Code ไปยัง Clipboard แล้ว!',
      icon: 'ph:check-circle-duotone',
    })
  }
})
</script>

<style>
pre code .line {
  display: block;
}
</style>
