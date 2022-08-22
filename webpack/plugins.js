/* eslint-disable no-underscore-dangle */
const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const _MiniCssExtractPlugin = require('mini-css-extract-plugin');
const _ImageminPlugin = require('imagemin-webpack-plugin').default;
const _SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const _WebpackNotifierPlugin = require('webpack-notifier');
const glob = require('glob');
const _ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin');
const _CopyWebpackPlugin = require('copy-webpack-plugin');
const _BrowserSyncPlugin = require('browser-sync-webpack-plugin');

// Load configuration from config.js
/* The gulp.config.js content:
const localServer         = 'https://your-server-name.localhost';
exports.localServer       = localServer;
 */
const config = require('./config');


const imagePath = path.resolve(__dirname, '../images');

const MiniCssExtractPlugin = new _MiniCssExtractPlugin({
  filename: '[name].css',
  chunkFilename: '[id].css',
});

const ImageminPlugin = new _ImageminPlugin({
  disable: process.env.NODE_ENV !== 'production',
  externalImages: {
    context: imagePath,
    sources: glob.sync(path.resolve(imagePath, '**/*.{png,jpg,gif,svg}')),
    destination: imagePath,
  },
});

const SpriteLoaderPlugin = new _SpriteLoaderPlugin({
  plainSprite: true,
});

const ProgressPlugin = new webpack.ProgressPlugin();
const WebpackNotifierPlugin = new _WebpackNotifierPlugin({
  alwaysNotify: true,
});

const CopyWebpackPlugin = new _CopyWebpackPlugin({
  patterns: [{
    from: 'images/',
    to: 'img/'
  }]
});

const ImageminWebpWebpackPlugin = new _ImageminWebpWebpackPlugin({
  detailedLogs: true,
  overrideExtension: true,
  config: [{
    test: /\.(jpe?g|png|gif)/,
    options: {
      quality:  75
    }
  }],
});

const BrowserSyncPlugin = new _BrowserSyncPlugin({
  host: "localhost",
  port: 3000,
  proxy: config.localServer,
  online: true
});

module.exports = {
  ProgressPlugin,
  MiniCssExtractPlugin,
  ImageminPlugin,
  SpriteLoaderPlugin,
  CleanWebpackPlugin: new CleanWebpackPlugin({
    protectWebpackAssets: false, // Required for removal of extra, unwanted dist/css/*.js files.
    cleanOnceBeforeBuildPatterns: ['!*.{png,jpg,gif,svg}'],
    cleanAfterEveryBuildPatterns: [
      'remove/**',
      '!js',
      'css/**/*.js', // Remove all unwanted, auto generated JS files from dist/css folder.
      'css/**/*.js.map',
      'css/style.*', // Remove duplicated dist/css/style.css and its css.map
      '!*.{png,jpg,gif,svg}',
    ],
  }),
  WebpackNotifierPlugin,
  CopyWebpackPlugin,
  ImageminWebpWebpackPlugin,
  BrowserSyncPlugin,
};
