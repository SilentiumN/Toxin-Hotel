const path = require('path');
const miniCss = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const config = {
    entry: [
        './src/app.js'
        ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.pug$/,
                use: [
                    'html-loader',
                    'pug-html-loader'
                ]
            },
            {
                test: /\.(sa|c|sc)ss$/,
                use: [
                    "style-loader",
                    miniCss.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"

                ]
            },
            {
                test: /\.(png|jpg|svg|jpeg|gif)$/i,
                type: 'asset/resource',
                exclude: /(\/fonts)/,
                generator:{
                    filename: './images/[name][ext]'
                }
            },
            {
                test: /\.(woff(2)?|svg|ttf|eot|otf)$/,
                type: 'asset/resource',
                include: /(\/fonts)/,
                generator:{
                    filename: './fonts/[name][ext]'
                }
            }
        ],
    },

    plugins: [
        new CleanWebpackPlugin(),
        new miniCss({
            filename: './css/[name].css'
        }),
        new HtmlWebpackPlugin({
            filename: './html/main.html',
            template: 'src/main.pug'
        }),
        new HtmlWebpackPlugin({
            filename: './html/search-room.html',
            template: 'src/views/search-room/search-room.pug'
        }),
        new HtmlWebpackPlugin({
            filename: './html/room-details.html',
            template: 'src/views/room-details/room-details.pug'
        }),
        new HtmlWebpackPlugin({
            filename: './html/UI.html',
            template: 'src/views/UI/UI.pug'
        }),
        new HtmlWebpackPlugin({
            filename: './html/cards.html',
            template: 'src/views/cards/cards.pug'
        }),
        new HtmlWebpackPlugin({
            filename: './html/headers-footers-page.html',
            template: 'src/views/headers-footers-page/headers-footers-page.pug'
        }),
        new HtmlWebpackPlugin({
            filename: './html/form-elements.html',
            template: 'src/views/form-elements/form-elements.pug'
        })


    ]
};
module.exports = config;
