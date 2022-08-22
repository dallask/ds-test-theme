import React from 'react';

import './_style.scss';

import docs from './docs.mdx';

export default {
  title: 'Bootstrap/styleguide/Forms',
  component: 'ChecksRadios',
  parameters: {
    docs: {
      page: docs,
    },
  },
};

const TwigTemplate = (args) => (
  <div className="m-2 checks-radios-wrapper">
    <div className="bd-example">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value=""
               id="flexCheckDefault"/>
        <label className="form-check-label" htmlFor="flexCheckDefault">
          Default checkbox
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value=""
               id="flexCheckChecked" checked="checked"/>
        <label className="form-check-label" htmlFor="flexCheckChecked">
          Checked checkbox
        </label>
      </div>
    </div>
    <div className="bd-example bd-example-indeterminate">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value=""
               id="flexCheckIndeterminate"/>
        <label className="form-check-label" htmlFor="flexCheckIndeterminate">
          Indeterminate checkbox
        </label>
      </div>
    </div>
    <div className="bd-example">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value=""
               id="flexCheckDisabled" disabled="disabled"/>
        <label className="form-check-label" htmlFor="flexCheckDisabled">
          Disabled checkbox
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value=""
               id="flexCheckCheckedDisabled" checked="checked"
               disabled="disabled"/>
        <label className="form-check-label"
               htmlFor="flexCheckCheckedDisabled">
          Disabled checked checkbox
        </label>
      </div>
    </div>
    <div className="bd-example">
      <div className="form-check">
        <input className="form-check-input" type="radio" name="flexRadioDefault"
               id="flexRadioDefault1"/>
        <label className="form-check-label" htmlFor="flexRadioDefault1">
          Default radio
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="flexRadioDefault"
               id="flexRadioDefault2" checked="checked"/>
        <label className="form-check-label" htmlFor="flexRadioDefault2">
          Default checked radio
        </label>
      </div>
    </div>
    <div className="bd-example">
      <div className="form-check">
        <input className="form-check-input" type="radio"
               name="flexRadioDisabled" id="flexRadioDisabled"
               disabled="disabled"/>
        <label className="form-check-label" htmlFor="flexRadioDisabled">
          Disabled radio
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="radio"
               name="flexRadioDisabled" id="flexRadioCheckedDisabled" checked=""
               disabled="disabled"/>
        <label className="form-check-label"
               htmlFor="flexRadioCheckedDisabled">
          Disabled checked radio
        </label>
      </div>
    </div>
    <div className="bd-example">
      <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" role="switch"
               id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Default
          switch checkbox input</label>
      </div>
      <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" role="switch"
               id="flexSwitchCheckChecked" checked="checked"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Checked
          switch checkbox input</label>
      </div>
      <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" role="switch"
               id="flexSwitchCheckDisabled" disabled="disabled"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDisabled">Disabled
          switch checkbox input</label>
      </div>
      <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" role="switch"
               id="flexSwitchCheckCheckedDisabled" checked="checked"
               disabled="disabled"/>
        <label className="form-check-label"
               htmlFor="flexSwitchCheckCheckedDisabled">Disabled checked
          switch checkbox input</label>
      </div>
    </div>
    <div className="bd-example">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value=""
               id="defaultCheck1"/>
        <label className="form-check-label" htmlFor="defaultCheck1">
          Default checkbox
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value=""
               id="defaultCheck2" disabled="disabled"/>
        <label className="form-check-label" htmlFor="defaultCheck2">
          Disabled checkbox
        </label>
      </div>
    </div>
    <div className="bd-example">
      <div className="form-check">
        <input className="form-check-input" type="radio" name="exampleRadios"
               id="exampleRadios1" value="option1" checked="checked"/>
        <label className="form-check-label" htmlFor="exampleRadios1">
          Default radio
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="exampleRadios"
               id="exampleRadios2" value="option2"/>
        <label className="form-check-label" htmlFor="exampleRadios2">
          Second default radio
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="exampleRadios"
               id="exampleRadios3" value="option3" disabled="disabled"/>
        <label className="form-check-label" htmlFor="exampleRadios3">
          Disabled radio
        </label>
      </div>
    </div>
    <div className="bd-example">
      <div className="form-check form-check-inline">
        <input className="form-check-input" type="checkbox" id="inlineCheckbox1"
               value="option1"/>
        <label className="form-check-label"
               htmlFor="inlineCheckbox1">1</label>
      </div>
      <div className="form-check form-check-inline">
        <input className="form-check-input" type="checkbox" id="inlineCheckbox2"
               value="option2"/>
        <label className="form-check-label"
               htmlFor="inlineCheckbox2">2</label>
      </div>
      <div className="form-check form-check-inline">
        <input className="form-check-input" type="checkbox" id="inlineCheckbox3"
               value="option3" disabled="disabled"/>
        <label className="form-check-label" htmlFor="inlineCheckbox3">3
          (disabled)</label>
      </div>
    </div>
    <div className="bd-example">
      <div className="form-check form-check-inline">
        <input className="form-check-input" type="radio"
               name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
        <label className="form-check-label" htmlFor="inlineRadio1">1</label>
      </div>
      <div className="form-check form-check-inline">
        <input className="form-check-input" type="radio"
               name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
        <label className="form-check-label" htmlFor="inlineRadio2">2</label>
      </div>
      <div className="form-check form-check-inline">
        <input className="form-check-input" type="radio"
               name="inlineRadioOptions" id="inlineRadio3" value="option3"
               disabled="disabled"/>
        <label className="form-check-label" htmlFor="inlineRadio3">3
          (disabled)</label>
      </div>
    </div>
    <div className="bd-example">
      <div>
        <input className="form-check-input" type="checkbox" id="checkboxNoLabel"
               value="" aria-label="..."/>
      </div>

      <div>
        <input className="form-check-input" type="radio" name="radioNoLabel"
               id="radioNoLabel1" value="" aria-label="..."/>
      </div>
    </div>
    <div className="bd-example">
      <input type="checkbox" className="btn-check" id="btn-check"
             autoComplete="off"/>
      <label className="btn btn-primary" htmlFor="btn-check">Single
        toggle</label>
    </div>
    <div className="bd-example">
      <input type="checkbox" className="btn-check" id="btn-check-2"
             checked="checked"
             autoComplete="off"/>
      <label className="btn btn-primary" htmlFor="btn-check-2">Checked</label>
    </div>
    <div className="bd-example">
      <input type="checkbox" className="btn-check" id="btn-check-3"
             autoComplete="off" disabled="disabled"/>
      <label className="btn btn-primary"
             htmlFor="btn-check-3">Disabled</label>
    </div>
    <div className="bd-example">
      <input type="radio" className="btn-check" name="options" id="option1"
             autoComplete="off" checked="checked"/>
      <label className="btn btn-secondary" htmlFor="option1">Checked</label>

      <input type="radio" className="btn-check" name="options" id="option2"
             autoComplete="off"/>
      <label className="btn btn-secondary" htmlFor="option2">Radio</label>

      <input type="radio" className="btn-check" name="options" id="option3"
             autoComplete="off" disabled="disabled"/>
      <label className="btn btn-secondary"
             htmlFor="option3">Disabled</label>

      <input type="radio" className="btn-check" name="options"
             id="option4" autoComplete="off"/>
      <label className="btn btn-secondary"
             htmlFor="option4">Radio</label>
    </div>
    <div className="bd-example">
      <input type="checkbox" className="btn-check" id="btn-check-outlined"
             autoComplete="off"/>
      <label className="btn btn-outline-primary" htmlFor="btn-check-outlined">Single
        toggle</label><br/>

      <input type="checkbox" className="btn-check" id="btn-check-2-outlined"
             checked="checked" autoComplete="off"/>
      <label className="btn btn-outline-secondary"
             htmlFor="btn-check-2-outlined">Checked</label><br/>

      <input type="radio" className="btn-check" name="options-outlined"
             id="success-outlined" autoComplete="off" checked="checked"/>
      <label className="btn btn-outline-success"
             htmlFor="success-outlined">Checked success radio</label>

      <input type="radio" className="btn-check" name="options-outlined"
             id="danger-outlined" autoComplete="off"/>
      <label className="btn btn-outline-danger"
             htmlFor="danger-outlined">Danger radio</label>
    </div>
  </div>
);
export const ChecksRadios = TwigTemplate.bind(
  {}
);
