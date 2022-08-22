import React from 'react';

import templateTwig from './card.twig';
import data from './card.yml';

import docs from './card.mdx';

export default {
  title: 'Bootstrap/components',
  component: 'card',
  argTypes: {
    size: {
      table: {
        disable: true,
      },
    },
    text_alignment: {
      options: data.text_alignment,
      control: { type: 'radio' },
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
  <div className="m-2 row">
    {Object.values(data.variant).map(variant => (
      <span key={variant} className="col-15 mb-3" dangerouslySetInnerHTML={{
        __html: templateTwig({
          ...args,
          variant: variant,
        }),
      }}/>
    ))}
  </div>
);
export const Card = TwigTemplate.bind({});

Card.args = {
  img_header: data.img_header,
  img: data.img,
  content_header: data.content_header,
  content: data.content,
  img_footer: data.img_footer,
  content_footer: data.content_footer,
  classes: data.classes,
};
