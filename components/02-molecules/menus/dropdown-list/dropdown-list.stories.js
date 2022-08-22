import React from 'react';

import dropdownListTwig from './dropdown-list.twig';

import dropdownListData from './dropdown-list.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Dropdown List' };

export const dropdownList = () => (
  <div dangerouslySetInnerHTML={{ __html: dropdownListTwig(dropdownListData) }}/>
);
