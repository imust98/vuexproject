"use strict";

const path = require('path');
const webpack = require('webpack');
const StylelintPlugin = require('stylelint-webpack-plugin');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  entry: {
    'app': resolve('./src/index.ts')
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    publicPath: '/',
    chunkFilename: '[name].js'
  },
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.esm.js'
    },
    extensions: ['.ts', '.js', '.vue', '.json']
  },
  module: {
    loaders: [{
        test: /\.ts$/,
        exclude: /node_modules|vue\/src/,
        enforce: 'pre',
        loader: 'tslint-loader'
      },
      {
        test: /\.ts$/,
        exclude: /node_modules|vue\/src/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          esModule: true,
          loaders: {
            ts: 'ts-loader!tslint-loader',
            scss: 'vue-style-loader!css-loader!sass-loader'
          }
        }
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192
          }
        }]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]'
          }
        }]
      }
    ]
  }
};