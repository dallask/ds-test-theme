import React from 'react';

import templateTwig from './offcanvas.twig';
import data from './offcanvas.yml';

import './offcanvas.library.scss';

import docs from './offcanvas.mdx';

export default {
  title: 'Bootstrap/components',
  component: 'offcanvas',
  argTypes: {
    size: {
      table: {
        disable: true,
      },
    },
    position: {
      options: data.position,
      control: { type: 'radio' },
      table: {
        disable: false,
      },
    },
    data_bs_scroll: {
      options: data.data_bs_scroll,
      control: { type: 'radio' },
      table: {
        disable: false,
      },
    },
    data_bs_backdrop: {
      options: data.data_bs_backdrop,
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
  <div className="offcanvas-wrapper">
    <button className="btn btn-primary m-2" type="button"
            data-bs-toggle="offcanvas"
            data-bs-target={`#${data.id}`} aria-controls={data.id}>Toggle
      top offcanvas
    </button>
    <div dangerouslySetInnerHTML={{
      __html: templateTwig({
        ...args,
      }),
    }}/>
  </div>
);
export const Offcanvas = TwigTemplate.bind({});

Offcanvas.args = {
  id: data.id,
  content: data.content,
  position: 'start',
  data_bs_scroll: 'true',
  data_bs_backdrop: 'true',
  classes: data.classes,
};
