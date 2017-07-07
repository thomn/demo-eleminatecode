'use strict'

const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, './build'),
        filename: 'indexDev.js'
    }
}