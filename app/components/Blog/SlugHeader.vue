<template>
  <div v-if="blogSlug">
    <section class="hidden sm:block">
      <UBreadcrumb
        divider="/"
        :links="[{ label: 'Konkamon\'s Blog', to: '/blog' }, { label: blogSlug.title }]"
      />
      <UDivider class="my-4" />
    </section>
    <section class="flex flex-col gap-5">
      <div
        class="prose prose-sm md:prose-base dark:prose-invert prose-h1:m-0 prose-p:my-3 flex max-w-none flex-col gap-6"
      >
        <div>
          <h1 class="text-2xl">
            {{ blogSlug.title }}
          </h1>
          <p class="text-xs sm:text-sm">
            {{ blogSlug.description }}
          </p>
          <section
            v-if="blogSlug.tags"
            class="flex flex-row gap-2"
          >
            <div
              v-for="tag in blogSlug.tags"
              :key="tag"
            >
              <UBadge variant="subtle">
                {{ tag }}
              </UBadge>
            </div>
          </section>
        </div>
        <div class="not-prose flex flex-col flex-nowrap gap-1">
          <div class="flex flex-row items-center space-x-2">
            <UIcon
              name="ph:calendar-dots-duotone"
              class="size-5"
            />
            <p class="m-0 text-sm">
              {{ `${useFormatDate(blogSlug.dateCreated ?? '')}` }}
            </p>
          </div>
          <p
            v-if="blogSlug.dateUpdated"
            class="m-0 text-xs italic text-neutral-500"
          >
            {{ `แก้ไขล่าสุดเมื่อ: ${useFormatDate(blogSlug.dateCreated ?? '')}` }}
          </p>
        </div>
      </div>
      <!-- <NuxtImg
        :src="blogSlug.mainImage.url"
        class="rounded-lg shadow-lg"
      /> -->
    </section>
  </div>
</template>

<script lang="ts" setup>
import type { BlogCollectionItem } from '@nuxt/content'

defineProps<{
  blogSlug: BlogCollectionItem
}>()
</script>
