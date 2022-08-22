import React from 'react';
import documentation from './README.md';

import Component from './eu_cookie_compliance_popup_info.twig';
import componentData from './eu_cookie_compliance_popup_info.yml';

export default {
  title: 'Organisms/Blocks/EU Cookie Warning',
  parameters: {
    docs: {
      description: {
        component: documentation,
      },
    },
  },
};

export const Top = () => (<div
  dangerouslySetInnerHTML={{
    __html: '<div id="sliding-popup" role="banner" aria-describedby="popup-text" class="sliding-popup-top sliding-popup-right" style="height: auto; width: 100%; bottom: 0px;">' +
      Component(componentData) +
      '</div>',
  }}
/>);

export const Bottom = () => (<div
  dangerouslySetInnerHTML={{
    __html: '<div id="sliding-popup" role="banner" aria-describedby="popup-text" class="sliding-popup-bottom" style="height: auto; width: 100%; bottom: 0px;">' +
      Component(componentData) +
      '</div>',
  }}
/>);

export const Left = () => (<div
  dangerouslySetInnerHTML={{
    __html: '<p style="color: red;">The Drupal module EU Cookie Compliance (GDPR Compliance) does not currently support alignment. Please add class alignment-sliding-popup-left to div#sliding-popup manually</p><div id="sliding-popup" role="banner" aria-describedby="popup-text" class="sliding-popup-bottom alignment-sliding-popup-left" style="height: auto; width: 100%; bottom: 0px;">' +
      Component(componentData) +
      '</div>',
  }}
/>);

export const Right = () => (<div
  dangerouslySetInnerHTML={{
    __html: '<p style="color: red;">The Drupal module EU Cookie Compliance (GDPR Compliance) does not currently support alignment. Please add class alignment-sliding-popup-right to div#sliding-popup manually</p><div id="sliding-popup" role="banner" aria-describedby="popup-text" class="sliding-popup-bottom alignment-sliding-popup-right" style="height: auto; width: 100%; bottom: 0px;">' +
      Component(componentData) +
      '</div>',
  }}
/>);
