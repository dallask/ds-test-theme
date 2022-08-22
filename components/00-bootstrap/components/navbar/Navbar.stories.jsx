import React from 'react';

import templateTwig from './navbar.twig';
import data from './navbar.yml';

import docs from './navbar.mdx';

export default {
  title: 'Bootstrap/components',
  component: 'navbar',
  argTypes: {
    size: {
      table: {
        disable: true,
      },
    },
    navbar_container: {
      options: data.container,
      control: { type: 'radio' },
      table: {
        disable: false,
      },
    },
    navbar_background: {
      options: data.background,
      control: { type: 'radio' },
      table: {
        disable: false,
      },
    },
    navbar_collapsible: {
      control: { type: 'boolean' },
      table: {
        disable: false,
      },
    },
    navbar_expand_point: {
      options: data.expand_point,
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
          navbar_variant: variant,
        }),
      }}/>
    ))}
  </div>
);
export const Navbar = TwigTemplate.bind({});

Navbar.args = {
  navbar_content: data.content,
  navbar_container: 'container',
  navbar_background: 'dark',
  navbar_collapsible: true,
  navbar_expand_point: 'lg',
  navbar_variant: data.variant,
  navbar_extra: data.classes,
};
