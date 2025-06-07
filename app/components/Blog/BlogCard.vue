<template>
  <template v-if="blog">
    <NuxtLink
      :to="$resolveRoute(`${blog.path}`)"
    >
      <UCard
        :ui="{
          base: 'hover:text-primary-500 dark:hover:text-primary-500 relative flex h-full items-center transition-all duration-100',
          ring: 'hover:ring-primary-300 ring-1 dark:hover:ring-2 dark:hover:ring-ocean-green-700',
          background: 'dark:bg-neutral-900',
          shadow: 'shadow hover:shadow-md dark:shadow-none',
          body: {
            padding: 'p-0 sm:px-0 sm:py-0 md:p-0',
          },
        }"
      >
        <div class="flex flex-row items-center gap-4 p-4 md:gap-6">
          <div>
            <h1 class="text-balance text-base font-semibold md:text-lg">
              {{ blog.title }}
            </h1>
            <p
              class="mt-1 line-clamp-2 text-balance text-xs text-neutral-600 dark:text-neutral-300"
            >
              {{ blog.description }}
            </p>
            <section class="mt-4 flex flex-col flex-wrap gap-3 md:mt-2 md:flex-row">
              <div
                class="flex flex-row flex-nowrap items-center gap-1 text-neutral-800 dark:text-neutral-300"
              >
                <UTooltip
                  :text="useFormatDate(blog.dateCreated)"
                  :ui="{ wrapper: 'inline-flex gap-1' }"
                  :popper="{
                    arrow: true,
                    strategy: 'absolute',
                    offsetDistance: 15,
                    placement: 'top',
                  }"
                >
                  <UIcon
                    name="ph:calendar-dots-duotone"
                    class="size-4"
                  />
                  <span class="text-xs">{{ `${useRelativeDate(blog.dateCreated)}` }}</span>
                </UTooltip>
              </div>
              <UDivider
                orientation="vertical"
                class="hidden md:block"
              />
              <div
                v-if="blog.tags"
                class="flex gap-1"
              >
                <div
                  v-for="category in blog.tags"
                  :key="category"
                >
                  <UBadge
                    size="xs"
                    color="primary"
                    variant="soft"
                    :ui="{
                      base: 'z-10 h-full',
                    }"
                  >
                    {{ category }}
                  </UBadge>
                </div>
              </div>
            </section>
          </div>
        </div>
      </UCard>
    </NuxtLink>
  </template>
</template>

<script lang="ts" setup>
import type { BlogCollectionItem } from '@nuxt/content'

defineProps<{ blog: BlogCollectionItem }>()
</script>
