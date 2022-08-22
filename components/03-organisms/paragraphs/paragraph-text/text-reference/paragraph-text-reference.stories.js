import React from 'react';

import paragraphTextTwig from './paragraph-text-reference.twig';

import paragrahTextReferenceData from './paragraph-text-reference-data.yml';

import documentation from '../README.md';

/**
 * Storybook Definition.
 */

export default {
  title: 'Organisms/Paragraphs/Text',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: documentation,
      },
    },
  },
};

export const TextReference = () => (
  <div dangerouslySetInnerHTML={{
    __html: paragraphTextTwig({
      ...paragrahTextReferenceData
    }),
  }}/>
);
