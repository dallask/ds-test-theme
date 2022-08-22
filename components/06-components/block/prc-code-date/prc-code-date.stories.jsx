import React from 'react';
import prcCodeData from './prc-code-date.yml';
import prcCodeAtom from './prc-code-date.twig';

import Block from '@components/block/abstract/Block.stories';

delete Block.argTypes.content;

export default {
  title: 'DS/Block/PRC',
  component: 'Code and Date',
  argTypes: Block.argTypes
};

export const CodeDate = (args) => (
  <div dangerouslySetInnerHTML={{ __html: prcCodeAtom({
      ...args,
    }) }}/>
);


CodeDate.args = {
  content: prcCodeData.content,
  label: '',
};
