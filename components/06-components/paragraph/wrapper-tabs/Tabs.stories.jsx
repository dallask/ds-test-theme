import React from 'react';

import templateTwig from './tabs.twig';
import paragraphContentTabs from './tabs.yml';
import documentation from './README.md';

import tabs
  from "@components/paragraph/wrapper-tabs/tabs.twig";

import Paragraph from '@components/paragraph/abstract/Paragraph.stories';

Paragraph.argTypes.content = {
  control: {
    type: 'object'
  },
  defaultValue: {},
  description: 'Paragraph content',
  table: {
    defaultValue: {
      summary: ''
    },
    category: 'Content',
  }
};

export default {
  title: 'DS/Paragraph',
  component: 'Tabs',
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
export const Tabs = TwigTemplate.bind({});

Tabs.args = {
  paragraph_base_class: 'wrapper',
  paragraph_blockname: 'tabs-block',
  paragraph_container_class: 'container-fluid',
  paragraph_modifiers: [],
  content: paragraphContentTabs.content,
  paragraph_extra: [
    'tabs',
  ],
};
