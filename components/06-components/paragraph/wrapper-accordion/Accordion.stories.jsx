import React from 'react';

import templateTwig from './accordion.twig';
import paragraphContentAccordion from './accordion.yml';
import documentation from './README.md';


import Paragraph from '@components/paragraph/abstract/Paragraph.stories';

Paragraph.argTypes.content = {
  control: {
    type: 'object'
  },
  defaultValue: {
    field_title_format: '',
    field_paragraph: '',
  },
  description: 'Paragraph content',
  table: {
    defaultValue: {
      summary: 'field_title_format: \'\',\n' +
        '    field_paragraph: \'\','
    },
    category: 'Content',
  }
};

export default {
  title: 'DS/Paragraph',
  component: 'Accordion',
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
export const Accordion = TwigTemplate.bind({});

Accordion.args = {
  paragraph_base_class: 'wrapper',
  paragraph_blockname: 'accordion-block',
  paragraph_container_class: 'container-fluid',
  paragraph_modifiers: [],
  content: paragraphContentAccordion.content,
  paragraph_extra: [
    'accordion',
  ],
};
