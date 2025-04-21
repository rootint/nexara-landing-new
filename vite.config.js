import { paraglideVitePlugin } from '@inlang/paraglide-js';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
	plugins: [
		paraglideVitePlugin({
			project: './project.inlang',
			outdir: './src/lib/paraglide',
			strategy: ['url', 'cookie', 'baseLocale'],
			urlPatterns:
			[
				{
					pattern: "/",
					localized: [
						["ru", "/"],
						["en", "/en"],
					],
				},
				{
					pattern: "/:path(.*)?",
					localized: [
						["ru", "/:path(.*)?"],
						["en", "/en/:path(.*)?"],
					],
				},
			]
		}),
		sveltekit()
	],
	resolve: {
		alias: {
			$lib: path.resolve(__dirname, './src/lib'),
			$paraglide: path.resolve(__dirname, './src/lib/paraglide')
		}
	}
});
