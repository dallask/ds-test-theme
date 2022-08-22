import React from 'react';

import templateTwig from './wrapper.twig';
import documentation from './README.md';

export default {
  title: 'DS/Layout',
  component: 'Wrapper',
  parameters: {
    docs: {
      description: {
        component: documentation
      }
    },
  },
  argTypes: {
    wrapper_base_class: {
      control: {
        type: 'text'
      },
      defaultValue: 'wrapper',
      description: 'Wrapper base class for BEM',
      table: {
        defaultValue: {
          summary: 'wrapper',
        },
        category: 'BEM',
      }
    },
    wrapper_blockname: {
      control: {
        type: 'text'
      },
      defaultValue: 'wrapper-block',
      description: 'Wrapper block name for BEM',
      table: {
        defaultValue: {
          summary: 'wrapper-block',
        },
        category: 'BEM',
      }
    },
    wrapper_modifiers: {
      control: {
        type: 'object'
      },
      defaultValue: [],
      description: 'Wrapper modifiers for BEM',
      table: {
        defaultValue: {
          summary: 'array[]',
        },
        category: 'BEM',
      }
    },
    wrapper_tag: {
      control: {
        type: 'text'
      },
      defaultValue: 'div',
      description: 'Wrapper tag',
      table: {
        defaultValue: {
          summary: 'div',
        },
        category: 'Structure',
      }
    },
    wrapper_container_class: {
      control: {
        type: 'text'
      },
      defaultValue: 'container-fluid',
      description: 'Wrapper container class',
      table: {
        defaultValue: {
          summary: 'container-fluid',
          detail: 'You can use bootstrap classes like: "container", "container-fluid". Or any other classes.',
        },
        category: 'Structure',
      }
    },
    wrapper_variant: {
      control: {
        type: 'text'
      },
      defaultValue: 'light',
      description: 'Wrapper variant',
      table: {
        defaultValue: {
          summary: 'light',
        },
        category: 'Style',
      }
    },
    wrapper_text_color: {
      control: {
        type: 'text'
      },
      defaultValue: 'black',
      description: 'Wrapper text color',
      table: {
        defaultValue: {
          summary: 'black',
        },
        category: 'Style',
      }
    },
    wrapper_content: {
      control: {
        type: 'text'
      },
      defaultValue: 'Wrapper Content',
      description: 'Wrapper content',
      table: {
        defaultValue: {
          summary: 'Wrapper Content',
        },
        category: 'Content',
      }
    },
    wrapper_extra: {
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
    wrapper_attributes: {
      control: {
        type: 'object'
      },
      defaultValue: {
        id: 'wrapper_id'
      },
      description: 'Wrapper attributes',
      table: {
        defaultValue: {
          summary: '{\n' +
            '        id: \'wrapper_id\'\n' +
            '      }',
        },
        category: 'Structure',
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
export const Wrapper = TwigTemplate.bind({});

Wrapper.args = {
  wrapper_base_class: 'wrapper',
  wrapper_blockname: 'wrapper-block',
  wrapper_modifiers: [''],
  wrapper_tag: 'div',
  wrapper_container_class: 'container-fluid',
  wrapper_variant: 'light',
  wrapper_text_color: 'black',
  wrapper_content: 'Wrapper Content',
  wrapper_extra: [
    'classnameOne',
    'classnameTwo',
  ],
  wrapper_attributes: {'id': 'wrapper_id'},
};
