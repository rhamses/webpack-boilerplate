var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',

  output: {
    filename: 'bundle.js',
    path: __dirname + "/dist/"
  },

  plugins: [
    new htmlWebpackPlugin({
      template: './src/index.html'
    })
  ],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader' , 'css-loader' ]
      },
      {
        test: /\.jpg|\.png|\.gif|\.svg$/,
        use: [ 'url-loader' ]
      },
      {
        test: /\.html$/,
        use: [ 'html-loader' ]
      }
    ]  
  },

  devServer: {
    contentBase: 'dist',
    port: 9000,
    watchContentBase: true
  }
};