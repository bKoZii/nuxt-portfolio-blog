<template>
  <div>
    <section
      class="dark:prose-invert prose-h1:m-0 py-8 sm:py-12 max-w-none lg:text-left text-center prose prose-sm md:prose-base"
    >
      <h1>{{ $props.title }}</h1>
      <p class="text-balance">
        {{ $props.description }}
      </p>
    </section>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  title: String,
  description: String,
})
</script>
