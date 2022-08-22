import {addDecorator} from '@storybook/react';
import {useEffect} from '@storybook/client-api';
import Twig from 'twig';
import {setupTwig} from './setupTwig';
import {TabContainer} from "storybook-addon-docs-tabs";
import {DocsContainer} from "@storybook/addon-docs/blocks";
import 'cypress-storybook/react'

// jQuery
import './jquery-global.js';

// If in a Drupal project, it's recommended to import a symlinked version of
// drupal.js.
import './_drupal.js';

// Popper. Can be Included as a CDN dependency in the
// .storybook/preview-head.html file. Comment and add CDN in the
// .storybook/preview-head.html file if you want to have a local version.
import '@popperjs/core';

// Bootstrap
import '../components/00-bootstrap/scss/bootstrap.library.scss';
import '../components/00-bootstrap/js/bootstrap.js';

// Slick
import 'slick-carousel/slick/slick.js';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// SimpleBar
import 'simplebar';
import 'simplebar/dist/simplebar.css';

// Focus
import '../components/00-base/04-focus/focus';
import '../components/00-base/04-focus/focus.advanced';

// GLOBAL CSS
import '../components/style.scss';

// addDecorator deprecated, but not sure how to use this otherwise.
addDecorator((storyFn) => {
  useEffect(() => Drupal.attachBehaviors(), []);
  return storyFn();
});

setupTwig(Twig);

const customViewports = {
  otsuka_mobile: {
    name: 'Otsuka Mobile | 360px',
    styles: {
      width: '360px',
      height: '720px'
    }
  },
  otsuka_tablet: {
    name: 'Otsuka Tablet | 750px',
    styles: {
      width: '750px',
      height: '801px'
    }
  },
  otsuka_desktop: {
    name: 'Otsuka Desktop | 1440px',
    styles: {
      width: '1440px',
      height: '900'
    }
  }
};

export const parameters = {
  theme: {
    default: 'default',
    selector: 'html',
    themes: [
      {
        id: 'default',
        title: 'Default',
        class: 'light',
        color: '#fff'
      },
      {
        id: 'sozosei-foundation',
        title: 'Sozosei Foundation',
        class: 'sozosei-foundation',
        color: '#000'
      }
    ]
  },
  docs: {
    container: ({children, context}) => (
      <DocsContainer context={context}>
        <TabContainer context={context}>{children}</TabContainer>
      </DocsContainer>
    )
  },
  backgrounds: {
    values: [
      {
        name: 'white',
        value: '#fff'
      },
      {
        name: 'black',
        value: '#000'
      },
      {
        name: 'gray',
        value: '#666'
      }
    ]
  },
  viewport: {
    viewports: customViewports
  },
  creevey: {
    skip: {
      Failed: {
        in: ['chrome_desktop', 'chrome_mobile'],
        stories: [
          'Accordion',
          'Alert',
          'Article',
          'Article Ds 1',
          'Badge',
          'Breadcrumb',
          'Card',
          'Card Example',
          'Card With Background',
          'Checks Radios',
          'Close',
          'Collapse',
          'Columns',
          'Css Grid',
          'Figures',
          'Floating Labels',
          'Footer A',
          'Footer B',
          'Form Control',
          'Full',
          'Grid',
          'Gutters',
          'Hero Video Background',
          'Home Page B',
          'Images',
          'Input Group',
          'Layout',
          'List Group',
          'Main A',
          'Navbar',
          'Navs Tabs',
          'Pagination',
          'Placeholder',
          'Popover',
          'Prc Footer',
          'Progress',
          'Range',
          'Scroll Slider',
          'Select',
          'Spinners',
          'Table',
          'Tables',
          'Toasts',
          'Tooltips',
          'Typography',
          'Validation'],
      },
    },
  },
  options: {
    storySort: {
      order: [
        'Introduction',
        'Getting Started',
        'Roadmap',
        'Docs',
        'Bootstrap',
        'Base',
        'Atoms',
        'Molecules',
        'Organisms',
        'Templates',
        'Pages'],
    },
  },
  controls: { expanded: true },
};

