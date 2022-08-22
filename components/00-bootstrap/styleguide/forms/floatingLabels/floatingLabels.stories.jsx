import React from 'react';

import './_style.scss';

import docs from './docs.mdx';

export default {
  title: 'Bootstrap/styleguide/Forms',
  component: 'floatingLabels',
  parameters: {
    docs: {
      page: docs,
    },
  },
};

const TwigTemplate = (args) => (
  <div className="m-2 floating-labels-wrapper">
    <div className="bd-example">
      <div className="form-floating mb-3">
        <input type="email" className="form-control" id="floatingInput"
               placeholder="name@example.com"/>
          <label htmlFor="floatingInput">Email address</label>
      </div>
      <div className="form-floating">
        <input type="password" className="form-control" id="floatingPassword"
               placeholder="Password" autoComplete="off" />
          <label htmlFor="floatingPassword">Password</label>
      </div>
    </div>
    <div className="bd-example">
      <form className="form-floating">
        <input type="email" className="form-control" id="floatingInputValue"
               placeholder="name@example.com" value="test@example.com"
               autoComplete="off" />
          <label htmlFor="floatingInputValue">Input with value</label>
      </form>
    </div>
    <div className="bd-example">
      <form className="form-floating">
        <input type="email" className="form-control is-invalid"
               id="floatingInputInvalid" placeholder="name@example.com"
               value="test@example.com"/>
          <label htmlFor="floatingInputInvalid">Invalid input</label>
      </form>
    </div>
    <div className="bd-example">
      <div className="form-floating">
        <textarea className="form-control" placeholder="Leave a comment here"
                  id="floatingTextarea"></textarea>
        <label htmlFor="floatingTextarea">Comments</label>
      </div>
    </div>
    <div className="bd-example">
      <div className="form-floating">
        <textarea className="form-control" placeholder="Leave a comment here"
                  id="floatingTextarea2"></textarea>
        <label htmlFor="floatingTextarea2">Comments</label>
      </div>
    </div>
    <div className="bd-example">
      <div className="form-floating">
        <select className="form-select" id="floatingSelect"
                aria-label="Floating label select example">
          <option selected="">Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <label htmlFor="floatingSelect">Works with selects</label>
      </div>
    </div>
    <div className="bd-example">
      <div className="row g-2">
        <div className="col-md">
          <div className="form-floating">
            <input type="email" className="form-control" id="floatingInputGrid"
                   placeholder="name@example.com" value="mdo@example.com"/>
              <label htmlFor="floatingInputGrid">Email address</label>
          </div>
        </div>
        <div className="col-md">
          <div className="form-floating">
            <select className="form-select" id="floatingSelectGrid"
                    aria-label="Floating label select example">
              <option selected="">Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <label htmlFor="floatingSelectGrid">Works with selects</label>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export const floatingLabels = TwigTemplate.bind({});
