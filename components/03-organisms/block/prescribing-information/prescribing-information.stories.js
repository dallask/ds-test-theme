import React from 'react';

import Component from './prescribing-information.twig';
import exampleData from './prescribing-information.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/Blocks/Prescribing information' };

export const Default = () => (
  <div className={'region--header-middle'}>
    <div className={'region region-header-middle clearfix'}
         dangerouslySetInnerHTML={{
           __html: Component(exampleData),
         }}/>
  </div>
);
