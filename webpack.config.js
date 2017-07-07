'use strict'

const path = require('path')
const webpack = require('webpack')

let baseConfig = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, './build'),
        filename: 'index.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: [
                        ["es2015", { "modules": false }]
                    ],
                    cacheDirectory: true
                }
            }
        ]
    },
    plugins: []
}


if (process.env.NODE_ENV === 'prod') {
    baseConfig.plugins = [
        new webpack.EnvironmentPlugin(['NODE_ENV']),
        new webpack.optimize.UglifyJsPlugin()
    ]
}

module.exports = baseConfig