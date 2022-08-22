import React from 'react';

import templateTwig from './progress.twig';
import data from './progress.yml';

import docs from './progress.mdx';

export default {
  title: 'Bootstrap/components',
  component: 'Progress',
  argTypes: {},
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
          aria_valuenow: Math.floor(10 + Math.random() * (100 - 10 + 1)),
        }),
      }}/>
    ))}
  </div>
);
export const Progress = TwigTemplate.bind({});

Progress.args = {
  stripped: true,
  animated: true,
  aria_valuemin: 0,
  aria_valuemax: 100,
  aria_valuenow: 75,
  classes: data.classes,
};
