const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const globImporter = require('node-sass-glob-importer');
const path = require('path');

const JSLoader = {
  test: /^(?!.*\.(stories|component)\.js$).*\.js$/,
  exclude: /node_modules/,
  loader: 'babel-loader',
};

const ImageLoader = {
  test: /\.(png|svg|jpg|gif)$/i,
  exclude: /icons\/.*\.svg$/,
  loader: 'file-loader',
  options: {
    name: '[name].[ext]?[hash]',
    outputPath: 'img/'
  }
};

const CSSLoader = {
  test: /\.s[ac]ss$/i,
  exclude: /node_modules/,
  use: [
    MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        sourceMap: true,
        url: false,
      },
    },
    {
      loader: 'postcss-loader',
      options: {
        sourceMap: true,
      },
    },
    {
      loader: 'sass-loader',
      options: {
        sourceMap: true,
        sassOptions: {
          importer: globImporter(),
          outputStyle: 'compressed',
        },
        additionalData: '@use "sass:math"; @import "~breakpoint-sass/stylesheets/breakpoint";'
      },
    },
    {
      loader: 'sass-resources-loader',
      options: {
        resources: [
          path.resolve(__dirname, '../components/00-base/00-defaults/_01-variables.scss'),
          path.resolve(__dirname, '../components/00-base/00-defaults/_02-breakpoints.scss'),
          path.resolve(__dirname, '../components/00-base/00-defaults/_04-functions.scss'),
          path.resolve(__dirname, '../components/00-base/00-defaults/_03-mixins.scss'),
          path.resolve(__dirname, '../components/00-base/01-colors/_00-colors-vars.scss'),
          path.resolve(__dirname, '../components/00-bootstrap/scss/_variables.scss'),
          path.resolve(__dirname, '../components/00-bootstrap/scss/_mixins_functions.scss')
        ]
      },
    },
  ],
};

const SVGSpriteLoader = {
  test: /icons\/.*\.svg$/, // your icons directory
  loader: 'svg-sprite-loader',
  options: {
    extract: true,
    spriteFilename: '../dist/icons.svg',
  },
};

module.exports = {
  JSLoader,
  CSSLoader,
  SVGSpriteLoader,
  ImageLoader,
};
