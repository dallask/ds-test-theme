import React from 'react';
import documentation from './README.md';
import siteHeader from './site-header-b.twig';
import dropdownData from './site-header-b.yml';

/**
 * Storybook Definition.
 *
 * More info: https://storybook.js.org/docs/react/configure/story-layout
 */
export default {
  title: 'Organisms/Header',
  parameters: {
    layout: 'fullscreen',
    docs: {
      height: '500px',
      description: {
        component: documentation,
      },
      source: {
        code: `@TODO: PUT EXAMPLE CODE HERE AFTER DEVELOPED DRUPAL COMPONENT`,
        language: 'twig',
      },
    },
  },
  argTypes: {
    link_content: {
      control: { type: 'text' },
      name: 'Link Text',
    },
    content: {
      control: { type: 'text' },
      name: 'Navigation Text',
    },
  },
};

export const headerB = (args) => (
  <div
    dangerouslySetInnerHTML={{
      __html: siteHeader({
        ...dropdownData,
        ...args,
      }),
    }}
  />
);
