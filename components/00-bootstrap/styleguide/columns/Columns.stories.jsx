import React from 'react';

import './_style.scss';

import docs from './docs.mdx';

export default {
  title: 'Bootstrap/styleguide',
  component: 'Columns',
  parameters: {
    docs: {
      page: docs,
    },
  },
};

const TwigTemplate = (args) => (
  <div className="m-2">
    <div className="bd-example bd-example-row bd-example-row-flex-cols">
      <div className="container">
        <div className="row align-items-start">
          <div className="col">
            One of three columns
          </div>
          <div className="col">
            One of three columns
          </div>
          <div className="col">
            One of three columns
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col">
            One of three columns
          </div>
          <div className="col">
            One of three columns
          </div>
          <div className="col">
            One of three columns
          </div>
        </div>
        <div className="row align-items-end">
          <div className="col">
            One of three columns
          </div>
          <div className="col">
            One of three columns
          </div>
          <div className="col">
            One of three columns
          </div>
        </div>
      </div>
    </div>
    <div className="bd-example bd-example-row bd-example-row-flex-cols">
      <div className="container">
        <div className="row">
          <div className="col align-self-start">
            One of three columns
          </div>
          <div className="col align-self-center">
            One of three columns
          </div>
          <div className="col align-self-end">
            One of three columns
          </div>
        </div>
      </div>
    </div>
    <div className="bd-example bd-example-row">
      <div className="container">
        <div className="row justify-content-start">
          <div className="col-20">
            One of two columns
          </div>
          <div className="col-20">
            One of two columns
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-20">
            One of two columns
          </div>
          <div className="col-20">
            One of two columns
          </div>
        </div>
        <div className="row justify-content-end">
          <div className="col-20">
            One of two columns
          </div>
          <div className="col-20">
            One of two columns
          </div>
        </div>
        <div className="row justify-content-around">
          <div className="col-20">
            One of two columns
          </div>
          <div className="col-20">
            One of two columns
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col-20">
            One of two columns
          </div>
          <div className="col-20">
            One of two columns
          </div>
        </div>
        <div className="row justify-content-evenly">
          <div className="col-20">
            One of two columns
          </div>
          <div className="col-20">
            One of two columns
          </div>
        </div>
      </div>
    </div>
    <div className="bd-example bd-example-row">
      <div className="container">
        <div className="row">
          <div className="col-45">.col-45</div>
          <div className="col-20">.col-20<br/>Since 45 + 20 = 65 &gt; 60, this
            20-column-wide div gets wrapped onto a new line as one contiguous
            unit.
          </div>
          <div className="col-30">.col-30<br/>Subsequent columns continue along
            the
            new line.
          </div>
        </div>
      </div>
    </div>
    <div className="bd-example bd-example-row">
      <div className="container">
        <div className="row">
          <div className="col-30 col-sm-15">.col-30 .col-sm-15</div>
          <div className="col-30 col-sm-15">.col-30 .col-sm-15</div>

          <div className="w-100"></div>

          <div className="col-30 col-sm-15">.col-30 .col-sm-15</div>
          <div className="col-30 col-sm-15">.col-30 .col-sm-15</div>
        </div>
      </div>
    </div>
    <div className="bd-example bd-example-row">
      <div className="container">
        <div className="row">
          <div className="col-30 col-sm-20">.col-30 .col-sm-20</div>
          <div className="col-30 col-sm-20">.col-30 .col-sm-20</div>

          <div className="w-100 d-none d-md-block"></div>

          <div className="col-30 col-sm-20">.col-30 .col-sm-20</div>
          <div className="col-30 col-sm-20">.col-30 .col-sm-20</div>
        </div>
      </div>
    </div>
    <div className="bd-example bd-example-row">
      <div className="container">
        <div className="row">
          <div className="col">
            First in DOM, no order applied
          </div>
          <div className="col order-5">
            Second in DOM, with a larger order
          </div>
          <div className="col order-1">
            Third in DOM, with an order of 1
          </div>
        </div>
      </div>
    </div>
    <div className="bd-example bd-example-row">
      <div className="container">
        <div className="row">
          <div className="col order-last">
            First in DOM, ordered last
          </div>
          <div className="col">
            Second in DOM, unordered
          </div>
          <div className="col order-first">
            Third in DOM, ordered first
          </div>
        </div>
      </div>
    </div>
    <div className="bd-example bd-example-row">
      <div className="container">
        <div className="row">
          <div className="col-md-20">.col-md-20</div>
          <div className="col-md-20 offset-md-20">.col-md-20 .offset-md-20</div>
        </div>
        <div className="row">
          <div className="col-md-15 offset-md-15">.col-md-15 .offset-md-15</div>
          <div className="col-md-15 offset-md-15">.col-md-15 .offset-md-15</div>
        </div>
        <div className="row">
          <div className="col-md-30 offset-md-15">.col-md-30 .offset-md-15</div>
        </div>
      </div>
    </div>
    <div className="bd-example bd-example-row">
      <div className="container">
        <div className="row">
          <div className="col-sm-25 col-md-30">.col-sm-25 .col-md-30</div>
          <div className="col-sm-25 offset-sm-10 col-md-30 offset-md-0">.col-sm-25
            .offset-sm-10 .col-md-30 .offset-md-0
          </div>
        </div>
        <div className="row">
          <div className="col-sm-30 col-md-10 col-lg-30">.col-sm-30 .col-md-10
            .col-lg-30
          </div>
          <div
            className="col-sm-30 col-md-10 offset-md-10 col-lg-30 offset-lg-0">.col-sm-30
            .col-md-10 .offset-md-10 .col-lg-30 .offset-lg-0
          </div>
        </div>
      </div>
    </div>
    <div className="bd-example bd-example-row">
      <div className="container">
        <div className="row">
          <div className="col-md-20">.col-md-20</div>
          <div className="col-md-20 ms-auto">.col-md-20 .ms-auto</div>
        </div>
        <div className="row">
          <div className="col-md-15 ms-md-auto">.col-md-15 .ms-md-auto</div>
          <div className="col-md-15 ms-md-auto">.col-md-15 .ms-md-auto</div>
        </div>
        <div className="row">
          <div className="col-auto me-auto">.col-auto .me-auto</div>
          <div className="col-auto">.col-auto</div>
        </div>
      </div>
    </div>
  </div>
);
export const Columns = TwigTemplate.bind({});
