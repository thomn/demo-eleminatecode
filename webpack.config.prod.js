const webpack = require('webpack')

process.env.NODE_ENV = 'prod'

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/build',
        filename: 'indexProd.js'
    },
    plugins: [
        new webpack.EnvironmentPlugin(['NODE_ENV']),
        new webpack.optimize.UglifyJsPlugin()
    ]
}