import React from 'react';

import templateTwig from './carousel.twig';
import paragraphContent from './carousel.yml';
import documentation from './README.md';

import './carousel'

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
  component: 'Carousel BS',
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
export const CarouselBS = TwigTemplate.bind({});

CarouselBS.args = {
  paragraph_base_class: 'carousel-wrapper-bs',
  paragraph_blockname: 'paragraph',
  paragraph_container_class: 'container-fluid',
  paragraph_modifiers: [],
  content: paragraphContent.content,
  paragraph_extra: [
    'carousel',
  ],
};
