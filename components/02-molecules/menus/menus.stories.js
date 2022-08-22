import React from 'react';

import breadcrumb from './breadcrumbs/breadcrumbs.twig';
import inlineMenu from './inline/inline-menu.twig';
import mainMenu from './main-menu/main-menu.twig';
import socialMenu from './social/social-menu.twig';
import fullPIMenu from './full-pi-menu/full-pi-menu.twig';

import breadcrumbsData from './breadcrumbs/breadcrumbs.yml';
import inlineMenuData from './inline/inline-menu.yml';
import mainMenuData from './main-menu/main-menu.yml';
import socialMenuData from './social/social-menu.yml';
import fullPIMenuData from './full-pi-menu/full-pi-menu.yml';

import './main-menu/main-menu';
import footerTwig from './footer-menu/footer-menu.twig';
import breadcrumbsDocumentation from './breadcrumbs/README.md';
import mainMenuDocumentation from './main-menu/README.md';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Menus' };

export const breadcrumbs = () => (
  <div dangerouslySetInnerHTML={{ __html: breadcrumb(breadcrumbsData) }}/>
);
breadcrumbs.parameters = {
  docs: {
    description: {
      component: breadcrumbsDocumentation
    }
  }
}

export const inline = () => (
  <div dangerouslySetInnerHTML={{ __html: inlineMenu(inlineMenuData) }}/>
);
export const main = () => (
  <div dangerouslySetInnerHTML={{ __html: mainMenu(mainMenuData) }}/>
);
main.parameters = {
  docs: {
    description: {
      component: mainMenuDocumentation
    }
  }
}
export const social = () => (
  <div dangerouslySetInnerHTML={{ __html: socialMenu(socialMenuData) }}/>
);
export const footerMenu = () => (
  <div dangerouslySetInnerHTML={{ __html: footerTwig() }}/>
);
export const fullPI = () => (
  <div dangerouslySetInnerHTML={{ __html: fullPIMenu(fullPIMenuData) }}/>
);
