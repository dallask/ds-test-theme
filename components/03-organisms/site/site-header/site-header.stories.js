import React from 'react';

import siteHeader from './site-header.twig';

import mainMenuAData from '../../../02-molecules/menus/main-menu/main-menu.yml';
import '../../../02-molecules/menus/main-menu/main-menu';
import documentation from './README.md';

/**
 * Storybook Definition.
 *
 * More info: https://storybook.js.org/docs/react/configure/story-layout
 */
export default {
  title: 'Organisms/Header',
  parameters: {
    docs: {
      description: {
        component: documentation,
      },
    },
    layout: 'fullscreen',
  },
};

export const header = () => (
  <div
    dangerouslySetInnerHTML={{
      __html: siteHeader({
        ...mainMenuAData,
      }),
    }}
  />
);
