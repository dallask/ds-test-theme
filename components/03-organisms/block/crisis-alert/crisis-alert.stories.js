import React from 'react';

import Component from './crisis-alert.twig';
import exampleData from './crisis-alert.yml';
import documentation from './README.md';

/**
 * Storybook Definition.
 */
export default {
  title: 'Organisms/Blocks/Crisis Alert',
  parameters: {
    docs: {
      description: {
        component: documentation,
      },
    },
  },
};

export const Default = () => (
  <div dangerouslySetInnerHTML={{ __html: Component(exampleData) }}/>
);
