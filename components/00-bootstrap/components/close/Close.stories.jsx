import React from 'react';

import templateTwig from './close.twig';
import data from './close.yml';
import './close.library.scss';

import docs from './close.mdx';

export default {
  title: 'Bootstrap/components',
  component: 'close',
  argTypes: {
    size: {
      table: {
        disable: true,
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
  <div className="m-2 row">
    {Object.values(data.variant).map(variant => (
      <span key={variant} className={`py-3 bg-for-${variant}`} dangerouslySetInnerHTML={{
        __html: templateTwig({
          ...args,
          variant: variant,
        }),
      }}/>
    ))}
  </div>
);
export const Close = TwigTemplate.bind({});

Close.args = {
  disabled: data.disabled,
  classes: data.classes,
};
