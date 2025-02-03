import { defineCollection, z } from 'astro:content';

import { file } from 'astro/loaders';

const projects = defineCollection({
  loader: file('src/data/projects.json'),
  schema: z.object({
    title: z.string(),
    company: z.string(),
    duration: z.string(),
    technologies: z.array(z.string()),
    description: z.string(),
    bullets: z.array(z.string()),
  }),
});

export const collections = { projects };
