import React from 'react';

import siteHeader from './site-header-a.twig';

import mainMenuAData
  from '../../../02-molecules/menus/main-menu-a/main-menu-a.yml';
import '../../../02-molecules/menus/main-menu-a/main-menu-a';

/**
 * Storybook Definition.
 *
 * More info: https://storybook.js.org/docs/react/configure/story-layout
 */
export default {
  title: 'Organisms/Header',
  parameters: {
    layout: 'fullscreen',
  },
};

export const header_a = () => (
  <div
    dangerouslySetInnerHTML={{
      __html: siteHeader({
        ...mainMenuAData,
      }),
    }}
  />
);
