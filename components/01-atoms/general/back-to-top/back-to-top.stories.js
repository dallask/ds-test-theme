import React from 'react';
import backToTopAtom from './back-to-top.twig';
import './back-to-top-buttons';

/**
 * Storybook Definition.
 */
export default {
  title: 'Atoms/General/Back to Top',
  argTypes: {
    visibility: {
      options: [
        'persistent',
        'btm-appears-on-scroll',
        ],
      control: { type: 'radio' },
      name: 'Visibility',
    },
    btnShape: {
      options: ['btn-circle', 'btn-square'],
      control: { type: 'radio' },
      name: 'Shape',
    },
    buttonPosition: {
      options: [
        'right', 'bottom',
      ],
      control: { type: 'radio' },
      name: 'Button position',
    },
    buttonText: {
      control: 'text',
      name: 'Button text',
    },
    text: {
      control: 'text',
      name: ' text',
    },
  },
};

export const defaultElement = (arg) => (
  <div dangerouslySetInnerHTML={{ __html: backToTopAtom(defaultElement.arg) }}/>
);

defaultElement.arg = {
  btnShape: 'btn-circle',
  visibility: 'btm-appears-on-scroll',
};
