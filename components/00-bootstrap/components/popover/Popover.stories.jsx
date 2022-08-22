import React from 'react';

import templateTwig from './popover.twig';
import data from './popover.yml';

import './popover.library.scss';

import './popover.js';

import docs from './popover.mdx';

export default {
  title: 'Bootstrap/components',
  component: 'Popover',
  argTypes: {},
  parameters: {
    docs: {
      page: docs,
    },
  },
};

const TwigTemplate = (args) => (
  <div className="m-2 row">
    {Object.values(data.position).map(position => (
      <div key={position} className="popover-wrapper" dangerouslySetInnerHTML={{
        __html: templateTwig({
          ...args,
          position: position,
        }),
      }}/>
    ))}
  </div>
);
export const Popover = TwigTemplate.bind({});

Popover.args = {
  content: data.content,
  classes: data.classes,
};
