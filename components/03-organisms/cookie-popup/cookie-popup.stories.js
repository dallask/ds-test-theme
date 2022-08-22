import React from 'react';
import documentation from './README.md';

import cookiePopupTwig from './cookie-popup.twig';
import './cookie-popup';

/**
 * Storybook Definition.
 */
export default {
  title: 'Organisms',
  parameters: {
    docs: {
      description: {
        component: documentation
      }
    },
    layout: 'fullscreen'
  }
};

export const cookiePopup = (args) => (
  <div
    dangerouslySetInnerHTML={{
      __html: cookiePopupTwig(args)
    }}
  />
);
