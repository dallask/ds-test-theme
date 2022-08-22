import React from 'react';

import interstitial from './interstitial.twig';
import './interstitial.js';

export default { title: 'Organisms/Blocks/Interstitials' };

export const Default = () => (
  <div dangerouslySetInnerHTML={{ __html: interstitial() }}/>
);
