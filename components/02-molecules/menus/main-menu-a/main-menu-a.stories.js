import React from 'react';

import mainMenuA from './main-menu-a.twig';

import mainMenuAData from './main-menu-a.yml';

import './main-menu-a';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Menus' };

export const main_a = () => (
  <div dangerouslySetInnerHTML={{ __html: mainMenuA(mainMenuAData) }}/>
);

main_a.parameters = {
  backgrounds: { default: 'gray' },
};
