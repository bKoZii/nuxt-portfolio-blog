<template>
  <div>
    <PageHeader
      :title="$t('blogs.title')"
      :description="$t('blogs.subtitle')"
    />

    <section class="mt-3">
      <UButton
        label="ค้นหาบทความ..."
        leading-icon="ph:magnifying-glass-duotone"
        class="w-full cursor-pointer border dark:border-gray-700"
        size="lg"
        variant="soft"
        color="gray"
        @click="openBlogSearchModal"
      />
    </section>
    <UDivider class="my-5" />
    <section class="flex flex-col gap-2">
      <template
        v-for="blog in blogs"
        :key="blog.id"
      >
        <BlogCard :blog="blog" />
      </template>
    </section>
  </div>
</template>

<script setup lang="ts">
import { LazyBlogSearchModal } from '#components'

const currentPage = ref(1)
const { data: blogs } = await useAsyncData(() => {
  return queryCollection('blog').order('dateUpdated', 'DESC').skip(currentPage.value).all()
}, {
  watch: [currentPage],
})

const modal = useModal()

const openBlogSearchModal = () => {
  try {
    modal.open(LazyBlogSearchModal)
  } catch (error) {
    console.error(error)
  }
}

useSeoMeta({
  title: 'Blogs',
  ogTitle: '%s - Konkamon Sion',
  description: 'รวม Blog ต่างๆ ทั้งด้าน IT, Tips และอื่นๆ จากนาย กรกมล ศรีอ่อน',
  ogDescription: 'รวม Blog ต่างๆ ทั้งด้าน IT, Tips และอื่นๆ จากนาย กรกมล ศรีอ่อน',
  ogImage: '/ogImage-blogs.webp',
  ogUrl: 'https://www.konkamon.live/blog',
})
</script>
