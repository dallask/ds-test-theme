import React from 'react';

import templateTwig from './template.twig';
import data from './data.yml';

import docs from './docs.mdx';

export default {
  title: 'Bootstrap/components',
  component: 'Pagination',
  argTypes: {
    size: {
      options: data.size,
      control: { type: 'radio' },
      table: {
        disable: false,
      },
    },
    position: {
      options: data.position,
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
export const Pagination = TwigTemplate.bind({});

Pagination.args = {
  content: data.content,
  size: 'md',
  position: 'justify-content-center',
  classes: data.classes,
};
