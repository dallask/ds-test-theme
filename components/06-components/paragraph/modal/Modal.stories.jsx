import React from 'react';

import templateTwig from './modal.twig';
import paragraphContent from './modal.yml';
import documentation from './README.md';

import Paragraph from '@components/paragraph/abstract/Paragraph.stories';

Paragraph.argTypes.content = {
  control: {
    type: 'object'
  },
  defaultValue: {
    field_otsk_ds_wrapper_title: '',

    field_otsk_ds_paragraphs: '',
  },
  description: 'Paragraph content',
  table: {
    defaultValue: {
      summary: 'field_otsk_ds_wrapper_title: \'\',\n' +
        '    field_otsk_ds_paragraphs: \'\','
    },
    category: 'Content',
  }
};

export default {
  title: 'DS/Paragraph',
  component: 'modal',
  parameters: {
    docs: {
      description: {
        component: documentation
      }
    },
  },
  argTypes: Paragraph.argTypes
};

const TwigTemplate = (args) => (
  <div>
    <button type="button" className="btn btn-primary" data-bs-toggle="modal"
            data-bs-target="#customModal">
      Open Modal
    </button>
    <div dangerouslySetInnerHTML={{
      __html: templateTwig({
        ...args,
      }),
    }}/>
  </div>
);
export const Modal = TwigTemplate.bind({});

Modal.args = {
  paragraph_base_class: 'modal',
  paragraph_blockname: 'paragraph',
  paragraph_container_class: 'container-fluid',
  paragraph_modifiers: [],
  content: paragraphContent.content,
  paragraph_extra: [
    'classnameOne',
    'classnameTwo',
  ],
};
