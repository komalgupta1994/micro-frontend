const { merge } = require('webpack-merge'); // use to merge two different webpack config objects
const commonConfig = require('./webpack.common');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const pakageJson = require('../package.json');

const devConfig = {
    mode: 'development',
    devServer: {
        port: 8080,
        historyApiFallback: {
            index: 'index.html'
        }
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'conatiner',
            remotes: {
                marketingApp: 'marketing@http://localhost:8081/marketingEntry.js'
            },
            shared: pakageJson.dependencies
        })
    ]
}

module.exports = merge(commonConfig, devConfig);