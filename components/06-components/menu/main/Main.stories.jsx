import React from 'react';

import templateTwig from './main.twig';
import templateData from './main.yml';
import './main';
import Menu from '@components/menu/abstract/Menu.stories';

export default {
  title: 'DS/Menu',
  component: 'Main',
  argTypes: Menu.argTypes
};

const TwigTemplate = (args) => (
  <div className='bg-primary navbar-dark navbar-expand-md' dangerouslySetInnerHTML={{
    __html: templateTwig({
      ...args,
    }),
  }}/>
);

export const Main = TwigTemplate.bind({});

Main.args = {
  menu_class: 'main-menu',
  menu_blockname: 'menu',
  menu_modifiers: [],
  menu_extra: [
    'menu-hover',
    'navbar-nav',
    'flex-row',
    'justify-content-end',
  ],
  title_prefix: '',
  title_suffix: '',
  menu_title_tag: 'h2',
  menu_title_base_class: 'title',
  configuration: templateData.configuration,
  content: templateData.content,
};
