import React from 'react';
import './sticky-video.js';

import PrescribingInromationTwig from './sticky-video.twig';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/Blocks/Sticky Video' };

export const Default = () => (
  <div dangerouslySetInnerHTML={{ __html: PrescribingInromationTwig() }}/>
);
