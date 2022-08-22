import React from 'react';

import alertTwig from './alert.twig';
import alertData from './alert.yml';

import docs from './alert.mdx';

export default {
  title: 'Bootstrap/components',
  component: 'Alert',
  parameters: {
    docs: {
      page: docs,
    },
  },
};

const TwigTemplate = (args) => (
  Object.values(alertData.variant).map(variant => (
    <div key={variant} className={'m-2'}
         dangerouslySetInnerHTML={{ __html: alertTwig({ ...args, variant }) }}/>
  ))
);
export const Alert = TwigTemplate.bind({});

Alert.args = {
  alert_content: alertData.content,
  alert_dismissible: alertData.dismissible,
  alert_classes: alertData.classes,
  alert_attributes: alertData.attributes,
};
