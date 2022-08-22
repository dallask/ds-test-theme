import React from 'react';

import templateTwig from './link.twig';
import paragraphContent from './link.yml';
import documentation from './README.md';

import Paragraph from '@components/paragraph/abstract/Paragraph.stories';

Paragraph.argTypes.content = {
  control: {
    type: 'object'
  },
  defaultValue: {
    field_otsk_ds_image: '',
  },
  description: 'Paragraph content',
  table: {
    defaultValue: {
      summary: 'field_otsk_ds_image: \'\','
    },
    category: 'Content',
  }
};

export default {
  title: 'DS/Paragraph',
  component: 'link',
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
export const link = TwigTemplate.bind({});

link.args = {
  paragraph_base_class: 'link',
  paragraph_blockname: 'paragraph',
  paragraph_container_class: 'container-fluid',
  paragraph_modifiers: [],
  content: paragraphContent.content,
  paragraph_extra: [
    'classnameOne',
    'classnameTwo',
  ],
};
