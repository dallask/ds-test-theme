import React from 'react';

import templateTwig from './navsTabs.twig';
import data from './navsTabs.yml';

import docs from './navsTabs.mdx';

export default {
  title: 'Bootstrap/components',
  component: 'navsTabs',
  argTypes: {
    size: {
      table: {
        disable: true,
      },
    },
    type: {
      options: data.type,
      control: { type: 'radio' },
      table: {
        disable: false,
      },
    },
    direction: {
      options: data.direction,
      control: { type: 'radio' },
      table: {
        disable: false,
      },
    },
    justify_content: {
      options: data.justify_content,
      control: { type: 'radio' },
      table: {
        disable: false,
      },
    },
  },
  parameters: {
    docs: {
      page: docs,
    },
  },
};

const TwigTemplate = (args) => (
  <div className="m-2">
   <span dangerouslySetInnerHTML={{
     __html: templateTwig({
       ...args,
     }),
   }}/>
  </div>
);
export const NavsTabs = TwigTemplate.bind({});

NavsTabs.args = {
  content: data.content,
  type: data.type,
  fill: false,
  justified: false,
  justify_content: 'justify-content-start',
  direction: 'flex-row',
  classes: data.classes,
};
