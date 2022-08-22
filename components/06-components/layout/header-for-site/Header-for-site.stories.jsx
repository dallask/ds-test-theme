import React from 'react';

import templateTwig from './header-for-site.twig';
import templateData from './header-for-site.yml';

import menu from "@components/menu/main/main.twig";
import menuData from "@components/menu/abstract/menu.yml";
import block from "@components/block/abstract/block.twig";

import Wrapper from '@components/layout/abstract/Wrapper.stories';

export default {
  title: 'DS/Layout',
  component: 'Header for site',
  argTypes: Wrapper.argTypes
};

delete Wrapper.argTypes.wrapper_content;

Wrapper.argTypes.page = {
  control: {
    type: 'object'
  },
  defaultValue: {
    header_top: '',
    header_logo: '',
    header_menu: '',
    header_bottom: '',
  },
  description: 'Page content',
  table: {
    defaultValue: {
      summary: 'header_top: \'\',\n' +
        '    header_logo: \'\',\n' +
        '    header_menu: \'\',\n' +
        '    header_bottom: \'\',\n'
    },
    category: 'Content',
  }
};

const TwigTemplate = (args) => (
  <div dangerouslySetInnerHTML={{
    __html: templateTwig({
      ...args,
    }),
  }}/>
);
export const HeaderForSite = TwigTemplate.bind({});

templateData.page = {
  header_top: block({
    content: '<p class="text-center p-2 bg-warning m-0">' +
      '<a class="text-black" href="#">COVID-19 Warning</a>' +
      '</p>',
  }),
  header_logo: block({
    content: '<a href="/" rel="home">' +
      '<img src="logo_gray.png" alt="Home">' +
      '</a>',
  }),
  header_menu: menu({
    menu_class: 'main-menu',
    content: menuData.content,
  }),
};

HeaderForSite.args = {
  page: templateData.page,
  wrapper_base_class: 'header',
  wrapper_container_class: 'container-full',
  wrapper_blockname: 'header-block',
  wrapper_modifiers: ['header'],
  wrapper_tag: 'header',
  wrapper_variant: 'primary',
  wrapper_text_color: 'white',
  wrapper_attributes: {'id': 'header_id'}
};
