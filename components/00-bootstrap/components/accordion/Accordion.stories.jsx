import React from 'react';

import accordionTwig from './accordion.twig';
import accordionData from './accordion.yml';

import docs from './accordion.mdx';

export default {
  title: 'Bootstrap/components',
  component: 'Accordion',
  argTypes: {
    accordion_size: {
      table: {
        disable: true,
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
  <div className={'m-2'}
       dangerouslySetInnerHTML={{ __html: accordionTwig(args) }}/>
);
export const Accordion = TwigTemplate.bind({});

Accordion.args = {
  accordion_content: accordionData.content,
  accordion_flush: accordionData.flush,
  accordion_always_opened: accordionData.always_opened,
  accordion_classes: accordionData.classes,
};
