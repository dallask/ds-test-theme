import React from 'react';

import templateTwig from './tooltips.twig';
import data from './tooltips.yml';

import './tooltips.library.scss';

import './tooltips';

import docs from './tooltips.mdx';

export default {
  title: 'Bootstrap/components',
  component: 'Tooltips',
  argTypes: {},
  parameters: {
    docs: {
      page: docs,
    },
  },
};

const TwigTemplate = (args) => (
  <div className="m-2">
    {Object.values(data.position).map(position => (
      <div key={position} dangerouslySetInnerHTML={{
        __html: templateTwig({
          ...args,
          position: position,
        }),
      }}/>
    ))}
  </div>
);
export const Tooltips = TwigTemplate.bind({});

Tooltips.args = {
  content: data.content,
  classes: data.classes,
};
