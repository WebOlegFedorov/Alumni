const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const path = require('path');

module.exports = {
   watch: true,
   mode: 'development',
   context: path.resolve(__dirname, ''),
   entry: {
       app: ['./app.js', './app.scss','./scripts/jquery-3.4.1.min.js'],
       myRequests: ['./my-requests/my-requests.js', './scripts/jquery-3.4.1.min.js']
   },
   output: {
       filename: '[name].js',
       path: path.resolve(__dirname, 'dist'),
   },
   devServer: {
       port: 3000,
       historyApiFallback: {
           rewrites: [
               { from: /^\/app/, to: '/index.html' },
               { from: /^\/myRequests/, to: './my-requests/my-requests.html' }
           ]
       }
   },
   plugins: [
       new webpack.ProvidePlugin({
           $: 'jquery',
           jQuery: 'jquery'
       }),
       new HtmlWebpackPlugin({
           chunks: ['app'],
           template: './index.html',
           filename: './index.html',
       }),
       new HtmlWebpackPlugin({
           chunks: ['myRequests'],
           template: './my-requests/my-requests.html',
           filename: './my-requests.html',
       })
   ],
   module: {
       rules: [
           {
               test: /\.scss$/,
               use: [
                   {
                       loader: 'file-loader',
                       options: {
                           name: 'bundle.css',
                       },
                   },
                   {loader: 'extract-loader'},
                   {loader: 'css-loader'},
                   {
                       loader: 'postcss-loader',
                       options: {
                           plugins: () => [autoprefixer()]
                       }
                   },
                   {
                       loader: 'sass-loader',
                       options: {
                           sassOptions: {
                               includePaths: ['./node_modules']
                           }
                       },
                   },
               ],
           },
           {
               test: /\.js$/,
               loader: 'babel-loader',
               query: {
                   presets: ['@babel/preset-env'],
               },
           },
           {
               test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
               loader: 'file-loader',
               options: {
                   name: '[path][name].[ext]'
               }
           }
       ],
   },
};