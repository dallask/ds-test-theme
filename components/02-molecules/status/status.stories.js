import React from 'react';

import status from './status.twig';

import statusData from './status.yml';
import documentation from './README.md';

/**
 * Storybook Definition.
 */
export default {
  title: 'Molecules/Status',
  parameters: {
    docs: {
      description: {
        component: documentation
      }
    }
  }
};

export const statusExamples = () => (
  <div dangerouslySetInnerHTML={{ __html: status(statusData) }}/>
);
