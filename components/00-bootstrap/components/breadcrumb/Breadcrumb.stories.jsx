import React from 'react';

import breadcrumbTwig from './breadcrumb.twig';
import breadcrumbData from './breadcrumb.yml';

import docs from './breadcrumb.mdx';

export default {
  title: 'Bootstrap/components', component: 'Breadcrumb', argTypes: {
    breadcrumb_size: {
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
      __html: breadcrumbTwig({
        ...args,
      }),
    }}/>
  </div>
);
export const Breadcrumb = TwigTemplate.bind({});

Breadcrumb.args = {
  breadcrumb_content: breadcrumbData.content,
  breadcrumb_classes: breadcrumbData.classes,
  breadcrumb_extra_attributes: breadcrumbData.attributes,
  breadcrumb_divider: breadcrumbData.divider,
};
