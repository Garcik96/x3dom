const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const Path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin }  = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].js',
        path: Path.resolve(__dirname, 'dist'),
    },
    mode: 'development',
    devServer: {
        contentBase: Path.join(__dirname, 'dist'),
        port: 8081,
        open: true,
    },
    module: {
        rules: [
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
                    'sass-loader'
                ]
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
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
            filename: 'styles.css'
        }),
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html',
        }),
        new CopyPlugin({
            patterns: [
                { from: 'src/assets', to: 'assets/' },
            ],
        }),
        new CleanWebpackPlugin(),
    ]
}