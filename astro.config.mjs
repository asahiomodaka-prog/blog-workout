// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	redirects: {
		'/blog/10mm15mm幅広ヨガマットを自宅トレに導入すべき理由解剖学的安定と筋効率': '/blog/10mm-15mm-wide-yoga-mat-home',
		'/blog/proiron-パワーグリップなぜ狙った筋肉を逃さない宅トレ解剖学の真実': '/blog/proiron-power-grip',
		'/blog/ufit-training-tubeが解剖学的に証明自宅で最強の身体を作る科学的理由': '/blog/ufit-training-tube-science-home-workout',
		'/blog/valx-プロテインで宅トレを科学する効率的な筋肉合成のメカニズム': '/blog/valx-protein-home-workout-muscle',
		'/blog/wpc-100ナチュラルホエイプロテインは宅トレに必須か解剖学から筋肉合成を検証': '/blog/wpc-whey-protein-home-workout',
		'/blog/なぜ今トレーニングベンチ可変式ダンベルか解剖学的メリットで宅トレ効果を最大化': '/blog/home-workout-bench-dumbbell-max',
		'/blog/アルインコ-fa221yの真価解剖学で解き明かす効く宅トレの極意': '/blog/alinco-fa221y-anatomy-workout',
		'/blog/トレーニングボード解体新書分離式が腹筋と体幹を科学的に鍛えるメカニズム': '/blog/split-board-abs-core-science',
		'/blog/宅トレの限界突破nuobell-40kgが叶える漸進性過負荷と解剖学的成長': '/blog/nuobell-40kg-dumbbell',
		'/blog/宅トレ進化論大手ジム採用ラバープレートが解剖学的負荷を最大化する科学的根拠': '/blog/product-post',
	},
	site: 'https://saikyotakutore.ariawriter.com',
	integrations: [mdx(), sitemap()],
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
