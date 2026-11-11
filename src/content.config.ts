import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    category: z.enum(['Computational Biology', 'Bioinformatics', 'Virtual Cell', 'Precision Medicine','Digital Twins', 'Education','America', 'China', 'Karate']),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    readingTime: z.string().default('6 min read'),
    accent: z.string().default('#b8ff3d')
  })
});

export const collections = { blog };
