import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.md',
      schema: z.object({
        tags: z.array(z.string()),
        dateCreated: z.string().datetime(),
        dateUpdated: z.string().datetime(),
      }),
    }),
  },
})
