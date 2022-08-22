import React from 'react';

import './_style.scss';

import docs from './docs.mdx';

export default {
  title: 'Bootstrap/styleguide',
  component: 'CssGrid',
  parameters: {
    docs: {
      page: docs,
    },
  },
};

const TwigTemplate = (args) => (
  <div className="m-2">
    Under construction
  </div>
);
export const CssGrid = TwigTemplate.bind({});
