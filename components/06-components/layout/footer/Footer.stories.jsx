import React from 'react';

import templateTwig from './footer.twig';

import Wrapper from '@components/layout/abstract/Wrapper.stories';

delete Wrapper.argTypes.wrapper_content;
delete Wrapper.argTypes.header_content;
delete Wrapper.argTypes.page;

export default {
  title: 'DS/Layout',
  component: 'Footer',
  argTypes: Wrapper.argTypes
};

const TwigTemplate = (args) => (
  <div dangerouslySetInnerHTML={{
    __html: templateTwig({
      ...args,
    }),
  }}/>
);

export const Footer = TwigTemplate.bind({});

Footer.args = {
  wrapper_base_class: 'footer',
  wrapper_blockname: 'footer-block',
  wrapper_modifiers: ['footer'],
  wrapper_tag: 'footer',
  wrapper_variant: 'secondary',
  wrapper_text_color: 'white',
  footer_content: 'Footer Content',
  wrapper_attributes: {'id': 'footer_id'}
};
