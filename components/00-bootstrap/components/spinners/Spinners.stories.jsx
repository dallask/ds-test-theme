import React from 'react';

import templateTwig from './spinners.twig';
import data from './spinners.yml';

import docs from './spinners.mdx';

export default {
  title: 'Bootstrap/components',
  component: 'Spinners',
  argTypes: {
    size: {
      options: data.size,
      control: { type: 'radio' },
      table: {
        disable: false,
      },
    },
    type: {
      options: data.type,
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
      <span key={variant} className="me-3" dangerouslySetInnerHTML={{
        __html: templateTwig({
          ...args,
          variant: variant,
        }),
      }}/>
    ))}
  </div>
);
export const Spinners = TwigTemplate.bind({});

Spinners.args = {
  type: 'border',
  size: 'lg',
};
