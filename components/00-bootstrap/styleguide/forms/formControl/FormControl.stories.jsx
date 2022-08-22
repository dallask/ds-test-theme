import React from 'react';

import './_style.scss';

import docs from './docs.mdx';

export default {
  title: 'Bootstrap/styleguide/Forms',
  component: 'formControl',
  parameters: {
    docs: {
      page: docs,
    },
  },
};

const TwigTemplate = (args) => (
  <div className="m-2 form-control-wrapper">
    <div className="bd-example">
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Email
          address</label>
        <input type="email" className="form-control"
               id="exampleFormControlInput1" placeholder="name@example.com"/>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example
          textarea</label>
        <textarea className="form-control" id="exampleFormControlTextarea1"
                  rows="3"></textarea>
      </div>
    </div>
    <div className="bd-example">
      <input className="form-control form-control-lg" type="text"
             placeholder=".form-control-lg"
             aria-label=".form-control-lg example"/>
      <input className="form-control" type="text" placeholder="Default input"
             aria-label="default input example"/>
      <input className="form-control form-control-sm" type="text"
             placeholder=".form-control-sm"
             aria-label=".form-control-sm example"/>
    </div>
    <div className="bd-example">
      <input className="form-control" type="text" placeholder="Disabled input"
             aria-label="Disabled input example" disabled=""/>
      <input className="form-control" type="text"
             value="Disabled readonly input"
             aria-label="Disabled input example" disabled="" readOnly=""/>
    </div>
    <div className="bd-example">
      <input className="form-control" type="text" value="Readonly input here..."
             aria-label="readonly input example" readOnly=""/>
    </div>
    <div className="bd-example">
      <div className="mb-3 row">
        <label htmlFor="staticEmail"
               className="col-sm-10 col-form-label">Email</label>
        <div className="col-sm-50">
          <input type="text" readOnly="" className="form-control-plaintext"
                 id="staticEmail" value="email@example.com"/>
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="inputPassword"
               className="col-sm-10 col-form-label">Password</label>
        <div className="col-sm-50">
          <input type="password" className="form-control" id="inputPassword"
                 autoComplete="off" />
        </div>
      </div>
    </div>
    <div className="bd-example">
      <form className="row g-3">
        <div className="col-auto">
          <label htmlFor="staticEmail2"
                 className="visually-hidden">Email</label>
          <input type="text" readOnly="" className="form-control-plaintext"
                 id="staticEmail2" value="email@example.com" />
        </div>
        <div className="col-auto">
          <label htmlFor="inputPassword2"
                 className="visually-hidden">Password</label>
          <input type="password" className="form-control" id="inputPassword2"
                 placeholder="Password" autoComplete="off" />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3">Confirm
            identity
          </button>
        </div>
      </form>
    </div>
    <div className="bd-example">
      <div className="mb-3">
        <label htmlFor="formFile" className="form-label">Default file input
          example</label>
        <input className="form-control" type="file" id="formFile"/>
      </div>
      <div className="mb-3">
        <label htmlFor="formFileMultiple" className="form-label">Multiple files
          input example</label>
        <input className="form-control" type="file" id="formFileMultiple"
               multiple=""/>
      </div>
      <div className="mb-3">
        <label htmlFor="formFileDisabled" className="form-label">Disabled file
          input example</label>
        <input className="form-control" type="file" id="formFileDisabled"
               disabled=""/>
      </div>
      <div className="mb-3">
        <label htmlFor="formFileSm" className="form-label">Small file input
          example</label>
        <input className="form-control form-control-sm" id="formFileSm"
               type="file"/>
      </div>
      <div>
        <label htmlFor="formFileLg" className="form-label">Large file input
          example</label>
        <input className="form-control form-control-lg" id="formFileLg"
               type="file"/>
      </div>
    </div>
    <div className="bd-example">
      <label htmlFor="exampleColorInput" className="form-label">Color
        picker</label>
      <input type="color" className="form-control form-control-color"
             id="exampleColorInput" value="#563d7c" title="Choose your color"/>
    </div>
    <div className="bd-example">
      <label htmlFor="exampleDataList" className="form-label">Datalist
        example</label>
      <input className="form-control" list="datalistOptions"
             id="exampleDataList" placeholder="Type to search..."/>
        <datalist id="datalistOptions">
          <option value="San Francisco">
          </option>
          <option value="New York">
          </option>
          <option value="Seattle">
          </option>
          <option value="Los Angeles">
          </option>
          <option value="Chicago">
          </option>
        </datalist>
    </div>
  </div>
);
export const FormControl = TwigTemplate.bind({});
