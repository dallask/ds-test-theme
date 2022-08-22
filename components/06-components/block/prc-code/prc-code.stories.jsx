import React from 'react';
import prcCodeData from './prc-code.yml';
import prcCodeAtom from './prc-code.twig';

import Block from '@components/block/abstract/Block.stories';

export default {
  title: 'DS/Block/PRC',
  component: 'Code',
  argTypes: Block.argTypes
};

export const Code = (args) => (
  <div dangerouslySetInnerHTML={{ __html: prcCodeAtom({
      ...args,
    }) }}/>
);


Code.args = {
  content: prcCodeData.prccode_content,
  label: '',
};
