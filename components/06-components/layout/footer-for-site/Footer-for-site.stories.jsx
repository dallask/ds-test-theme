import React from 'react';

import templateTwig from './footer-for-site.twig';
import templateData from './footer-for-site.yml';

import prcCodeDate from "@components/block/prc-code-date/prc-code-date.twig";
import menu from "@components/menu/footer/footer.twig";
import menuData from "@components/menu/footer/footer.yml";
import block from "@components/block/abstract/block.twig";

import Wrapper from '@components/layout/abstract/Wrapper.stories';

export default {
  title: 'DS/Layout',
  component: 'Footer for site',
  argTypes: Wrapper.argTypes
};

delete Wrapper.argTypes.wrapper_content;

Wrapper.argTypes.page = {
  control: {
    type: 'object'
  },
  defaultValue: {
    footer_logo: '',
    footer_menu: '',
    footer_copyright: '',
    footer_prc: '',
    second_middle_first: '',
    second_middle_last: '',
    third_middle: '',
    fourth_middle_first: '',
    fourth_middle_last: '',
    fifth_middle_first: '',
    fifth_middle_second: '',
    fifth_middle_third: '',
    fifth_middle_fourth: '',
  },
  description: 'Page content',
  table: {
    defaultValue: {
      summary: 'footer_logo: \'\',\n' +
        '    footer_menu: \'\',\n' +
        '    footer_copyright: \'\',\n' +
        '    footer_prc: \'\',\n' +
        '    second_middle_first: \'\',\n' +
        '    second_middle_last: \'\',\n' +
        '    third_middle: \'\',\n' +
        '    fourth_middle_first: \'\',\n' +
        '    fourth_middle_last: \'\',\n' +
        '    fifth_middle_first: \'\',\n' +
        '    fifth_middle_second: \'\',\n' +
        '    fifth_middle_third: \'\',\n' +
        '    fifth_middle_fourth: \'\','
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
export const FooterForSite = TwigTemplate.bind({});

templateData.page = {
  footer_logo: block({
    content: '<a href="/" rel="home">' +
      '<img src="logo_gray.png" alt="Home">' +
      '</a>',
  }),
  footer_menu: menu({
    content: menuData.content,
  }),
  footer_copyright: block({
    content: '<p>© 2022 Otsuka America Pharmaceutical, Inc<br>\n' +
      'All rights reserved.</p>',
  }),
  footer_prc: prcCodeDate({
    content:
      {
        '#prc_code_markup': '10US21EUC0004',
        '#prc_date_markup': 'May 2022',
      }
  }),
};

FooterForSite.args = {
  page: templateData.page,
  wrapper_base_class: 'footer',
  wrapper_blockname: 'footer-block',
  wrapper_modifiers: ['footer'],
  wrapper_tag: 'footer',
  wrapper_variant: 'secondary',
  wrapper_text_color: 'white',
  wrapper_attributes: {'id': 'footer_id'}
};
