module.exports = {
	env: {
		es2021: true,
	},
	extends: [
		'airbnb-base',
		'plugin:@typescript-eslint/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 13,
		sourceType: 'module',
	},
	plugins: [
		'@typescript-eslint',
	],
	rules: {
		'linebreak-style': 'off',
		indent: [
			'error',
			'tab',
		],
		'no-tabs': 'off',
	},
};
