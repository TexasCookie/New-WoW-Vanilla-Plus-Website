import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const news = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/data/news' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string(),
    category: z.enum(['announcement', 'patch-notes', 'maintenance', 'event']),
    image: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const features = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/data/features' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['class', 'profession', 'dungeon', 'raid', 'pvp', 'general']),
    icon: z.string().optional(),
    order: z.number().optional(),
    draft: z.boolean().default(false),
  }),
});

const rules = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/data/rules' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    section: z.string(),
    order: z.number(),
  }),
});

const rewards = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/data/rewards' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tier: z.string(),
    amount: z.string(),
  }),
});

export const collections = { news, features, rules, rewards };
