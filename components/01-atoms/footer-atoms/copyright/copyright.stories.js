import React from 'react';

import copyrightTwig from './copyright.twig';
import copyrightDate from './copyright.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/FooterAtoms' };

export const CopyrightA = () => (
  <div dangerouslySetInnerHTML={{ __html: copyrightTwig(copyrightDate) }}/>
);
