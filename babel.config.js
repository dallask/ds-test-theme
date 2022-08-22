module.exports = (api) => {
  api.cache(true);

  const presets = [
    '@babel/preset-react',
    [
      '@babel/preset-env',
      {
        corejs: 3,
        useBuiltIns: 'usage',
      },
    ],
    ['minify', { builtIns: false }],
  ];

  const plugins = [
    [ "babel-plugin-webpack-alias", { "config": "./webpack/webpack.common.js" } ]
  ];

  const comments = false;

  return { presets, plugins, comments };
};
