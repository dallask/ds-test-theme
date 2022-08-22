import React from 'react';

import scrollToNav from './scroll-to-element-navigation.twig';
import scrollToData from './scroll-to-element-navigation.yml';
import './scroll-to-element-navigation';
import docs from './docs.mdx';

/**
 * Storybook Definition.
 */
export default {
  title: 'Organisms/Paragraphs/ScrollTo',
  component: 'Scroll to',
  parameters: {
    docs: {
      page: docs,
    },
  },
};

export const scrollToNavigation = () => (
  <div dangerouslySetInnerHTML={{ __html: scrollToNav(scrollToData) }}/>
);
