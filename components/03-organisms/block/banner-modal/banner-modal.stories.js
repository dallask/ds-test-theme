import React from 'react';

import Component from './banner-modal.twig';
import bannerModalData from './banner-modal.yml';

import '../../../02-molecules/wrapper/modal/modal';
import documentation from './README.md';

/**
 * Storybook Definition.
 */
export default {
  title: 'Organisms/Blocks/Banner Modal',
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
    __html: Component(bannerModalData),
  }}/>
);
