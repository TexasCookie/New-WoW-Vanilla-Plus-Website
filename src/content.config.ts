import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const news = defineCollection({
  loader: glob({ base: './src/content/news', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    category: z.string(),
    pubDate: z.coerce.date(),
    draft: z.boolean().default(false),
    heroLabel: z.string().optional(),
  }),
});

export const collections = { news };
