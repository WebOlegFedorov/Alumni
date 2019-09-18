const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const path = require('path');
module.exports = {
   context: path.resolve(__dirname, ''),
   entry: [
       './app.scss',
       './app.js',
       './scripts/my-request.js',
       './scripts/jquery-3.4.1.min.js'
   ],
   output: {
       filename: '[name].js',
       path: path.resolve(__dirname, 'dist'),
   },
   devServer: {
       port: 3000,
       historyApiFallback: {
           rewrites: [
               { from: /^\/main/, to: '/index.html' },
               { from: /^\/my-requests/, to: '/my-requests.html' }
           ]
       }
   },
   plugins: [
       new webpack.ProvidePlugin({
           $: 'jquery',
           jQuery: 'jquery'
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