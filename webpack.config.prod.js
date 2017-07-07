'use strict'

const path = require('path')
const webpack = require('webpack')

process.env.NODE_ENV = 'prod'

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, './build'),
        filename: 'indexProd.js'
    },
    plugins: [
        new webpack.EnvironmentPlugin(['NODE_ENV']),
        new webpack.optimize.UglifyJsPlugin()
    ]
}