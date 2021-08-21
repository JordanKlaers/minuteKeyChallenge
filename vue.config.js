const path = require("path");

module.exports = {
    configureWebpack: {
        resolve: {
            extensions: ['.js'],
            alias: {
                '_assets_': path.resolve(__dirname, './src/assets/'),
                '_store_': path.resolve(__dirname, './src/store/')
            }
        }
    }
}