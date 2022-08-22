import React from 'react';

import './_style.scss';

import docs from './docs.mdx';

export default {
  title: 'Bootstrap/styleguide/Forms',
  component: 'Layout',
  parameters: {
    docs: {
      page: docs,
    },
  },
};

const TwigTemplate = (args) => (
  <div className="m-2 layout-wrapper">
    <div className="bd-example">
      <div className="mb-3">
        <label htmlFor="formGroupExampleInput" className="form-label">Example
          label</label>
        <input type="text" className="form-control" id="formGroupExampleInput"
               placeholder="Example input placeholder"/>
      </div>
      <div className="mb-3">
        <label htmlFor="formGroupExampleInput2" className="form-label">Another
          label</label>
        <input type="text" className="form-control" id="formGroupExampleInput2"
               placeholder="Another input placeholder"/>
      </div>
    </div>
    <div className="bd-example">
      <div className="row">
        <div className="col">
          <input type="text" className="form-control" placeholder="First name"
                 aria-label="First name"/>
        </div>
        <div className="col">
          <input type="text" className="form-control" placeholder="Last name"
                 aria-label="Last name"/>
        </div>
      </div>
    </div>
    <div className="bd-example">
      <div className="row g-3">
        <div className="col">
          <input type="text" className="form-control" placeholder="First name"
                 aria-label="First name"/>
        </div>
        <div className="col">
          <input type="text" className="form-control" placeholder="Last name"
                 aria-label="Last name"/>
        </div>
      </div>
    </div>
    <div className="bd-example">
      <form className="row g-3">
        <div className="col-md-30">
          <label htmlFor="inputEmail4" className="form-label">Email</label>
          <input type="email" className="form-control" id="inputEmail4"
                 autoComplete="off"/>
        </div>
        <div className="col-md-30">
          <label htmlFor="inputPassword4"
                 className="form-label">Password</label>
          <input type="password" className="form-control" id="inputPassword4"
                 autoComplete="off"/>
        </div>
        <div className="col-60">
          <label htmlFor="inputAddress" className="form-label">Address</label>
          <input type="text" className="form-control" id="inputAddress"
                 placeholder="1234 Main St"/>
        </div>
        <div className="col-60">
          <label htmlFor="inputAddress2" className="form-label">Address
            2</label>
          <input type="text" className="form-control" id="inputAddress2"
                 placeholder="Apartment, studio, or floor"/>
        </div>
        <div className="col-md-30">
          <label htmlFor="inputCity" className="form-label">City</label>
          <input type="text" className="form-control" id="inputCity"/>
        </div>
        <div className="col-md-20">
          <label htmlFor="inputState" className="form-label">State</label>
          <select id="inputState" className="form-select">
            <option selected="">Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div className="col-md-10">
          <label htmlFor="inputZip" className="form-label">Zip</label>
          <input type="text" className="form-control" id="inputZip"/>
        </div>
        <div className="col-60">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="gridCheck"/>
            <label className="form-check-label" htmlFor="gridCheck">
              Check me out
            </label>
          </div>
        </div>
        <div className="col-60">
          <button type="submit" className="btn btn-primary">Sign in</button>
        </div>
      </form>
    </div>
    <div className="bd-example">
      <form>
        <div className="row mb-3">
          <label htmlFor="inputEmail3"
                 className="col-sm-10 col-form-label">Email</label>
          <div className="col-sm-50">
            <input type="email" className="form-control" id="inputEmail3"
                   autoComplete="off"/>
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPassword3"
                 className="col-sm-10 col-form-label">Password</label>
          <div className="col-sm-50">
            <input type="password" className="form-control" id="inputPassword3"
                   autoComplete="off"/>
          </div>
        </div>
        <fieldset className="row mb-3">
          <legend className="col-form-label col-sm-10 pt-0">Radios</legend>
          <div className="col-sm-50">
            <div className="form-check">
              <input className="form-check-input" type="radio" name="gridRadios"
                     id="gridRadios1" value="option1" checked=""/>
              <label className="form-check-label" htmlFor="gridRadios1">
                First radio
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="gridRadios"
                     id="gridRadios2" value="option2"/>
              <label className="form-check-label" htmlFor="gridRadios2">
                Second radio
              </label>
            </div>
            <div className="form-check disabled">
              <input className="form-check-input" type="radio" name="gridRadios"
                     id="gridRadios3" value="option3" disabled=""/>
              <label className="form-check-label" htmlFor="gridRadios3">
                Third disabled radio
              </label>
            </div>
          </div>
        </fieldset>
        <div className="row mb-3">
          <div className="col-sm-50 offset-sm-10">
            <div className="form-check">
              <input className="form-check-input" type="checkbox"
                     id="gridCheck1"/>
              <label className="form-check-label" htmlFor="gridCheck1">
                Example checkbox
              </label>
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Sign in</button>
      </form>
    </div>
    <div className="bd-example">
      <div className="row mb-3">
        <label htmlFor="colFormLabelSm"
               className="col-sm-10 col-form-label col-form-label-sm">Email</label>
        <div className="col-sm-50">
          <input type="email" className="form-control form-control-sm"
                 id="colFormLabelSm" placeholder="col-form-label-sm"/>
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="colFormLabel"
               className="col-sm-10 col-form-label">Email</label>
        <div className="col-sm-50">
          <input type="email" className="form-control" id="colFormLabel"
                 placeholder="col-form-label"/>
        </div>
      </div>
      <div className="row">
        <label htmlFor="colFormLabelLg"
               className="col-sm-10 col-form-label col-form-label-lg">Email</label>
        <div className="col-sm-50">
          <input type="email" className="form-control form-control-lg"
                 id="colFormLabelLg" placeholder="col-form-label-lg"/>
        </div>
      </div>
    </div>
    <div className="bd-example">
      <div className="row g-3">
        <div className="col-sm-35">
          <input type="text" className="form-control" placeholder="City"
                 aria-label="City"/>
        </div>
        <div className="col-sm">
          <input type="text" className="form-control" placeholder="State"
                 aria-label="State"/>
        </div>
        <div className="col-sm">
          <input type="text" className="form-control" placeholder="Zip"
                 aria-label="Zip"/>
        </div>
      </div>
    </div>
    <div className="bd-example">
      <form className="row gx-3 gy-2 align-items-center">
        <div className="col-sm-15">
          <label className="visually-hidden"
                 htmlFor="specificSizeInputName">Name</label>
          <input type="text" className="form-control" id="specificSizeInputName"
                 placeholder="Jane Doe" autoComplete="off"/>
        </div>
        <div className="col-sm-15">
          <label className="visually-hidden"
                 htmlFor="specificSizeInputGroupUsername">Username</label>
          <div className="input-group">
            <div className="input-group-text">@</div>
            <input type="text" className="form-control"
                   id="specificSizeInputGroupUsername" placeholder="Username"
                   autoComplete="off"/>
          </div>
        </div>
        <div className="col-sm-15">
          <label className="visually-hidden"
                 htmlFor="specificSizeSelect">Preference</label>
          <select className="form-select" id="specificSizeSelect">
            <option selected="">Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div className="col-auto">
          <div className="form-check">
            <input className="form-check-input" type="checkbox"
                   id="autoSizingCheck2"/>
              <label className="form-check-label" htmlFor="autoSizingCheck2">
                Remember me
              </label>
          </div>
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
    <div className="bd-example">
      <form className="row row-cols-lg-auto g-3 align-items-center">
        <div className="col-60">
          <label className="visually-hidden"
                 htmlFor="inlineFormInputGroupUsername">Username</label>
          <div className="input-group">
            <div className="input-group-text">@</div>
            <input type="text" className="form-control"
                   id="inlineFormInputGroupUsername" placeholder="Username"
                   autoComplete="off" />
          </div>
        </div>

        <div className="col-60">
          <label className="visually-hidden"
                 htmlFor="inlineFormSelectPref">Preference</label>
          <select className="form-select" id="inlineFormSelectPref">
            <option selected="">Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>

        <div className="col-60">
          <div className="form-check">
            <input className="form-check-input" type="checkbox"
                   id="inlineFormCheck"/>
              <label className="form-check-label" htmlFor="inlineFormCheck">
                Remember me
              </label>
          </div>
        </div>

        <div className="col-60">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  </div>
);
export const Layout = TwigTemplate.bind({});
