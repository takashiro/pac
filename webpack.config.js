/**
 * Webpack Configuration
 * @param {Record<string, string>} env environment variables
 * @param {Record<string, string>} argv command-line arguments
 * @returns {import('webpack').Configuration} webpack configuration
 */
module.exports = function config(env, argv) {
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
			path: `${__dirname}/dist`,
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
