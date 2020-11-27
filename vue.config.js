module.exports = {
	css: {
		loaderOptions: {
			sass: {
				prependData: `@import '@/sass/_variables.scss';
					@import "@/sass/_mixins.scss";`,
			},
		},
	},
	pwa: {
		name: 'My App',
		themeColor: '#4DBA87',
		msTileColor: '#000000',
		appleMobileWebAppCapable: 'yes',
		appleMobileWebAppStatusBarStyle: 'black',
	},
};
