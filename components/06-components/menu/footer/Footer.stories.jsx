import React from 'react';

import templateTwig from './footer.twig';
import templateData from './footer.yml';
import Menu from '@components/menu/abstract/Menu.stories';

export default {
  title: 'DS/Menu',
  component: 'Footer',
  argTypes: Menu.argTypes
};

const TwigTemplate = (args) => (
  <div className='bg-secondary' dangerouslySetInnerHTML={{
    __html: templateTwig({
      ...args,
    }),
  }}/>
);

export const Footer = TwigTemplate.bind({});

Footer.args = {
  menu_class: 'menu',
  menu_blockname: 'footer',
  menu_modifiers: [],
  menu_extra: [],
  title_prefix: '',
  title_suffix: '',
  menu_title_tag: 'h2',
  menu_title_base_class: 'title',
  configuration: templateData.configuration,
  content: templateData.content,
};
