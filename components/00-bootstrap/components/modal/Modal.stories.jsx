import React from 'react';

import templateTwig from './modal.twig';
import data from './modal.yml';

import docs from './docs.mdx';

export default {
  title: 'Bootstrap/components',
  component: 'Modal',
  argTypes: {
    modal_size: {
      options: data.size,
      control: {type: 'select'},
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
  <div className={'m-2'}>
    <button type="button" className="btn btn-primary" data-bs-toggle="modal"
            data-bs-target={`#${data.attributes.id}`}>
      Open Modal
    </button>
    <div dangerouslySetInnerHTML={{__html: templateTwig({...args})}}/>
  </div>
);
export const Modal = TwigTemplate.bind({});

Modal.args = {
  modal_id: data.id,
  modal_close_button: data.close_button,
  modal_header: data.header,
  modal_footer: data.footer,
  modal_scrollable: data.scrollable,
  modal_centered: data.centered,
  modal_size: 'lg',
  modal_content: data.content,
  modal_classes: data.classes,
  modal_attributes: data.attributes,
};
