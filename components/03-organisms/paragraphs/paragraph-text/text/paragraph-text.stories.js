import React from 'react';

import paragraphTextTwig from './paragraph-text.twig';

import paragraphTextData from './paragraph-text-data.yml';

import paragraphTextWysywigStylesData from './paragraph-text-wysywig-styles-data.yml';

import documentation from '../README.md';

/**
 * Storybook Definition.
 */

export default {
  title: 'Organisms/Paragraphs/Text',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: documentation,
      },
    },
  },
};

export const Text = (args) => (
  <div dangerouslySetInnerHTML={{
    __html: paragraphTextTwig({
      ...paragraphTextData,
      ...args,
    }),
  }}/>
);

export const TextWysywigStyles = () => (
  <div dangerouslySetInnerHTML={{
    __html: paragraphTextTwig({
      ...paragraphTextWysywigStylesData,
    }),
  }}/>
);

const layouts = [
  {
    layout: 'item-layout-1-column',
  },
  {
    layout: 'item-layout-2-columns',
    image_position: 'image-position-left',
  },
  {
    layout: 'item-layout-2-columns',
    image_position: 'image-position-right',
  },
];

Text.args = {
  layout: 0,
};

Text.argTypes = {
  layout: {
    name: 'Layout',
    options: Object.keys(layouts),
    mapping: layouts,
    control: {
      type: 'select',
      labels: {
        0: 'One column',
        1: 'Two Columns - Image Left',
        2: 'Two Columns - Image Right',
      },
    },
  },
};
