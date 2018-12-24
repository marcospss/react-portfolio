const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

/*
https://webpack.js.org/guides/production/
*/
module.exports = merge(common, {
    plugins: [
        new UglifyJSPlugin({
            parallel: 4
        })
    ]
});