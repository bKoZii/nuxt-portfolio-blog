<template>
  <div>
    <PageHeader
      :title="$t('project.title')"
      :description="$t('project.subtitle')"
    />
    <ClientOnly>
      <section class="space-y-18">
        <template
          v-for="(project, index) in projects"
          :key="project.id"
        >
          <ProjectListItem
            :project="project"
            :reverse="index % 2 === 1"
          />
        </template>
      </section>
    </ClientOnly>
  </div>
</template>

<script lang="ts" setup>
const { locale } = useI18n()
const { data: projects } = await useAsyncData(`projects-${locale.value}`, () => {
  return queryCollection(`projects`)
    .where('stem', 'LIKE', '%.' + locale.value)
    .order('date', 'DESC')
    .all()
}, { watch: [locale] })

useSeoMeta({
  title: 'รวมโปรเจค',
  ogTitle: '%s - Konkamon Sion',
  description: 'รวมโปรเจค / ชิ้นงาน ต่างๆ ผมเป็นคนที่ชอบทำงาน / โปรเจคอะไรเล็กๆ น้อยๆ โดย List ต่อไปนี้จะเลือกเฉพาะงานที่พอจะนำมาเสนอได้',
  ogDescription: 'รวมโปรเจค / ชิ้นงาน ต่างๆ ผมเป็นคนที่ชอบทำงาน / โปรเจคอะไรเล็กๆ น้อยๆ โดย List ต่อไปนี้จะเลือกเฉพาะงานที่พอจะนำมาเสนอได้',
  ogImage: '/ogImage-projects.webp',
  ogUrl: 'https://konkamon.vercel.app/Projects',
})
</script>
