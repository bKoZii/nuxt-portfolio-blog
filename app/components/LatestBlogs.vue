<template>
  <div>
    <section class="flex flex-row justify-between items-center mb-6">
      <h2 class="font-bold text-gray-500 dark:text-gray-400 text-lg">
        {{ $t('home.latestBlogs.title') }}
      </h2>
      <UButton
        :label="$t('home.latestBlogs.allBlogsBtn')"
        variant="ghost"
        icon="ph:arrow-right"
        trailing
        to="/blog"
      />
    </section>
    <section
      class="flex flex-col flex-nowrap gap-3"
    >
      <ClientOnly>
        <div
          v-for="post in latestBlogs"
          :key="post.id"
        >
          <BlogCard :blog="post" />
        </div>
        <div v-if="status === 'pending' && !latestBlogs">
          <LazyUAlert
            title="Loading"
            icon="ph:magnifying-glass-duotone"
            description="กำลังโหลด Blog กรุณารอสักครู่"
            color="primary"
            variant="subtle"
          />
        </div>
        <div v-if="error && status === 'error'">
          <LazyUAlert
            title="Error"
            icon="ph:warning-circle-duotone"
            description="เกิดข้อผิดพลาดในการโหลดข้อมูล กรุณาลองใหม่อีกครั้งในภายหลัง"
            color="red"
            variant="subtle"
          />
        </div>
      </ClientOnly>
    </section>
  </div>
</template>

<script lang="ts" setup>
const { data: latestBlogs, status, error } = await useAsyncData('latestBlogs', () => {
  return queryCollection('blog')
    .order('dateUpdated', 'DESC')
    .limit(2)
    .all()
})
</script>
