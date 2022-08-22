import React from 'react';

import templateTwig from './text.twig';
import paragraphContent from './text.yml';
import documentation from './README.md';

import Paragraph from '@components/paragraph/abstract/Paragraph.stories';

Paragraph.argTypes.content = {
  control: {
    type: 'object'
  },
  defaultValue: {
    field_title_format: '',
    field_otsk_ds_text: '',
  },
  description: 'Paragraph content',
  table: {
    defaultValue: {
      summary: 'field_title_format: \'\',\n' +
        '    field_otsk_ds_text: \'\',\n'
    },
    category: 'Content',
  }
};

export default {
  title: 'DS/Paragraph',
  component: 'Text',
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
export const Text = TwigTemplate.bind({});

Text.args = {
  paragraph_base_class: 'text',
  paragraph_blockname: 'paragraph',
  paragraph_container_class: 'container-fluid',
  paragraph_modifiers: [],
  content: paragraphContent.content,
  paragraph_extra: [
    'classnameOne',
    'classnameTwo',
  ],
};
