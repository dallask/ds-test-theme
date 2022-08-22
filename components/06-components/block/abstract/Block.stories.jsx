import React from 'react';

import templateTwig from './block.twig';
import documentation from './README.md';

export default {
  title: 'DS/Block',
  component: 'Block',
  parameters: {
    docs: {
      description: {
        component: documentation
      }
    },
  },
  argTypes: {
    block_base_class: {
      control: {
        type: 'text'
      },
      defaultValue: 'block',
      description: 'Block base class for BEM',
      table: {
        defaultValue: {
          summary: 'block',
        },
        category: 'BEM',
      }
    },
    block_blockname: {
      control: {
        type: 'text'
      },
      defaultValue: 'block',
      description: 'Block name for BEM',
      table: {
        defaultValue: {
          summary: 'block',
        },
        category: 'BEM',
      }
    },
    block_modifiers: {
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
    block_container_class: {
      control: {
        type: 'text'
      },
      defaultValue: 'container-full',
      description: 'Block container class',
      table: {
        defaultValue: {
          summary: 'container-full',
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
      defaultValue: 'Block content',
      description: 'Block content',
      table: {
        defaultValue: {
          summary: 'Block Content',
        },
        category: 'Content',
      }
    },
    block_extra: {
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
    label: {
      control: {
        type: 'text'
      },
      defaultValue: 'Block Title',
      description: 'Block Title',
      table: {
        defaultValue: {
          summary: 'Block Title',
        },
        category: 'Content',
      }
    },
    title_prefix: {
      control: {
        type: 'text'
      },
      defaultValue: '',
      description: 'Block Title Prefix',
      table: {
        defaultValue: {
          summary: '',
        },
        category: 'Content',
      }
    },
    title_suffix: {
      control: {
        type: 'text'
      },
      defaultValue: '',
      description: 'Block Title Suffix',
      table: {
        defaultValue: {
          summary: '',
        },
        category: 'Content',
      }
    },
    block_title_tag: {
      control: {
        type: 'text'
      },
      defaultValue: 'h2',
      description: 'Block Title Tag',
      table: {
        defaultValue: {
          summary: 'h2',
        },
        category: 'Structure',
      }
    },
    block_title_base_class: {
      control: {
        type: 'text'
      },
      defaultValue: 'title',
      description: 'Block Title base class for BEM',
      table: {
        defaultValue: {
          summary: 'title',
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
export const Block = TwigTemplate.bind({});

Block.args = {
  block_base_class: 'block',
  block_blockname: 'block',
  block_modifiers: [],
  block_container_class: 'container-fluid',
  content: 'Block Content',
  block_extra: [
    'classnameOne',
    'classnameTwo',
  ],
  label: 'Block Title',
  title_prefix: '',
  title_suffix: '',
  block_title_tag: 'h2',
  block_title_base_class: 'title',
};
