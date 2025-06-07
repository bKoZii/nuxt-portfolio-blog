<template>
  <UModal
    :ui="{ width: 'sm:max-w-2xl' }"
  >
    <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
      <section>
        <ClientOnly>
          <UInput
            v-model="query"
            placeholder="ค้นหาบทความ.."
            class="w-full"
            size="lg"
            leading-icon="ph:magnifying-glass-duotone"
          />
          <ul v-if="result.length > 0 && query">
            <li
              v-for="link of result"
              :key="link.item.id"
              class="mt-2"
            >
              <UCard :ui="{ base: 'text-primary-500', body: { padding: 'p-2 sm:p-3', base: 'flex items-center space-x-3' }, ring: 'hover:ring-primary-500' }">
                <UIcon
                  name="ph:article-duotone"
                  size="30"
                />
                <div>
                  <NuxtLink :to="$resolveRoute(`${link.item.id}`)">
                    <h1
                      class="font-bold"
                      @click="modal.close"
                    >
                      {{ link.item.title }}
                    </h1>
                    <h2
                      v-if="link.item.titles[0]"
                      class="text-sm"
                    >จากโพสต์: {{ link.item.titles[0] }}</h2>
                  </NuxtLink>
                  <span class="text-xs tracking-tight text-gray-500">
                    {{ link.item.content?.slice(0, 100) }}...
                  </span>
                </div>
              </UCard>
            </li>
          </ul>
          <UAlert
            v-else-if="query && result.length === 0"
            title="Not Found"
            color="red"
            class="mt-3"
            variant="subtle"
          />
        </ClientOnly>
      </section>
    </UCard>
  </UModal>
</template>

<script setup lang="ts">
import Fuse from 'fuse.js'
import { UAlert } from '#components'

const modal = useModal()
const query = ref('')
const { data } = await useAsyncData('search-data', () => queryCollectionSearchSections('blog', { ignoredTags: ['h2'] }))

const fuse = new Fuse(data.value ?? [], {
  keys: [{
    name: 'title',
    weight: 0.8,
  }, {
    name: 'description',
    weight: 0.2,
  }],
  threshold: 0.3,
  ignoreDiacritics: true,
  ignoreLocation: true,
  findAllMatches: true,
  includeScore: true,
  useExtendedSearch: true,
})

const result = computed(() => fuse.search(toValue(query)).filter((item) => (item.score ?? 0.7) <= 0.7).slice(0, 10))
</script>
