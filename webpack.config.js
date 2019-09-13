const autoprefixer = require('autoprefixer');

module.exports = {
  entry: ['./app.scss', './app.js'],
  output: {
    filename: 'bundle.js',
  },
  devServer: {
    port: 3000,
    historyApiFallback: {
      rewrites: [
        { from: /^\/page1/, to: '/my-requests.html' },
        { from: /^\/page2/, to: '/page2.html' },
        { from: /^\/page3/, to: '/page3.html' },
    ]
    }
  },
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
          }
        ],
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env'],
        },
      }
    ],
  },
};