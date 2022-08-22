import React from 'react';
import ImageLinkElement from './image-link.twig';
import imageLinkData from './image-link.yml';

/**
 * Storybook Definition.
 */
export default {
  title: 'Molecules/Image Link',
};

export const imageExample = () => (
  <div dangerouslySetInnerHTML={{ __html: ImageLinkElement(imageLinkData) }}/>
);
