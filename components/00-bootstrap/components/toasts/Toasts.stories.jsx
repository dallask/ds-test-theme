import React from 'react';

import templateTwig from './toasts.twig';
import data from './toasts.yml';

import './toasts';

import docs from './toasts.mdx';

export default {
  title: 'Bootstrap/components',
  component: 'Toasts',
  argTypes: {
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
    <button type="button" className="btn btn-primary" id="liveToastBtn">
      Show live toast
    </button>
    <div dangerouslySetInnerHTML={{
      __html: templateTwig({
        ...args,
      }),
    }}/>
  </div>
);
export const Toasts = TwigTemplate.bind({});

Toasts.args = {
  content: data.content,
  id: 'liveToast',
  position: 'position-absolute bottom-0 end-0',
  classes: data.classes,
};
