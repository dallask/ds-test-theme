import React from 'react';
import link from './link.twig';
import linkData from './link.yml';
import joinUsLinkData from './join-us-link.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Links' };

export const links = () => (
  <div dangerouslySetInnerHTML={{ __html: link(linkData) }}/>
);

export const joinUS = () => (
  <div dangerouslySetInnerHTML={{ __html: link(joinUsLinkData) }}/>
);
