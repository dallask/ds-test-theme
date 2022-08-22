import React from 'react';

import templateTwig from './placeholder.twig';
import data from './placeholder.yml';

import docs from './placeholder.mdx';

export default {
  title: 'Bootstrap/components',
  component: 'Placeholder',
  argTypes: {
    size: {
      options: data.size,
      control: { type: 'radio' },
      table: {
        disable: false,
      },
    },
    effect: {
      options: data.effect,
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
    {Object.values(data.variant).map(variant => (
      <div key={variant} className="mb-3" dangerouslySetInnerHTML={{
        __html: templateTwig({
          ...args,
          variant: variant,
        }),
      }}/>
    ))}
  </div>
);
export const Placeholder = TwigTemplate.bind({});

Placeholder.args = {
  effect: 'glow',
  size: 'md',
  classes: data.classes,
};
