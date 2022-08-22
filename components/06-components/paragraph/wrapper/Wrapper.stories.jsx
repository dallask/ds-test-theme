import React from 'react';

import templateTwig from './wrapper.twig';
import paragraphContent from './wrapper.yml';
import documentation from './README.md';

import Paragraph from '@components/paragraph/abstract/Paragraph.stories';

Paragraph.argTypes.content = {
  control: {
    type: 'object'
  },
  defaultValue: {
    field_otsk_ds_wrapper_title: '',
    field_otsk_ds_wrapper_background: '',
    field_otsk_ds_wrapper_back_video: '',
    field_otsk_ds_paragraphs: '',
  },
  description: 'Paragraph content',
  table: {
    defaultValue: {
      summary: 'field_otsk_ds_wrapper_title: \'\',\n' +
        '    field_otsk_ds_wrapper_background: \'\',\n' +
        '    field_otsk_ds_wrapper_back_video: \'\',\n' +
        '    field_otsk_ds_paragraphs: \'\','
    },
    category: 'Content',
  }
};

export default {
  title: 'DS/Paragraph',
  component: 'Wrapper',
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
  <div dangerouslySetInnerHTML={{
    __html: templateTwig({
      ...args,
    }),
  }}/>
);
export const Wrapper = TwigTemplate.bind({});

Wrapper.args = {
  paragraph_base_class: 'wrapper',
  paragraph_blockname: 'paragraph',
  paragraph_container_class: 'container-fluid',
  paragraph_modifiers: [],
  content: paragraphContent.content,
  paragraph_extra: [
    'classnameOne',
    'classnameTwo',
  ],
};
