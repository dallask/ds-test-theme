import React from 'react';

import templateTwig from './form.twig';
import data from './form.yml';
import documentation from './README.md';

export default {
  title: 'DS/Form',
  component: 'form',
  parameters: {
    docs: {
      description: {
        component: documentation
      }
    },
  },
  argTypes: {
    form_base_class: {
      control: {
        type: 'text'
      },
      defaultValue: 'Form',
      description: 'Form base class for BEM',
      table: {
        defaultValue: {
          summary: 'form',
        },
        category: 'BEM',
      }
    },
    form_blockname: {
      control: {
        type: 'text'
      },
      defaultValue: 'Form',
      description: 'Form name for BEM',
      table: {
        defaultValue: {
          summary: 'Form',
        },
        category: 'BEM',
      }
    },
    form_modifiers: {
      control: {
        type: 'object'
      },
      defaultValue: [],
      description: 'Form modifiers for BEM',
      table: {
        defaultValue: {
          summary: 'array[]',
        },
        category: 'BEM',
      }
    },
    form_container_class: {
      control: {
        type: 'text'
      },
      defaultValue: 'container-full',
      description: 'Form container class',
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
      defaultValue: 'Form content',
      description: 'Form content',
      table: {
        defaultValue: {
          summary: 'Form Content',
        },
        category: 'Content',
      }
    },
    form_extra: {
      control: {
        type: 'object'
      },
      defaultValue: [
        'classnameOne',
        'classnameTwo',
      ],
      description: 'Form extra classes for BEM',
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
      defaultValue: 'form Title',
      description: 'Form Title',
      table: {
        defaultValue: {
          summary: 'Form Title',
        },
        category: 'Content',
      }
    },
    title_prefix: {
      control: {
        type: 'text'
      },
      defaultValue: '',
      description: 'Form Title Prefix',
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
      description: 'Form Title Suffix',
      table: {
        defaultValue: {
          summary: '',
        },
        category: 'Content',
      }
    },
    form_title_tag: {
      control: {
        type: 'text'
      },
      defaultValue: 'h2',
      description: 'Form Title Tag',
      table: {
        defaultValue: {
          summary: 'h2',
        },
        category: 'Structure',
      }
    },
    form_title_base_class: {
      control: {
        type: 'text'
      },
      defaultValue: 'Title',
      description: 'Form Title base class for BEM',
      table: {
        defaultValue: {
          summary: 'Title',
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
export const Form = TwigTemplate.bind({});

Form.args = {
  form_base_class: 'form',
  form_blockname: 'form',
  form_modifiers: [],
  form_container_class: 'container',
  content: data.content,
  form_extra: [
    'classnameOne',
    'classnameTwo',
  ],
  label: 'Form Title',
  title_prefix: '',
  title_suffix: '',
  form_title_tag: 'h2',
  form_title_base_class: 'title',
};
