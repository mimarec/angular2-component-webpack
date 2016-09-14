const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const helpers = require('./helpers');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: {
    'scaffold': './src/scaffold.module.ts'
  },

  devtool: 'source-map',

  externals: [nodeExternals()],
  
  output: {
    path: helpers.root('dist'),
    filename: '[name].bundle.js'
  },

  resolve: {
    extensions: ['', '.js', '.ts']
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loaders: ['ts', 'angular2-template-loader']
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.css$/,
        loader: 'to-string!css-loader!postcss-loader'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: 'to-string!css-loader!postcss-loader!sass-loader'
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['scaffold']
    })
  ]
};
