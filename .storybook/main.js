const path = require('path');

module.exports = {
  stories: [
    '../docs/introduction.stories.mdx',
    '../docs/**/*.stories.mdx',
    '../components/**/*.stories.@(js|jsx|mdx)',
    '../components/**/**/*.stories.@(js|jsx|mdx)'
  ],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@geometricpanda/storybook-addon-badges',
    'storybook-addon-docs-tabs',
    'storybook-addon-css-user-preferences',
    'storybook-addon-theme-toggle',
    'creevey'
  ],
  webpackFinal: (config) => {
    return {
      ...config,
      plugins: config.plugins.filter((plugin) => {
        if(plugin.constructor.name === 'ESLintWebpackPlugin') {
          return false;
        }
        return true;
      }),
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@base': path.join(__dirname, '../', 'components/00-base'),
          '@bootstrap': path.join(__dirname, '../', 'components/00-bootstrap'),
          '@atoms': path.join(__dirname, '../', 'components/01-atoms'),
          '@molecules': path.join(__dirname, '../', 'components/02-molecules'),
          '@organisms': path.join(__dirname, '../', 'components/03-organisms'),
          '@templates': path.join(__dirname, '../', 'components/04-templates'),
          '@pages': path.join(__dirname, '../', 'components/05-pages'),
          '@components': path.join(__dirname, '../', 'components/06-components'),
        }
      }
    };
  }
};
