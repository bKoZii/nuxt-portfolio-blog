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
  },
})
