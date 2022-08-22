import React from 'react';

import footerLogosTwig from './_footer-logo.twig';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Logo/Footer Logo' };

export const footerLogo = () => (
  <div dangerouslySetInnerHTML={{ __html: footerLogosTwig() }}/>
);
