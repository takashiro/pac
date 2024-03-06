import path from 'path';
import url from 'url';

const rootDir = path.dirname(url.fileURLToPath(import.meta.url));

/**
 * Webpack Configuration
 * @param {Record<string, string>} env environment variables
 * @param {Record<string, string>} argv command-line arguments
 * @returns {import('webpack').Configuration} webpack configuration
 */
export default function config(env, argv) {
	const mode = argv && argv.mode === 'development' ? 'development' : 'production';
	return {
		mode,
		entry: {
			pac: './src/index.ts',
		},
		output: {
			library: {
				name: 'FindProxyForURL',
				type: 'var',
				export: 'default',
			},
			path: `${rootDir}/dist`,
			clean: true,
		},
		module: {
			rules: [
				{
					test: /\.ts$/,
					exclude: /node_modules/,
					loader: 'ts-loader',
				},
			],
		},
		resolve: {
			extensions: ['.ts'],
		},
	};
};
