import React from 'react';

import grid from './grid.twig';

import gridData from './grid.yml';
import gridCardData from './grid-cards.yml';
import gridCtaData from './grid-ctas.yml';
import documentation from './README.md';

/**
 * Storybook Definition.
 */
export default {
  title: 'Organisms/Grids',
  parameters: {
    docs: {
      description: {
        component: documentation,
      },
    },
  },
};

export const defaultGrid = () => (
  <div dangerouslySetInnerHTML={{ __html: grid(gridData) }}/>
);
export const cardGrid = () => (
  <div
    dangerouslySetInnerHTML={{ __html: grid({ ...gridData, ...gridCardData }) }}
  />
);
export const ctaGrid = () => (
  <div
    dangerouslySetInnerHTML={{ __html: grid({ ...gridData, ...gridCtaData }) }}
  />
);
export const cardGridDs1Rows = () => (
  <div class="ds1"
       dangerouslySetInnerHTML={{
         __html: grid(
           { ...gridData, ...gridCardData, ...{ grid_modifiers: ['item-rows'] } }),
       }}
  />
);
export const cardGridDs1Grid = () => (
  <div class="ds1"
       dangerouslySetInnerHTML={{
         __html: grid(
           { ...gridData, ...gridCardData, ...{ grid_modifiers: ['item-cards'] } }),
       }}
  />
);
