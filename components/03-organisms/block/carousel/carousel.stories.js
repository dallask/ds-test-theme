import React from 'react';

import carouselTwig from './carousel.twig';
import carouselData from './carousel.yml';

import documentation from './README.md';

import './carousel.js';

/**
 * Storybook Definition.
 */
export default {
  title: 'Organisms/Blocks/Carousel',
  parameters: {
    docs: {
      description: {
        component: documentation,
      },
    },
  },
};

export const Default = () => (
  <div dangerouslySetInnerHTML={{
    __html: carouselTwig(carouselData),
  }}/>
);
