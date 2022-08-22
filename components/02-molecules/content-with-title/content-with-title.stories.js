import React from 'react';

import ContentWithTitleTwig from './content-with-title.twig';
import ContentWithTitleData from './content-with-title.yml';

/**
 * Storybook Definition.
 */
export default {
  title: 'Molecules/Content With Title',
  argTypes: {
    title: {
      name: 'Title',
      control: {type: 'text'}
    },
    content: {
      name: 'Content',
      control: {type: 'text'}
    }
  }
};

export const contentWithTitle = (args) => (
  <div
    dangerouslySetInnerHTML={{__html: ContentWithTitleTwig(args)}}/>
);

contentWithTitle.args = ContentWithTitleData;
