import React from 'react';

import templateTwig from './menu.twig';
import templateData from './menu.yml';
import documentation from './README.md';

export default {
  title: 'DS/Menu',
  component: 'Menu',
  parameters: {
    docs: {
      description: {
        component: documentation
      }
    },
  },
  argTypes: {
    menu_class: {
      control: {
        type: 'text'
      },
      defaultValue: 'menu',
      description: 'Menu base class for BEM',
      table: {
        defaultValue: {
          summary: 'menu',
        },
        category: 'BEM',
      }
    },
    menu_blockname: {
      control: {
        type: 'text'
      },
      defaultValue: 'menu-block',
      description: 'Menu name for BEM',
      table: {
        defaultValue: {
          summary: 'menu-block',
        },
        category: 'BEM',
      }
    },
    menu_modifiers: {
      control: {
        type: 'object'
      },
      defaultValue: [],
      description: 'Menu modifiers for BEM',
      table: {
        defaultValue: {
          summary: 'array[]',
        },
        category: 'BEM',
      }
    },
    menu_extra: {
      control: {
        type: 'object'
      },
      defaultValue: [
        'classnameOne',
        'classnameTwo',
      ],
      description: 'Menu extra classes for BEM',
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
    title_prefix: {
      control: {
        type: 'text'
      },
      defaultValue: '',
      description: 'Menu Title Prefix',
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
      description: 'Menu Title Suffix',
      table: {
        defaultValue: {
          summary: '',
        },
        category: 'Content',
      }
    },
    menu_title_tag: {
      control: {
        type: 'text'
      },
      defaultValue: 'h2',
      description: 'Menu Title Tag',
      table: {
        defaultValue: {
          summary: 'h2',
        },
        category: 'Structure',
      }
    },
    menu_title_base_class: {
      control: {
        type: 'text'
      },
      defaultValue: 'title',
      description: 'Menu Title base class for BEM',
      table: {
        defaultValue: {
          summary: 'title',
        },
        category: 'BEM',
      }
    },
    configuration: {
      control: {
        type: 'object'
      },
      defaultValue: {
        configuration: {
          label_display: false
        }
      },
      description: 'Menu block configuration',
      table: {
        defaultValue: {
          summary: 'configuration: {\n' +
            '          label_display: false\n' +
            '        }',
        },
        category: 'Structure',
      }
    },
    content: {
      control: {
        type: 'object'
      },
      defaultValue: {},
      description: 'Paragraph content',
      table: {
        defaultValue: {
          summary: '',
        },
        category: 'Content',
      }
    }
  }
};

const TwigTemplate = (args) => (
  <div dangerouslySetInnerHTML={{
    __html: templateTwig({
      ...args,
    }),
  }}/>
);

export const Menu = TwigTemplate.bind({});

Menu.args = {
  menu_class: 'menu',
  menu_blockname: 'menu-block',
  menu_modifiers: [],
  menu_extra: [
    'classnameOne',
    'classnameTwo',
  ],
  title_prefix: '',
  title_suffix: '',
  menu_title_tag: 'h2',
  menu_title_base_class: 'title',
  configuration: templateData.configuration,
  content: templateData.content,
};
