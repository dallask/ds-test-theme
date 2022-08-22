import React from 'react';

import scrollToAnchor from './scroll-to.twig';
import scrollToData from './scroll-to.yml';
import documentation from './README.md';

/**
 * Storybook Definition.
 */
export default {
  title: 'Organisms/Paragraphs/ScrollTo',
  parameters: {
    docs: {
      description: {
        component: documentation,
      },
    },
  },
};

export const ScrollToAnchor = () => (
  <div dangerouslySetInnerHTML={{ __html: scrollToAnchor(scrollToData) }}/>
);
