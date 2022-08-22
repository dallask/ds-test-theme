import React from 'react';

import heroImageBackgroundTwig from './hero-image-background.twig';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/Paragraphs/Hero' };

export const HeroImageBackground = () => (
  <div dangerouslySetInnerHTML={{
    __html: heroImageBackgroundTwig(
      {
        'content': 'This is an example text',
      },
    ),
  }}/>
);
