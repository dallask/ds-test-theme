import React from 'react';

import checkbox from './checkbox/checkbox.twig';
import radio from './radio/radio.twig';
import select from './select/select.twig';
import textfields from './textfields/textfields.twig';
import inputTwig from './input-extended.twig';
import submitTwig from './submit-btn-extended.twig';

import checkboxData from './checkbox/checkbox.yml';
import radioData from './radio/radio.yml';
import selectOptionsData from './select/select.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Form/Input Types' };

export const checkboxes = () => (
  <div dangerouslySetInnerHTML={{ __html: checkbox(checkboxData) }}/>
);
export const radioButtons = () => (
  <div dangerouslySetInnerHTML={{ __html: radio(radioData) }}/>
);
export const selectDropdowns = () => (
  <div dangerouslySetInnerHTML={{ __html: select(selectOptionsData) }}/>
);
export const textfieldsExamples = () => (
  <div dangerouslySetInnerHTML={{ __html: textfields({}) }}/>
);

export const inputExamples = () => (
  <div dangerouslySetInnerHTML={{ __html: inputTwig({
      "attr": {
        "placeholder": "text",
        "name": "text"
      }
    }) }}/>
);

export const submitExamples = () => (
  <div dangerouslySetInnerHTML={{ __html: submitTwig({
      "attr": {
        "value": "submit"
      }
    }) }}/>
);
