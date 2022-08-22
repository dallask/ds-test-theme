import React from 'react';

import paragraphImageTwig from './paragraph-image.twig';

import paragraphImageData from './paragraph-image-data.yml';

/**
 * Storybook Definition.
 */

export default {
  title: 'Organisms/Paragraphs',
  parameters: {
    layout: 'fullscreen',
  },
};

export const Image = () => (
  <div dangerouslySetInnerHTML={{
    __html: paragraphImageTwig(paragraphImageData),
  }}/>
);
