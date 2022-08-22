import React from 'react';

import templateTwig from './dropdown.twig';
import data from './dropdown.yml';

import docs from './dropdown.mdx';

export default {
  title: 'Bootstrap/components',
  component: 'dropdown',
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
  Object.values(data.variant).map(variant => (
    <span key={variant} className={'m-2 d-inline-block'}>
      <span
        dangerouslySetInnerHTML={{
          __html: templateTwig({ ...args, variant, id: args.id + '-' + variant }),
        }}/>
    </span>
  ))
);
export const Dropdown = TwigTemplate.bind({});

Dropdown.args = {
  id: data.id,
  content: data.content,
  ul_items: data.ul_items,
  sub_items: data.sub_items,
  variant: data.variant,
  size: data.size,
  type: data.type,
  classes: data.classes,
};
