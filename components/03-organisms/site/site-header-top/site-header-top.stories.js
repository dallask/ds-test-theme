import React from 'react';

import PrescribingInformationTwig from './site-header-top.twig';
import PrescribingInromationData from '../../../02-molecules/menus/full-pi-menu/full-pi-menu.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/Header' };

export const headerTop = () => (
  <div className={'region region-header-top clearfix'}
     dangerouslySetInnerHTML={{
       __html: PrescribingInformationTwig(PrescribingInromationData),
     }}/>
);
