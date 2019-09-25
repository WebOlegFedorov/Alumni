const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const path = require('path');

module.exports = {
   watch: true,
   mode: 'development',
   context: path.resolve(__dirname, ''),
   entry: {
       myRequestsApp: ['./my-requests/my-requests.js'],
       myAccountApp: ['./my-account/my-account.js'],
       dashboardApp: ['./dashboard/dashboard.js'],
       stylesheets: ['./app.scss'],
       app: ['./app.js']
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
               { from: /^\/myAccount/, to: './my-account/my-account.html' },
               { from: /^\/myRequests/, to: './my-requests/my-requests.html' },
               { from: /^\/dashboardApp/, to: './dashboard/dashboard.html' },

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
           chunks: ['myRequestsApp'],
           template: './my-requests/my-requests.html',
           filename: './my-requests.html',
       }),
       new HtmlWebpackPlugin({
           chunks: ['dashboardApp'],
           template: './dashboard/dashboard.html',
           filename: './dashboard.html',
       }),
       new HtmlWebpackPlugin({
        chunks: ['myAccountApp'],
        template: './my-account/my-account.html',
        filename: './my-account.html',
    }),
       new CopyPlugin([
           { from: './assets', to: 'assets' },
       ]),
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