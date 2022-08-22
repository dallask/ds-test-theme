import React from 'react';

import slide from './_scroll-slider.twig';

import slides from './_scroll-slider.yml';

import './_gsap';
import './scroll-slider';
import docs from './README.mdx';

/**
 * Storybook Definition.
 */
export default {
  title: 'Organisms/Paragraphs',
  component: 'Scroll slider',
  parameters: {
    docs: {
      page: docs,
    },
  },
};

export const ScrollSlider = () => (
  <div dangerouslySetInnerHTML={{ __html: slide(slides) }}/>
);
