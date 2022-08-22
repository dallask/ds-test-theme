import React from 'react';

// Container
import WrapperContainer from './container/paragraph-wrapper-container.twig';
import wrapperContainerData from './container/paragraph-wrapper-container-data.yml';

// Carousel Slick
import WrapperCarousel from './carousel/paragraph-wrapper-carousel.twig';
import wrapperCarouselData from './carousel/paragraph-wrapper-carousel-data.yml';
import './carousel/paragraph-wrapper-carousel.js';

// Carousel Bootstrap
import WrapperCarouselBootstrap
  from './carousel-bootstrap/paragraph-wrapper-carousel-bootstrap.twig';
import wrapperCarouselBootstrapData
  from './carousel-bootstrap/paragraph-wrapper-carousel-bootstrap-data.yml';

// Wrapper accordion
import Wrapperaccordion from './collapsible/paragraph-wrapper-collapsible.twig';
import wrapperAccordionData
  from './collapsible/paragraph-wrapper-collapsible-data.yml';

// Wrapper Tabs.
import WrapperTabsTwig from './tabbed/paragraph-wrapper-tabbed.twig';

// Wrapper Card.
import WrapperCardTwig from './card/paragraph-wrapper-card.twig';
import wrapperCardData from './card/paragraph-wrapper-card-data.yml';

import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';

// Added documentation tab.
import documentation from './README.md';

/**
 * Storybook Definition.
 */
export default {
  title: 'Organisms/Paragraphs/Wrapper',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: documentation,
      },
    },
  },
};

export const Container = () => (
  <div dangerouslySetInnerHTML={{
    __html: WrapperContainer(wrapperContainerData),
  }}/>
);

export const CarouselSlick = () => (
  <div dangerouslySetInnerHTML={{
    __html: WrapperCarousel(wrapperCarouselData),
  }}/>
);

export const CarouselBootstrap = () => (
  <div dangerouslySetInnerHTML={{
    __html: WrapperCarouselBootstrap(
      { ...wrapperCarouselBootstrapData }),
  }}/>
);

export const Accordion = () => (
  <div dangerouslySetInnerHTML={{
    __html: Wrapperaccordion(wrapperAccordionData),
  }}/>
);

export const WrapperTabs = () => (
  <div dangerouslySetInnerHTML={{
    __html: WrapperTabsTwig(wrapperAccordionData),
  }}/>
);

export const WrapperCard = (args) => (
  <div dangerouslySetInnerHTML={{
    __html: WrapperCardTwig({
      ...wrapperCardData,
      ...args,
    }),
  }}/>
);

export const WrapperCardDs1 = (args) => (
  <div class="ds1" dangerouslySetInnerHTML={{
    __html: WrapperCardTwig({
      ...wrapperCardData,
      ...args,
    }),
  }}/>
);

const layouts = [
  {
    layout: 'layout-1-column',
  },
  {
    layout: 'layout-2-columns',
    image_position: 'left',
  },
  {
    layout: 'layout-2-columns',
    image_position: 'right',
  },
];

WrapperCard.args = WrapperCardDs1.args = {
  layout: 0,
};

WrapperCard.argTypes = WrapperCardDs1.argTypes = {
  layout: {
    name: 'Layout',
    options: Object.keys(layouts),
    mapping: layouts,
    control: {
      type: 'select',
      labels: {
        0: 'One column',
        1: 'Two Columns - Image Left',
        2: 'Two Columns - Image Right',
      },
    },
  },
};
