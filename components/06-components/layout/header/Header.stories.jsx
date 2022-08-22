import React from 'react';

import templateTwig from './header.twig';

import Wrapper from '@components/layout/abstract/Wrapper.stories';

export default {
  title: 'DS/Layout',
  component: 'Header',
  argTypes: Wrapper.argTypes
};

delete Wrapper.argTypes.wrapper_content;
delete Wrapper.argTypes.footer_content;
delete Wrapper.argTypes.page;

const TwigTemplate = (args) => (
  <div dangerouslySetInnerHTML={{
    __html: templateTwig({
      ...args,
    }),
  }}/>
);
export const Header = TwigTemplate.bind({});

Header.args = {
  wrapper_base_class: 'header',
  wrapper_blockname: 'header-block',
  wrapper_modifiers: ['header'],
  wrapper_tag: 'header',
  wrapper_variant: 'primary',
  wrapper_text_color: 'white',
  header_content: 'Header Content',
  wrapper_attributes: {'id': 'header_id'}
};
