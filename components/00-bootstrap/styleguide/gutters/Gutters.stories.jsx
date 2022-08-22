import React from 'react';

import './_style.scss';

import docs from './docs.mdx';

export default {
  title: 'Bootstrap/styleguide',
  component: 'Gutters',
  parameters: {
    docs: {
      page: docs,
    },
  },
};

const TwigTemplate = (args) => (
  <div className="m-2">
    <div className="bd-example">
      <div className="container px-4">
        <div className="row gx-5">
          <div className="col">
            <div className="p-3 border bg-light">Custom column padding</div>
          </div>
          <div className="col">
            <div className="p-3 border bg-light">Custom column padding</div>
          </div>
        </div>
      </div>
    </div>
    <div className="bd-example">
      <div className="container overflow-hidden">
        <div className="row gx-5">
          <div className="col">
            <div className="p-3 border bg-light">Custom column padding</div>
          </div>
          <div className="col">
            <div className="p-3 border bg-light">Custom column padding</div>
          </div>
        </div>
      </div>
    </div>
    <div className="bd-example">
      <div className="container overflow-hidden">
        <div className="row gy-5">
          <div className="col-30">
            <div className="p-3 border bg-light">Custom column padding</div>
          </div>
          <div className="col-30">
            <div className="p-3 border bg-light">Custom column padding</div>
          </div>
          <div className="col-30">
            <div className="p-3 border bg-light">Custom column padding</div>
          </div>
          <div className="col-30">
            <div className="p-3 border bg-light">Custom column padding</div>
          </div>
        </div>
      </div>
    </div>
    <div className="bd-example">
      <div className="container">
        <div className="row g-2">
          <div className="col-30">
            <div className="p-3 border bg-light">Custom column padding</div>
          </div>
          <div className="col-30">
            <div className="p-3 border bg-light">Custom column padding</div>
          </div>
          <div className="col-30">
            <div className="p-3 border bg-light">Custom column padding</div>
          </div>
          <div className="col-30">
            <div className="p-3 border bg-light">Custom column padding</div>
          </div>
        </div>
      </div>
    </div>
    <div className="bd-example">
      <div className="container">
        <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
          <div className="col">
            <div className="p-3 border bg-light">Row column</div>
          </div>
          <div className="col">
            <div className="p-3 border bg-light">Row column</div>
          </div>
          <div className="col">
            <div className="p-3 border bg-light">Row column</div>
          </div>
          <div className="col">
            <div className="p-3 border bg-light">Row column</div>
          </div>
          <div className="col">
            <div className="p-3 border bg-light">Row column</div>
          </div>
          <div className="col">
            <div className="p-3 border bg-light">Row column</div>
          </div>
          <div className="col">
            <div className="p-3 border bg-light">Row column</div>
          </div>
          <div className="col">
            <div className="p-3 border bg-light">Row column</div>
          </div>
          <div className="col">
            <div className="p-3 border bg-light">Row column</div>
          </div>
          <div className="col">
            <div className="p-3 border bg-light">Row column</div>
          </div>
        </div>
      </div>
    </div>
    <div className="bd-example bd-example-row">
      <div className="row g-0">
        <div className="col-sm-30 col-md-40">.col-sm-30 .col-md-40</div>
        <div className="col-30 col-md-20">.col-30 .col-md-20</div>
      </div>
    </div>
  </div>
);
export const Gutters = TwigTemplate.bind({});
