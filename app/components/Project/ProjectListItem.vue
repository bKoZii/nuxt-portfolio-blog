<template>
  <div
    class="flex md:flex-row flex-col md:items-center gap-4 md:gap-8 mx-auto px-4"
    :class="{ 'md:flex-row-reverse': $props.reverse }"
  >
    <div
      class="flex flex-1 justify-center"
    >
      <NuxtImg
        v-if="$props.project.image"
        :src="$props.project.image"
        alt="Image of project"
        class="shadow-md dark:shadow-none rounded-lg ring-primary light:ring-2 w-full max-w-sm h-auto object-cover"
      />
    </div>

    <div class="flex-1/4 lg:flex-1 text-sm md:text-base">
      <NuxtTime
        v-if="$props.project.date"
        :datetime="$props.project.date"
        year="numeric"
        month="long"
        :locale="$i18n.locale"
        class="inline-block mb-3 text-muted text-sm"
      />
      <h2 class="font-bold text-highlighted text-xl md:text-2xl">
        {{ $props.project.title }}
      </h2>
      <p class="text-muted">
        {{ $props.project.description }}
      </p>
      <section class="space-x-1 my-4">
        <template
          v-for="tech in $props.project.technologies"
          :key="tech"
        >
          <UBadge
            :label="tech"
            variant="subtle"
          />
        </template>
      </section>
      <ULink
        v-if="!$props.project.wip"
        class="inline-block mt-1"
        inactive-class="text-primary"
        :to="$props.project.githubURL"
        target="_blank"
        external
      >
        View Source Code
        <UIcon
          name="lucide:external-link"
          class="inline-block size-4"
        />
      </ULink>
      <UAlert
        v-else-if="$props.project.wip"
        variant="subtle"
        color="warning"
        icon="solar:code-square-linear"
        :title="$t('project.wip')"
        class="mt-4"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ProjectsCollectionItem } from '@nuxt/content'

defineProps<{
  project: ProjectsCollectionItem
  reverse?: boolean
}>()
</script>
