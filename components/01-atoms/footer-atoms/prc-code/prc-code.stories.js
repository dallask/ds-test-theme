import React from 'react';
import prcCodeData from './prc-code.yml';
import prcCodeAtom from './prc-code.twig';

/**
 * Storybook Definition.
 */
export default {
  title: 'Atoms/FooterAtoms/Prc/Code',
};

export const Code = () => (
  <div dangerouslySetInnerHTML={{ __html: prcCodeAtom(prcCodeData) }}/>
);
