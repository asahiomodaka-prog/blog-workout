import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.string().optional(),
			genre: z.string().optional(),
			mediaType: z.string().optional(),
			category: z.string().optional(),
			tags: z.array(z.string()).optional(),
			faq: z.array(
				z.object({
					question: z.string(),
					answer: z.string(),
				})
			).optional(),
			rating: z.object({
				score: z.number().min(1).max(5).default(4.5),
				count: z.number().default(1),
			}).optional(),
			sidebarProducts: z.array(
				z.object({
					title: z.string(),
					url: z.string(),
					imageUrl: z.string().optional(),
					price: z.number().optional(),
					microCopy: z.string().optional(),
				})
			).optional(),
		}),
});

export const collections = { blog };
