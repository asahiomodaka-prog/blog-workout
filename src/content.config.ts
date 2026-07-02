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
			heroImage: z.optional(image()),
			genre: z.string().optional(),
			sidebarProducts: z.array(
				z.object({
					title: z.string(),
					url: z.string(),
					imageUrl: z.string().optional(),
					price: z.number().optional(),
				})
			).optional(),
		}),
});

export const collections = { blog };
