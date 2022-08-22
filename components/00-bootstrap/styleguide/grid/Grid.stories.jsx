import React from 'react';

import './_style.scss';

import docs from './docs.mdx';

export default {
  title: 'Bootstrap/styleguide',
  component: 'Grid',
  parameters: {
    docs: {
      page: docs,
    },
  },
};

const TwigTemplate = (args) => (
  <div className="m-2">
    <div className="bd-example bd-example-row">
      <div className="container">
        <div className="row">
          <div className="col">
            Column
          </div>
          <div className="col">
            Column
          </div>
          <div className="col">
            Column
          </div>
        </div>
      </div>
    </div>
    <div className="bd-example bd-example-row">
      <div className="container">
        <div className="row">
          <div className="col">
            1 of 2
          </div>
          <div className="col">
            2 of 2
          </div>
        </div>
        <div className="row">
          <div className="col">
            1 of 3
          </div>
          <div className="col">
            2 of 3
          </div>
          <div className="col">
            3 of 3
          </div>
        </div>
      </div>
    </div>
    <div className="bd-example bd-example-row">
      <div className="container">
        <div className="row">
          <div className="col">
            1 of 3
          </div>
          <div className="col-30">
            2 of 3 (wider)
          </div>
          <div className="col">
            3 of 3
          </div>
        </div>
        <div className="row">
          <div className="col">
            1 of 3
          </div>
          <div className="col-25">
            2 of 3 (wider)
          </div>
          <div className="col">
            3 of 3
          </div>
        </div>
      </div>
    </div>
    <div className="bd-example bd-example-row">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col col-lg-10">
            1 of 3
          </div>
          <div className="col-md-auto">
            Variable width content
          </div>
          <div className="col col-lg-10">
            3 of 3
          </div>
        </div>
        <div className="row">
          <div className="col">
            1 of 3
          </div>
          <div className="col-md-auto">
            Variable width content
          </div>
          <div className="col col-lg-10">
            3 of 3
          </div>
        </div>
      </div>
    </div>
    <div className="bd-example bd-example-row">
      <div className="container">
        <div className="row">
          <div className="col">col</div>
          <div className="col">col</div>
          <div className="col">col</div>
          <div className="col">col</div>
        </div>
        <div className="row">
          <div className="col-40">col-40</div>
          <div className="col-20">col-20</div>
        </div>
      </div>
    </div>
    <div className="bd-example bd-example-row">
      <div className="container">
        <div className="row">
          <div className="col-md-30">.col-md-30</div>
          <div className="col-30 col-md-30">col-30 .col-md-20</div>
        </div>

        <div className="row">
          <div className="col-30 col-md-20">col-30 .col-md-20</div>
          <div className="col-30 col-md-20">col-30 .col-md-20</div>
          <div className="col-30 col-md-20">col-30 .col-md-20</div>
        </div>

        <div className="row">
          <div className="col-30">col-30</div>
          <div className="col-30">col-30</div>
        </div>
      </div>
    </div>
    <div className="bd-example bd-example-row">
      <div className="container">
        <div className="row row-cols-2">
          <div className="col">Column</div>
          <div className="col">Column</div>
          <div className="col">Column</div>
          <div className="col">Column</div>
        </div>
      </div>
    </div>
    <div className="bd-example bd-example-row">
      <div className="container">
        <div className="row row-cols-3">
          <div className="col">Column</div>
          <div className="col">Column</div>
          <div className="col">Column</div>
          <div className="col">Column</div>
        </div>
      </div>
    </div>
    <div className="bd-example bd-example-row">
      <div className="container">
        <div className="row row-cols-auto">
          <div className="col">Column</div>
          <div className="col">Column</div>
          <div className="col">Column</div>
          <div className="col">Column</div>
        </div>
      </div>
    </div>
    <div className="bd-example bd-example-row">
      <div className="container">
        <div className="row row-cols-4">
          <div className="col">Column</div>
          <div className="col">Column</div>
          <div className="col">Column</div>
          <div className="col">Column</div>
        </div>
      </div>
    </div>
    <div className="bd-example bd-example-row">
      <div className="container">
        <div className="row row-cols-4">
          <div className="col">Column</div>
          <div className="col">Column</div>
          <div className="col-6">Column</div>
          <div className="col">Column</div>
        </div>
      </div>
    </div>
    <div className="bd-example bd-example-row">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
          <div className="col">Column</div>
          <div className="col">Column</div>
          <div className="col">Column</div>
          <div className="col">Column</div>
        </div>
      </div>
    </div>
    <div className="bd-example bd-example-row">
      <div className="container">
        <div className="row">
          <div className="col-sm-15">
            Level 1: .col-sm-15
          </div>
          <div className="col-sm-45">
            <div className="row">
              <div className="col-40 col-sm-30">
                Level 2: .col-40 .col-sm-30
              </div>
              <div className="col-20 col-sm-30">
                Level 2: .col-20 .col-sm-30
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export const Grid = TwigTemplate.bind({});
