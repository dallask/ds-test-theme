import React from 'react';

import templateTwig from './video.twig';
import paragraphContent from './video.yml';
import documentation from './README.md';

import Paragraph from '@components/paragraph/abstract/Paragraph.stories';

Paragraph.argTypes.content = {
  control: {
    type: 'object'
  },
  defaultValue: {
    field_video: '',
  },
  description: 'Paragraph content',
  table: {
    defaultValue: {
      summary: 'field_video: \'\','
    },
    category: 'Content',
  }
};

export default {
  title: 'DS/Paragraph',
  component: 'Video',
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
export const Video = TwigTemplate.bind({});

Video.args = {
  paragraph_base_class: 'video',
  paragraph_blockname: 'paragraph',
  paragraph_container_class: 'container-fluid',
  paragraph_modifiers: [],
  content: paragraphContent.content,
  paragraph_extra: [
    'classnameOne',
    'classnameTwo',
  ],
};
