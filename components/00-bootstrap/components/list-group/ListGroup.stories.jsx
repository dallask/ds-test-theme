import React from 'react';

import templateTwig from './listGroup.twig';
import data from './listGroup.yml';

import docs from './listGroup.mdx';

export default {
  title: 'Bootstrap/components',
  component: 'listGroup',
  argTypes: {
    size: {
      table: {
        disable: true,
      },
    },
    text_alignment: {
      table: {
        disable: true,
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
  <div className="m-2">
    <span dangerouslySetInnerHTML={{
      __html: templateTwig({
        ...args,
      }),
    }}/>
  </div>
);
export const ListGroup = TwigTemplate.bind({});

ListGroup.args = {
  content: data.content,
  flush: data.flush,
  classes: data.classes,
};
