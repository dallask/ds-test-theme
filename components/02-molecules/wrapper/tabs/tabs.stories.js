import React from 'react';

import tabs from './tabs.twig';

import tabData from './tabs.yml';

import './tabs';
import documentation from './README.md';

/**
 * Storybook Definition.
 */
export default {
  title: 'Molecules/Wrappers/Tabs',
  parameters: {
    docs: {
      description: {
        component: documentation
      }
    }
  }
};

export const JSTabs = () => (
  <div dangerouslySetInnerHTML={{ __html: tabs(tabData) }}/>
);
