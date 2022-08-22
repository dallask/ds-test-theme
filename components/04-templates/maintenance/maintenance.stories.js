import React from 'react';

import placeHolderTwig from './maintenance.twig';
import documentation from './README.md';

import maintenanceData from './maintenance.yml';

/**
 * Storybook Definition.
 */
export default {
  title: 'Templates/Maintenance',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: documentation
      }
    }
  }
};

export const maintenancePage = () => (
  <div dangerouslySetInnerHTML={{ __html: placeHolderTwig({ ...maintenanceData }) }}/>
);
