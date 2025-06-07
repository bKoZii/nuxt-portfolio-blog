<template>
  <div>
    <article>
      <section>
        <BlogSlugHeader
          v-if="blogSlug"
          :blog-slug="blogSlug"
        />
      </section>
      <section
        v-if="blogSlug"
        class="prose dark:prose-invert max-w-none"
      >
        <UDivider class="my-4" />
        <ContentRenderer
          :value="blogSlug"
        />
      </section>
      <div
        v-else
        class="text-center"
      >
        <h1 class="text-primary-500 mb-3 text-5xl font-bold">
          404
        </h1>
        <p class="text-lg">
          {{ $t("blogs.notFound", { path: route.path.split('/').at(2) }) }}
        </p>
      </div>
    </article>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()
const { data: blogSlug } = await useAsyncData(route.path, () => {
  return queryCollection('blog').path(route.path).first()
})
useSeoMeta({
  title: () => blogSlug.value?.title ?? '',
  ogTitle: '%s [Blogs - Konkamon]',
  titleTemplate: '%s [Blogs - Konkamon]',
  description: () => blogSlug.value?.description,
  ogDescription: () => blogSlug.value?.description,
  // ogImage: blogSlug.value?.mainImage.url,
  ogImageType: 'image/png',
  ogImageAlt: `รูปภาพปกประจำโพสต์ ${() => blogSlug.value?.title}`,
  // ogImageSecureUrl: blogSlug.value?.mainImage.url,
  // ogUrl: () => `${site.}/${blogSlug.value?.slug}`,
  publisher: 'Konkamon Sion',
  robots: {
    index: true,
  },
  ogType: 'article',
  articlePublishedTime: blogSlug.value?.dateCreated,
  articleModifiedTime: blogSlug.value?.dateUpdated,
  articleTag: blogSlug.value?.tags,
  articleAuthor: ['Konkamon Sion'],
  author: 'Konkamon Sion',
})
</script>
