import React from 'react';

import blockDrupalMenuWrapperTwig from './block--system-menu-block.twig';
import blockDrupalMenuWrapperData from './block--system-menu-block.yml';

import blockDrupalWrapperTwig from './block.twig';
import blockDrupalWrapperData from './block.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/Blocks' };

export const blockDrupalWrapper = () => (
  <div dangerouslySetInnerHTML={{ __html: blockDrupalWrapperTwig(blockDrupalWrapperData) }}/>
);

export const blockDrupalMenuWrapper = () => (
  <div dangerouslySetInnerHTML={{ __html: blockDrupalMenuWrapperTwig(blockDrupalMenuWrapperData) }}/>
);
