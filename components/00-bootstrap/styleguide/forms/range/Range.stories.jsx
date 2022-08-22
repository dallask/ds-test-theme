import React from 'react';

import './_style.scss';

import docs from './docs.mdx';

export default {
  title: 'Bootstrap/styleguide/Forms',
  component: 'Range',
  parameters: {
    docs: {
      page: docs,
    },
  },
};

const TwigTemplate = (args) => (
  <div className="m-2 range-wrapper">
    <div className="bd-example">
      <label htmlFor="customRange1" className="form-label">Example range</label>
      <input type="range" className="form-range" id="customRange1"/>
    </div>
    <div className="bd-example">
      <label htmlFor="disabledRange" className="form-label">Disabled
        range</label>
      <input type="range" className="form-range" id="disabledRange" disabled="disabled"/>
    </div>
    <div className="bd-example">
      <label htmlFor="customRange2" className="form-label">Example range</label>
      <input type="range" className="form-range" min="0" max="5"
             id="customRange2"/>
    </div>
    <div className="bd-example">
      <label htmlFor="customRange3" className="form-label">Example range</label>
      <input type="range" className="form-range" min="0" max="5" step="0.5"
             id="customRange3"/>
    </div>
  </div>
);
export const Range = TwigTemplate.bind({});
