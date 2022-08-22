import React from 'react';

import motion from './motion.twig';

import motionData from './motion.yml';

/**
 * Add storybook definition for Animations.
 */
export default { title: 'Base' };

export const Motion = () => (
  <div
    dangerouslySetInnerHTML={{
      __html: motion(motionData),
    }}
  />
);
