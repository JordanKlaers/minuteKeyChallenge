const path = require("path");

module.exports = {
    configureWebpack: {
        resolve: {
            extensions: ['.js'],
            alias: {
                '_assets_': path.resolve(__dirname, './src/assets/'),
				'_components_': path.resolve(__dirname, './src/components/'),
                '_store_': path.resolve(__dirname, './src/store/'),
                '_templates_': path.resolve(__dirname, './src/templates/')
            }
        }
    },
	publicPath: '/minuteKeyChallenge/',
	outputDir: 'docs'
}