import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

const skills = defineCollection({
  loader: file("./src/content/skills.json"),
  schema: z.array(
    z.object({
      name: z.string(),
      badge: z.url(),
    })
  ),
});

const projects = defineCollection({
  loader: file("./src/content/projects/projects.json"),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      image: image().optional(),
      imageAlt: z.string().optional(),
      tags: z.array(z.string()),
      url: z.url(),
      featured: z.boolean().optional(),
      order: z.int(),
    })
})

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.md" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      publishDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      image: image().optional(),
      imageAlt: z.string().optional(),
      tags: z.array(z.string()),
      draft: z.boolean().optional(),
    }),
});

export const collections = { skills, projects, blog };
