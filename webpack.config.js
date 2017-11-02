"use strict";

const path = require('path');
const webpack = require('webpack');
const AssetsPlugin = require('assets-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');

function getPath(tsPath) {
  return path.join(__dirname, tsPath);
}

const config = {
  entry: {
    'app': getPath('/src/index.ts')
  },
  output: {
    path: getPath('dist/'),
    filename: '[name].js',
    publicPath: '/dist/',
    chunkFilename: '[name].js'
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json']
  },
  plugins: [
    new StylelintPlugin({
      files: [ 
        '**/*.vue',
        '**/*.scss'
      ]
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module) {
        return module.context && module.context.indexOf('node_modules') !== -1;
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()    
  ],
  devtool: 'source-map',
  module: {
    loaders: [
      {
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
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]'
            }
          }
        ]
      }
    ]
  },
  watchOptions: {
    poll: true
  },
  devServer: {
    hot: true,
    open: true,
    historyApiFallback: {
      index: 'index.html'
    },
    proxy: {
      '/api': 'http://localhost:8002'
    }
  }
};

module.exports = config;
