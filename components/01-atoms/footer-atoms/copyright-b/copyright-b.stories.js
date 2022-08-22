import React from 'react';
import blockData from './copyright-b.yml';
import copyRightBAtom from './copyright-b.twig';

/**
 * Storybook Definition.
 */
export default {
  title: 'Atoms/FooterAtoms',
};

export const copyrightB = () => (
  <div dangerouslySetInnerHTML={{ __html: copyRightBAtom(blockData) }}/>
);
