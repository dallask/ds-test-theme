import React from 'react';
import prcDateData from './prc-date.yml';
import prcDateAtom from './prc-date.twig';

/**
 * Storybook Definition.
 */
export default {
  title: 'Atoms/FooterAtoms/Prc/Date',
};

export const Date = () => (
  <div dangerouslySetInnerHTML={{ __html: prcDateAtom(prcDateData) }}/>
);
