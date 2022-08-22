import React from 'react';

import { Button } from './Button';
import buttonTwig from '../twig/button.twig';

// More on default export:
// https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Button/ButtonControls',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    button_content: {
      options: ['Text1', 'Text2'],
      control: { type: 'radio' },
    },
    label: {
      options: ['Button', 'Submit'],
      control: { type: 'radio' },
    },
  },
};

// More on component templates:
// https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Submit',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
// @todo update to more usuful example
const TwigTemplate = (args) => (
  <div dangerouslySetInnerHTML={{ __html: buttonTwig(args) }}/>
);
export const TwigExample = TwigTemplate.bind({});
TwigExample.args = {
  button_content: 'Text2',
};
