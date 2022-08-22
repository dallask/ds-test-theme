import React from 'react';

import templateTwig from './content.twig';
import paragraphContent from './content.yml';
import documentation from './README.md';

import Paragraph from '@components/paragraph/abstract/Paragraph.stories';

Paragraph.argTypes.content = {
  control: {
    type: 'object'
  },
  defaultValue: {
    field_otsk_ds_title: '',
    field_otsk_ds_image: '',
    field_otsk_ds_text: '',
    field_otsk_ds_link: '',
  },
  description: 'Paragraph content',
  table: {
    defaultValue: {
      summary: 'field_otsk_ds_title: \'\',\n' +
        '    field_otsk_ds_image: \'\',\n' +
        '    field_otsk_ds_text: \'\',\n' +
        '    field_otsk_ds_link: \'\','
    },
    category: 'Content',
  }
};

export default {
  title: 'DS/Paragraph',
  component: 'Content',
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
export const Content = TwigTemplate.bind({});

Content.args = {
  paragraph_base_class: 'content',
  paragraph_blockname: 'paragraph',
  paragraph_container_class: 'container-fluid',
  paragraph_modifiers: [],
  content: paragraphContent.content,
  paragraph_extra: [
    'classnameOne',
    'classnameTwo',
  ],
};
