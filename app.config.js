// Versions are auto updated during release process. Please don't edit manually.
export const VERSION = '1.0.0';
export const VERSION_CODE = 100000000;

export default {
	name: 'Markdown Plugin',
	slug: 'plugin-markdown',
	description: 'Markdown Component for BlueBase Apps',
	version: VERSION,
	githubUrl: 'https://github.com/BlueBaseJS/plugin-markdown',
	orientation: 'portrait',
	icon: './assets/icon.png',
	entryPoint: './node_modules/expo/AppEntry.js',
	scheme: 'bluebase',
	splash: {
		image: './assets/splash.png',
		resizeMode: 'cover',
		backgroundColor: '#ffffff'
	},
	updates: {
		fallbackToCacheTimeout: 0
	},
	assetBundlePatterns: [
		'**/*'
	],
	ios: {
		supportsTablet: true
	},
	android: {
		versionCode: VERSION_CODE,
		adaptiveIcon: {
			foregroundImage: './assets/adaptive-icon.png',
			backgroundColor: '#FFFFFF'
		}
	},
	web: {
		favicon: './assets/favicon.png'
	},
	extra: {
		storybookNative: process.env.NODE_ENV === 'STORYBOOK_NATIVE'
	}
};
