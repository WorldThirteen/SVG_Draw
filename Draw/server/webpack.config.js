'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  devtool: 'eval-source-map',

  entry: [

    'webpack-hot-middleware/client?reload=true',
    path.join(__dirname, '../src/entry.js')

  ],

  output: {

    path: path.join(__dirname, '../dist/'),
    filename: '[name].js',
    publicPath: '/'

  },

  plugins: [

    new HtmlWebpackPlugin({
      template: 'src/index.tpl.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })

  ],

  module: {

    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel'
    }, {
      test: /\.json?$/,
      loader: 'json'
    }, { 
      test: /\.cjsx$/, 
      loaders: ['react-hot', 'coffee', 'cjsx'] 
    }, { 
      test: /\.coffee$/, 
      loader: 'coffee' 
    }, { 
      test: /\.sass$/, 
      loaders: ['style', 'css', 'sass?indentedSyntax'] 
    }]

  }

}
