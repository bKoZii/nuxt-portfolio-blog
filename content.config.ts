import { defineContentConfig, defineCollection, z } from '@nuxt/content'

const projectSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.string().datetime(),
  image: z.string(),
  githubURL: z.string().url().optional(),
  technologies: z.array(z.string()),
  wip: z.boolean().default(false),
  featured: z.boolean().default(false),
})

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
    projects_en: defineCollection({
      type: 'data',
      source: 'en/projects/*.json',
      schema: projectSchema,
    }),
    projects_th: defineCollection({
      type: 'data',
      source: 'th/projects/*.json',
      schema: projectSchema,
    }),
  },
})
