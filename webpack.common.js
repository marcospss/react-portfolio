const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const path = require('path');
const precss = require('precss');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TransferWebpackPlugin = require('transfer-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const PATHS = {
    app: path.join(__dirname, './app'),
    build: path.join(__dirname, './public')
};

// const bundleExtractPlugin = new ExtractTextPlugin({
//     filename: 'css/main.css',
// });

// const vendorsExtractPlugin = new ExtractTextPlugin({
//     filename: 'css/dashboard.css',
// });

module.exports = {
    entry: [
        './app/index.jsx',
        'react-redux-toastr/src/styles/index.scss',
        'font-awesome/scss/font-awesome.scss',
        './app/assets/site/main.scss',
        // './app/assets/dashboard/material-dashboard.scss'
    ],
    output: {
        // path: __dirname + '/public',
        pathinfo: true,
        path: PATHS.build,
        filename: './app.js'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            modules: __dirname + '/node_modules'
        }
    },
    module: {
        loaders: [{
                test: /.js[x]?$/,
                loader: 'babel-loader',
                include: PATHS.app,
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react'],
                    plugins: ['transform-object-rest-spread']
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.(scss)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader', // translates CSS into CommonJS modules
                    }, {
                        loader: 'postcss-loader', // Run post css actions
                        options: {
                            plugins() {
                                // post css plugins, can be exported to postcss.config.js
                                return [
                                    precss,
                                    autoprefixer
                                ];
                            }
                        }
                    }, {
                        loader: 'sass-loader', // compiles SASS to CSS
                    }]
                })
            },

            // {
            //     test: /.scss$/,
            //     exclude: [/node_modules/],
            //     use: bundleExtractPlugin.extract({
            //         use: ['css-loader', 'sass-loader'],
            //     }),
            // },
            // {
            //     test: /.scss$/,
            //     exclude: [/node_modules/],
            //     use: vendorsExtractPlugin.extract({
            //         use: ['css-loader', 'sass-loader'],
            //     }),
            // },
            {
                test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: 'url-loader?limit=10000',
            },
            {
                test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
                use: 'file-loader',
            },

            // {
            //     test: /\.(jpe?g|png|gif|svg)$/i,
            //     use: [
            //         'file-loader?name=images/[name].[ext]',
            //         // 'file-loader?name=[name].[ext]&outputPath=images/&publicPath=images/',
            //         'image-webpack-loader'
            //     ]
            // },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                        limit: 8000, // Convert images < 8kb to base64 strings
                        name: '[name].[ext]?[hash]',
                        outputPath: 'assets/images/',
                        publicPath: 'assets/images/'
                    }
                }]
            },
            {
                test: /font-awesome\.config\.js/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'font-awesome-loader' }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin([PATHS.build]),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: `${PATHS.app}/common/template/index.html`,
            inject: 'body'
        }),
        new ExtractTextPlugin({
            filename: './[name].bundle.css',
            allChunks: true
        }),
        // bundleExtractPlugin,
        // vendorsExtractPlugin,
        // new TransferWebpackPlugin([
        //     { from: PATHS.app },
        // ]),
        new CopyWebpackPlugin([
            { from: './app/assets/images/', to: './assets/images/' }
        ])
    ]
};