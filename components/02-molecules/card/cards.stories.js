import React from 'react';

import card from './card.twig';

import cardData from './card.yml';
import cardBgData from './card-bg.yml';
import documentation from './README.md';

/**
 * Storybook Definition.
 */
export default {
  title: 'Molecules/Cards',
  parameters: {
    docs: {
      description: {
        component: documentation
      }
    }
  }
};

export const cardExample = () => (
  <div dangerouslySetInnerHTML={{ __html: card(cardData) }}/>
);
export const cardWithBackground = () => (
  <div
    dangerouslySetInnerHTML={{ __html: card({ ...cardData, ...cardBgData }) }}
  />
);

export const cardDs1 = () => (
  <div class="ds1" dangerouslySetInnerHTML={{ __html: card(cardData) }} />
);
