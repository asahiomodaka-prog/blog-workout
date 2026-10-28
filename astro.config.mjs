// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://saikyotakutore.ariawriter.com',
	integrations: [mdx(), sitemap({
		serialize(item) {
			item.lastmod = new Date().toISOString();
			item.changefreq = 'weekly';
			item.priority = item.url === 'https://coffeegurasi.ariawriter.com/' || item.url === 'https://saikyotakutore.ariawriter.com/' || item.url === 'https://yohukashinomeisakudana.ariawriter.com/' || item.url === 'https://en-manga.ariawriter.com/' ? 1.0 : 0.8;
			return item;
		}
	})],
	image: {
		domains: [
			'thumbnail.image.rakuten.co.jp',
			'ebook-assets.dmm.com',
			'pics.dmm.co.jp',
			'pics.dmm.com'
		]
	},
	fonts: [
		{
			provider: fontProviders.local(),
			name: 'Atkinson',
			cssVariable: '--font-atkinson',
			fallbacks: ['sans-serif'],
			options: {
				variants: [
					{
						src: ['./src/assets/fonts/atkinson-regular.woff'],
						weight: 400,
						style: 'normal',
						display: 'swap',
					},
					{
						src: ['./src/assets/fonts/atkinson-bold.woff'],
						weight: 700,
						style: 'normal',
						display: 'swap',
					},
				],
			},
		},
	],
});
