const path = require('path');
const glob = require('glob');
const loaders = require('./loaders');
const plugins = require('./plugins');

const webpackDir = path.resolve(__dirname);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');

// Glob pattern for scss files that ignore file names prefixed with underscore.
let scssPattern = path.resolve(rootDir, 'components/**/!(_*).scss');

// Glob pattern for JS files.
let jsPattern = path.resolve(
  rootDir,
  'components/**/!(*.stories|*.component|*.min|*.test).js',
);

// Prepare list of scss and js file for "entry".
function getEntries(scssPattern, jsPattern) {
  const entries = {};

  // SCSS entries
  glob.sync(scssPattern).forEach((file) => {
    const filePath = file.split(path.resolve('./components/'))[1];
    const newfilePath = `css/${filePath.replace('.scss', '').replace('scss', '').replace('.library', '')}`;
    entries[newfilePath] = file;
  });

  // JS entries
  glob.sync(jsPattern).forEach((file) => {
    const filePath = file.split(path.resolve('./components/'))[1];
    const newfilePath = `js/${filePath.replace('.js', '').replace('js', '')}`;
    entries[newfilePath] = file;
  });

  entries.svgSprite = path.resolve(webpackDir, 'svgSprite.js');

  // CSS Files.
  glob.sync(`${webpackDir}/css/*js`).forEach((file) => {
    const baseFileName = path.basename(file);
    const newfilePath = `css/${baseFileName.replace('.js', '')}`;
    entries[newfilePath] = file;
  });

  return entries;
}

module.exports = {
  resolve: {
    alias: {
      '@base': path.join(__dirname, '../', 'components/00-base'),
      '@bootstrap': path.join(__dirname, '../', 'components/00-bootstrap'),
      '@atoms': path.join(__dirname, '../', 'components/01-atoms'),
      '@molecules': path.join(__dirname, '../', 'components/02-molecules'),
      '@organisms': path.join(__dirname, '../', 'components/03-organisms'),
      '@templates': path.join(__dirname, '../', 'components/04-templates'),
      '@pages': path.join(__dirname, '../', 'components/05-pages'),
      '@components': path.join(__dirname, '../', 'components/06-components'),
    }
  },
  stats: {
    errorDetails: true,
  },
  entry: getEntries(scssPattern, jsPattern),
  module: {
    rules: [
      loaders.CSSLoader,
      loaders.SVGSpriteLoader,
      loaders.ImageLoader,
      loaders.JSLoader,
    ],
  },
  plugins: [
    plugins.MiniCssExtractPlugin,
    plugins.ImageminPlugin,
    plugins.SpriteLoaderPlugin,
    plugins.ProgressPlugin,
    plugins.CleanWebpackPlugin,
    plugins.CopyWebpackPlugin,
    plugins.ImageminWebpWebpackPlugin,
  ],
  output: {
    path: distDir,
    filename: '[name].js',
  },
};
