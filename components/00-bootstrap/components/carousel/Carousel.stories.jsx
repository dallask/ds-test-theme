import React from 'react';

import templateTwig from './carousel.twig';
import data from './carousel.yml';

import docs from './carousel.mdx';

export default {
  title: 'Bootstrap/components',
  component: 'Carousel',
  argTypes: {},
  parameters: {
    docs: {
      page: docs,
    },
  },
};

const TwigTemplate = (args) => (
  <div className={'m-2'}
       dangerouslySetInnerHTML={{ __html: templateTwig({...args}) }}/>
);
export const Carousel = TwigTemplate.bind({});

Carousel.args = {
  carousel_arrows: data.arrows,
  carousel_indicators: data.indicators,
  carousel_dark: data.dark,
  carousel_content: data.content,
  carousel_classes: data.classes,
  carousel_attributes: data.attributes,
};
