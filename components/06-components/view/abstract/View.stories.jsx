import React from 'react';

import templateTwig from './view.twig';
import data from './view.yml';
import documentation from './README.md';

export default {
  title: 'DS/View',
  component: 'View',
  parameters: {
    docs: {
      description: {
        component: documentation
      }
    },
  },
  argTypes: {
    view_base_class: {
      control: {
        type: 'text'
      },
      defaultValue: 'view',
      description: 'View base class for BEM',
      table: {
        defaultValue: {
          summary: 'view',
        },
        category: 'BEM',
      }
    },
    view_blockname: {
      control: {
        type: 'text'
      },
      defaultValue: 'view',
      description: 'View name for BEM',
      table: {
        defaultValue: {
          summary: 'view',
        },
        category: 'BEM',
      }
    },
    view_modifiers: {
      control: {
        type: 'object'
      },
      defaultValue: [],
      description: 'View modifiers for BEM',
      table: {
        defaultValue: {
          summary: 'array[]',
        },
        category: 'BEM',
      }
    },
    view_container_class: {
      control: {
        type: 'text'
      },
      defaultValue: 'container-full',
      description: 'View container class',
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
      defaultValue: 'View content',
      description: 'View content',
      table: {
        defaultValue: {
          summary: 'View Content',
        },
        category: 'Content',
      }
    },
    view_extra: {
      control: {
        type: 'object'
      },
      defaultValue: [
        'classnameOne',
        'classnameTwo',
      ],
      description: 'View extra classes for BEM',
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
      defaultValue: 'View Title',
      description: 'View Title',
      table: {
        defaultValue: {
          summary: 'View Title',
        },
        category: 'Content',
      }
    },
    title_prefix: {
      control: {
        type: 'text'
      },
      defaultValue: '',
      description: 'View Title Prefix',
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
      description: 'View Title Suffix',
      table: {
        defaultValue: {
          summary: '',
        },
        category: 'Content',
      }
    },
    view_title_tag: {
      control: {
        type: 'text'
      },
      defaultValue: 'h2',
      description: 'View Title Tag',
      table: {
        defaultValue: {
          summary: 'h2',
        },
        category: 'Structure',
      }
    },
    view_title_base_class: {
      control: {
        type: 'text'
      },
      defaultValue: 'title',
      description: 'View Title base class for BEM',
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
export const View = TwigTemplate.bind({});

View.args = {
  view_base_class: 'view',
  view_blockname: 'view',
  view_modifiers: [],
  view_container_class: 'container',
  content: data.content,
  view_extra: [
    'classnameOne',
    'classnameTwo',
  ],
  label: 'View Title',
  title_prefix: '',
  title_suffix: '',
  view_title_tag: 'h2',
  view_title_base_class: 'title',
};
