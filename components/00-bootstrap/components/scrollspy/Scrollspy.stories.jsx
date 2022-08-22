import React from 'react';

import templateTwig from './scrollspy.twig';
import data from './scrollspy.yml';

import './scrollspy.library.scss';

import documentation from './README.md';

export default {
  title: 'Bootstrap/components',
  component: 'Scrollspy',
  parameters: {
    docs: {
      description: {
        component: documentation
      }
    },
  },
  argTypes: {
    scrollspy_base_class: {
      control: {
        type: 'text'
      },
      defaultValue: 'scrollspy',
      description: 'Block base class for BEM',
      table: {
        defaultValue: {
          summary: 'scrollspy',
        },
        category: 'BEM',
      }
    },
    scrollspy_blockname: {
      control: {
        type: 'text'
      },
      defaultValue: 'scrollspy',
      description: 'Block name for BEM',
      table: {
        defaultValue: {
          summary: 'scrollspy',
        },
        category: 'BEM',
      }
    },
    scrollspy_modifiers: {
      control: {
        type: 'object'
      },
      defaultValue: [],
      description: 'Block modifiers for BEM',
      table: {
        defaultValue: {
          summary: 'array[]',
        },
        category: 'BEM',
      }
    },
    content: {
      control: {
        type: 'object'
      },
      name: 'Content',
      defaultValue: 'Block content',
      description: 'Block content',
      table: {
        defaultValue: {
          summary: 'menu: \'\',\n' +
            '    container: \'\',\n'
        },
        category: 'Content',
      }
    },
    scrollspy_extra: {
      control: {
        type: 'object'
      },
      defaultValue: [
        'classnameOne',
        'classnameTwo',
      ],
      description: 'Block extra classes for BEM',
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
  <div className="m-2">
   <span dangerouslySetInnerHTML={{
     __html: templateTwig({
       ...args,
     }),
   }}/>
  </div>
);
export const Scrollspy = TwigTemplate.bind({});

Scrollspy.args = {
  content: data.content,
};
