// webpack.config.dev.js
var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: [
        './public/js/main'
    ],
    output: {
        path: path.join(__dirname, 'public/dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js']
    },
    stats: {
        colors: true
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015']
            }
        }]
    }
};