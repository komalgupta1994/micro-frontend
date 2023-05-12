const HTMLWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    devServer: {
        port: 8082
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'mycart',
            filename: 'cartEntry.js',
            exposes: {
                './CartShow': './src/bootstrap.js'
            },
            shared: ['faker']
        }),
        new HTMLWebpackPlugin({
            template: './public/index.html'
        })
    ]
}