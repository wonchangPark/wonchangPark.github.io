import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.string().default("Engineering"),
    author: z.string().default("박원창"),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
    priority: z.number().default(99),
    proof: z.string().optional()
  })
});

export const collections = { blog };
