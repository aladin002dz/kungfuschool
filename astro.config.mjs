import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://jeromeabel.github.io',
	// Git Actions
	base: '/kungfuschool',
	integrations: [tailwind(), sitemap()],
	// build: {
	// 	assets: 'assets',
	// 	assetsPrefix: 'https://jeromeabel.github.io/kungfuschool',
	// },
});
