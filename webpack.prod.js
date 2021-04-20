const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const Path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const { CleanWebpackPlugin }  = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].[contenthash].js',
        path: Path.resolve(__dirname, 'dist'),
    },
    optimization: {
        minimizer: [ new OptimizeCssAssetsPlugin() ]
    },
    mode: 'production',
    devServer: {
        contentBase: Path.join(__dirname, 'dist'),
        port: 8081,
        open: true,
    },
    module: {
        rules: [
            { 
                test: /\.js$/, 
                exclude: /node_modules/, 
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.(c|sc|sa)ss$/,
                exclude: /styles\.(c|sc|sa)ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /styles\.(c|sc|sa)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sassOptions: {
                              includePaths: ['./node_modules']
                            },
                            // Prefer Dart Sass
                            implementation: require('node-sass'),
                        
                            // See https://github.com/webpack-contrib/sass-loader/issues/804
                            webpackImporter: false,
                          }
                    },
                ]
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
            },
            {
                test: /\.(png|svg|jpg|gif|x3d)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            esModule: false,
                            name: 'assets/[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles.[contenthash].css'
        }),
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.[contenthash].html',
        }),
        new CopyPlugin({
            patterns: [
                { from: 'src/assets', to: 'assets/' },
            ],
        }),
        new MinifyPlugin(),
        new CleanWebpackPlugin(),
    ]
}