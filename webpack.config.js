const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: ['./src/javascript/index.js'],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: './javascript/[name].js'
    },
    module: {   
        rules: [{
                test: /\.pug$/,
                use: ['html-loader','pug-html-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/pug/index.pug',
            filename:'./html/index.html'
        }),
        new HtmlWebpackPlugin({
          template: './src/pug/test.pug',
          filename:'./html/test.html'
        })
    ],
    watch: true,
    watchOptions: {
        aggregateTimeout: 500,
        poll: 1000,
        ignored: /node_modules/
    },
    devServer: {
        contentBase: path.join(__dirname,'build/html'),
        compress: true,
        port: 9000
    }
  };