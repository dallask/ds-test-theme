import React from 'react';

import templateTwig from './collapse.twig';
import data from './collapse.yml';

import docs from './collapse.mdx';

export default {
  title: 'Bootstrap/components',
  component: 'collapse',
  argTypes: {
    size: {
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
    <p>
      <button className="btn btn-primary" type="button"
              data-bs-toggle="collapse" data-bs-target={`#${data.id}`}
              aria-expanded="false" aria-controls={data.id}>
        Toggle width collapse
      </button>
    </p>
    <span dangerouslySetInnerHTML={{
      __html: templateTwig({
        ...args,
      }),
    }}/>
  </div>
);
export const Collapse = TwigTemplate.bind({});

Collapse.args = {
  id: data.id,
  content: data.content,
  horizontal: data.horizontal,
  classes: data.classes,
};
