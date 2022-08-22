import React from 'react';

import buttonTwig from './button.twig';
import buttonData from './button.yml';

import docs from './button.mdx';

export default {
  title: 'Bootstrap/components',
  component: 'Button',
  argTypes: {
    button_size: {
      options: buttonData.size,
      control: { type: 'select' },
      table: {
        disable: false,
      },
    },
  },
  parameters: {
    docs: {
      page: docs,
    },
  },
};

const TwigTemplate = (args) => (
  Object.values(buttonData.variant).map(button_variant => (
    <span key={button_variant} className={'m-2 d-inline-block'}>
      <span
        dangerouslySetInnerHTML={{ __html: buttonTwig({ ...args, button_variant }) }}/>
    </span>
  ))
);
export const Button = TwigTemplate.bind({});

Button.args = {
  button_content: buttonData.content,
  button_size: buttonData.default_size,
  button_active: buttonData.active,
  button_disabled: buttonData.disabled,
  button_classes: buttonData.classes,
  button_attributes: buttonData.attributes,
};
