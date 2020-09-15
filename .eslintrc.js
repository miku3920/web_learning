module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		'plugin:react/recommended',
		'airbnb',
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: [
		'react',
	],
	rules: {
		'react/jsx-filename-extension': [
			'error',
			{ 'extensions': ['.js', '.jsx'] },
		],
		'react/jsx-indent-props': [
			'error',
			'tab',
		],
		'react/jsx-indent': [
			'error',
			'tab',
		],
		'no-tabs': 'off',
		'indent': [
			'error',
			'tab',
		],
		'comma-dangle': [
			'error',
			'always-multiline',
		],
		'linebreak-style': [
			'error',
			'windows',
		],
		'quote-props': [
			'error',
			'consistent',
		],
	},
};
