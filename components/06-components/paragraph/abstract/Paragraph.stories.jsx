import React from 'react';

import templateTwig from './paragraph.twig';
import documentation from './README.md';

export default {
  title: 'DS/Paragraph',
  component: 'Paragraph',
  parameters: {
    docs: {
      description: {
        component: documentation
      }
    },
  },
  argTypes: {
    paragraph_base_class: {
      control: {
        type: 'text'
      },
      defaultValue: 'paragraph',
      description: 'Paragraph base class for BEM',
      table: {
        defaultValue: {
          summary: 'paragraph',
        },
        category: 'BEM',
      }
    },
    paragraph_blockname: {
      control: {
        type: 'text'
      },
      defaultValue: 'paragraph',
      description: 'Paragraph name for BEM',
      table: {
        defaultValue: {
          summary: 'paragraph',
        },
        category: 'BEM',
      }
    },
    paragraph_modifiers: {
      control: {
        type: 'object'
      },
      defaultValue: [],
      description: 'Paragraph modifiers for BEM',
      table: {
        defaultValue: {
          summary: 'array[]',
        },
        category: 'BEM',
      }
    },
    paragraph_container_class: {
      control: {
        type: 'text'
      },
      defaultValue: 'container-fluid',
      description: 'Paragraph container class',
      table: {
        defaultValue: {
          summary: 'container-fluid',
          detail: 'You can use bootstrap classes like: "container", "container-fluid". Or any other classes.',
        },
        category: 'Structure',
      }
    },
    content: {
      control: {
        type: 'text'
      },
      name: 'Content',
      defaultValue: 'Paragraph content',
      description: 'Paragraph content',
      table: {
        defaultValue: {
          summary: 'Paragraph Content',
        },
        category: 'Content',
      }
    },
    paragraph_extra: {
      control: {
        type: 'object'
      },
      defaultValue: [
        'classnameOne',
        'classnameTwo',
      ],
      description: 'Paragraph extra classes for BEM',
      table: {
        defaultValue: {
          summary: 'array[\n' +
            '        \'classnameOne\',\n' +
            '        \'classnameTwo\',\n' +
            '      ]',
        },
        category: 'BEM',
      }
    },
  }
};

const TwigTemplate = (args) => (
  <div dangerouslySetInnerHTML={{
    __html: templateTwig({
      ...args,
    }),
  }}/>
);
export const Paragraph = TwigTemplate.bind({});

Paragraph.args = {
  paragraph_base_class: 'paragraph',
  paragraph_blockname: 'paragraph',
  paragraph_container_class: 'container-fluid',
  paragraph_modifiers: [],
  content: 'Paragraph Content',
  paragraph_extra: [
    'classnameOne',
    'classnameTwo',
  ],
};
