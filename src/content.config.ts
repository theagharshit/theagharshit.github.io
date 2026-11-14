import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// One Markdown file per project in src/content/work/. The file name is the URL: /work/<file-name>/
const work = defineCollection({
  loader: glob({ base: './src/content/work', pattern: '*.md' }),
  schema: z.object({
    title: z.string(),
    summary: z.string().max(160),
    kind: z.string(),                     // e.g. "Client project", "Internal tool"
    status: z.string(),                   // e.g. "Live", "In build"
    year: z.string().optional(),          // leave out when not known
    stack: z.array(z.string()).default([]),
    link: z.string().url().optional(),    // public link, only if the work is public
    order: z.number(),                    // lower comes first
    home: z.boolean().default(false),     // show on the home page
    result: z.string().optional()         // one measured result, only if real
  })
});

export const collections = { work };
