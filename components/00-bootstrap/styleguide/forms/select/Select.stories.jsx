import React from 'react';

import './_style.scss';

import docs from './docs.mdx';

export default {
  title: 'Bootstrap/styleguide/Forms',
  component: 'Select',
  parameters: {
    docs: {
      page: docs,
    },
  },
};

const TwigTemplate = (args) => (
  <div className="m-2 select-wrapper">
    <div className="bd-example">
      <select className="form-select" aria-label="Default select example">
        <option selected="">Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
    <div className="bd-example">
      <select className="form-select form-select-lg mb-3"
              aria-label=".form-select-lg example">
        <option selected="">Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>

      <select className="form-select form-select-sm"
              aria-label=".form-select-sm example">
        <option selected="">Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
    <div className="bd-example">
      <select className="form-select" multiple=""
              aria-label="multiple select example">
        <option selected="">Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
    <div className="bd-example">
      <select className="form-select" size="3"
              aria-label="size 3 select example">
        <option selected="">Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
    <div className="bd-example">
      <select className="form-select" aria-label="Disabled select example"
              disabled="">
        <option selected="">Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
  </div>
);
export const Select = TwigTemplate.bind({});
