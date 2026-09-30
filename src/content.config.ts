import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { topicIds, technologyTags, projectIds } from "./lib/taxonomy";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum(topicIds),
    project: z.enum(projectIds).optional(),
    kind: z.enum(["engineering-note", "learning-note"]).default("engineering-note"),
    author: z.string().default("박원창"),
    tags: z.array(z.enum(technologyTags)).max(4),
    featured: z.boolean().default(false),
    priority: z.number().default(99),
    proof: z.string().optional()
  })
});

export const collections = { blog };
