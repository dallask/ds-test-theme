import React from 'react';
import prcCodeData from './prc-date.yml';
import prcCodeAtom from './prc-date.twig';

import Block from '@components/block/abstract/Block.stories';

export default {
  title: 'DS/Block/PRC',
  component: 'Date',
  argTypes: Block.argTypes
};

export const Date = (args) => (
  <div dangerouslySetInnerHTML={{ __html: prcCodeAtom({
      ...args,
    }) }}/>
);


Date.args = {
  content: prcCodeData.prcdate_content,
  label: '',
};
