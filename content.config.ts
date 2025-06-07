import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'blog/*.md',
      schema: z.object({
        tags: z.array(z.string()),
        dateCreated: z.string().datetime(),
        dateUpdated: z.string().datetime(),
      }),
    }),
    projects: defineCollection({
      type: 'data',
      source: 'projects/**.yml',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.string().date(),
        image: z.string().optional(),
        githubURL: z.string().url().optional(),
        technologies: z.array(z.string()),
        wip: z.boolean().default(false),
      }),
    }),
  },
})
