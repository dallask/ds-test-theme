import React from 'react';

import prcTwig from './footer-prc.twig';
import documentation from './README.md';

/**
 * Storybook Definition.
 */
export default {
  title: 'Molecules/Blocks/Prc Footer',
  parameters: {
    docs: {
      description: {
        component: documentation
      }
    }
  }
};

export const prcFooter = (args) => (
  <div dangerouslySetInnerHTML={{ __html: prcTwig(args) }}/>
);

prcFooter.args = {
  prcdate: 'Month 2022',
  prccode: 'CODE00000000',
};

prcFooter.argTypes = {
  prcdate: {
    name: 'PRC Date',
    control: {
      type: 'text',
    },
  },
  prccode: {
    name: 'PRC Code',
    control: {
      type: 'text',
    },
  },
};
