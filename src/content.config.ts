import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Blog posts — drop a new .md file in src/content/blog/ to publish.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['Guides', 'Industry', 'Comparisons', 'Sustainability']),
    date: z.coerce.date(),
    readTime: z.string().default('5 min read'),
    author: z.string().default('Ambika Biotech Team'),
    featured: z.boolean().default(false),
    photoLabel: z.string().default('PHOTO: rice husk ash'),
    tags: z.array(z.string()).default([]),
    seoTitle: z.string().optional(),
  }),
});

export const collections = { blog };
