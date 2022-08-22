import React from 'react';

import './_style.scss';

import docs from './docs.mdx';

export default {
  title: 'Bootstrap/styleguide/Forms',
  component: 'inputGroup',
  parameters: {
    docs: {
      page: docs,
    },
  },
};

const TwigTemplate = (args) => (
  <div className="m-2 input-group-wrapper">
    <div className="bd-example">
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">@</span>
        <input type="text" className="form-control" placeholder="Username"
               aria-label="Username" aria-describedby="basic-addon1"/>
      </div>

      <div className="input-group mb-3">
        <input type="text" className="form-control"
               placeholder="Recipient's username"
               aria-label="Recipient's username"
               aria-describedby="basic-addon2"/>
        <span className="input-group-text"
              id="basic-addon2">@example.com</span>
      </div>

      <label htmlFor="basic-url" className="form-label">Your vanity URL</label>
      <div className="input-group mb-3">
        <span className="input-group-text"
              id="basic-addon3">https://example.com/users/</span>
        <input type="text" className="form-control" id="basic-url"
               aria-describedby="basic-addon3"/>
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text">$</span>
        <input type="text" className="form-control"
               aria-label="Amount (to the nearest dollar)"/>
        <span className="input-group-text">.00</span>
      </div>

      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Username"
               aria-label="Username"/>
        <span className="input-group-text">@</span>
        <input type="text" className="form-control" placeholder="Server"
               aria-label="Server"/>
      </div>

      <div className="input-group">
        <span className="input-group-text">With textarea</span>
        <textarea className="form-control"
                  aria-label="With textarea"></textarea>
      </div>
    </div>
    <div className="bd-example">
      <div className="input-group flex-nowrap">
        <span className="input-group-text" id="addon-wrapping">@</span>
        <input type="text" className="form-control" placeholder="Username"
               aria-label="Username" aria-describedby="addon-wrapping"/>
      </div>
    </div>
    <div className="bd-example">
      <div className="input-group input-group-sm mb-3">
        <span className="input-group-text"
              id="inputGroup-sizing-sm">Small</span>
        <input type="text" className="form-control"
               aria-label="Sizing example input"
               aria-describedby="inputGroup-sizing-sm"/>
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text"
              id="inputGroup-sizing-default">Default</span>
        <input type="text" className="form-control"
               aria-label="Sizing example input"
               aria-describedby="inputGroup-sizing-default"/>
      </div>

      <div className="input-group input-group-lg">
        <span className="input-group-text"
              id="inputGroup-sizing-lg">Large</span>
        <input type="text" className="form-control"
               aria-label="Sizing example input"
               aria-describedby="inputGroup-sizing-lg"/>
      </div>
    </div>
    <div className="bd-example">
      <div className="input-group mb-3">
        <div className="input-group-text">
          <input className="form-check-input mt-0" type="checkbox" value=""
                 aria-label="Checkbox for following text input"/>
        </div>
        <input type="text" className="form-control"
               aria-label="Text input with checkbox"/>
      </div>

      <div className="input-group">
        <div className="input-group-text">
          <input className="form-check-input mt-0" type="radio" value=""
                 aria-label="Radio button for following text input"/>
        </div>
        <input type="text" className="form-control"
               aria-label="Text input with radio button"/>
      </div>
    </div>
    <div className="bd-example">
      <div className="input-group">
        <span className="input-group-text">First and last name</span>
        <input type="text" aria-label="First name" className="form-control"/>
        <input type="text" aria-label="Last name" className="form-control"/>
      </div>
    </div>
    <div className="bd-example">
      <div className="input-group mb-3">
        <span className="input-group-text">$</span>
        <span className="input-group-text">0.00</span>
        <input type="text" className="form-control"
               aria-label="Dollar amount (with dot and two decimal places)"/>
      </div>

      <div className="input-group">
        <input type="text" className="form-control"
               aria-label="Dollar amount (with dot and two decimal places)"/>
        <span className="input-group-text">$</span>
        <span className="input-group-text">0.00</span>
      </div>
    </div>
    <div className="bd-example">
      <div className="input-group mb-3">
        <button className="btn btn-outline-secondary" type="button"
                id="button-addon1">Button
        </button>
        <input type="text" className="form-control" placeholder=""
               aria-label="Example text with button addon"
               aria-describedby="button-addon1"/>
      </div>

      <div className="input-group mb-3">
        <input type="text" className="form-control"
               placeholder="Recipient's username"
               aria-label="Recipient's username"
               aria-describedby="button-addon2"/>
        <button className="btn btn-outline-secondary" type="button"
                id="button-addon2">Button
        </button>
      </div>

      <div className="input-group mb-3">
        <button className="btn btn-outline-secondary" type="button">Button
        </button>
        <button className="btn btn-outline-secondary" type="button">Button
        </button>
        <input type="text" className="form-control" placeholder=""
               aria-label="Example text with two button addons"/>
      </div>

      <div className="input-group">
        <input type="text" className="form-control"
               placeholder="Recipient's username"
               aria-label="Recipient's username with two button addons"/>
        <button className="btn btn-outline-secondary" type="button">Button
        </button>
        <button className="btn btn-outline-secondary" type="button">Button
        </button>
      </div>
    </div>
    <div className="bd-example">
      <div className="input-group mb-3">
        <button className="btn btn-outline-secondary dropdown-toggle"
                type="button" data-bs-toggle="dropdown"
                aria-expanded="false">Dropdown
        </button>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Action</a></li>
          <li><a className="dropdown-item" href="#">Another action</a></li>
          <li><a className="dropdown-item" href="#">Something else here</a></li>
          <li>
            <hr className="dropdown-divider"/>
          </li>
          <li><a className="dropdown-item" href="#">Separated link</a></li>
        </ul>
        <input type="text" className="form-control"
               aria-label="Text input with dropdown button"/>
      </div>

      <div className="input-group mb-3">
        <input type="text" className="form-control"
               aria-label="Text input with dropdown button"/>
        <button className="btn btn-outline-secondary dropdown-toggle"
                type="button" data-bs-toggle="dropdown"
                aria-expanded="false">Dropdown
        </button>
        <ul className="dropdown-menu dropdown-menu-end">
          <li><a className="dropdown-item" href="#">Action</a></li>
          <li><a className="dropdown-item" href="#">Another action</a></li>
          <li><a className="dropdown-item" href="#">Something else here</a>
          </li>
          <li>
            <hr className="dropdown-divider"/>
          </li>
          <li><a className="dropdown-item" href="#">Separated link</a></li>
        </ul>
      </div>

      <div className="input-group">
        <button className="btn btn-outline-secondary dropdown-toggle"
                type="button" data-bs-toggle="dropdown"
                aria-expanded="false">Dropdown
        </button>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Action before</a></li>
          <li><a className="dropdown-item" href="#">Another action before</a>
          </li>
          <li><a className="dropdown-item" href="#">Something else here</a></li>
          <li>
            <hr className="dropdown-divider"/>
          </li>
          <li><a className="dropdown-item" href="#">Separated link</a></li>
        </ul>
        <input type="text" className="form-control"
               aria-label="Text input with 2 dropdown buttons"/>
        <button className="btn btn-outline-secondary dropdown-toggle"
                type="button" data-bs-toggle="dropdown"
                aria-expanded="false">Dropdown
        </button>
        <ul className="dropdown-menu dropdown-menu-end">
          <li><a className="dropdown-item" href="#">Action</a></li>
          <li><a className="dropdown-item" href="#">Another action</a></li>
          <li><a className="dropdown-item" href="#">Something else here</a>
          </li>
          <li>
            <hr className="dropdown-divider"/>
          </li>
          <li><a className="dropdown-item" href="#">Separated link</a></li>
        </ul>
      </div>
    </div>
    <div className="bd-example">
      <div className="input-group mb-3">
        <button type="button" className="btn btn-outline-secondary">Action
        </button>
        <button type="button"
                className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
                data-bs-toggle="dropdown" aria-expanded="false">
          <span className="visually-hidden">Toggle Dropdown</span>
        </button>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Action</a></li>
          <li><a className="dropdown-item" href="#">Another action</a></li>
          <li><a className="dropdown-item" href="#">Something else here</a></li>
          <li>
            <hr className="dropdown-divider"/>
          </li>
          <li><a className="dropdown-item" href="#">Separated link</a></li>
        </ul>
        <input type="text" className="form-control"
               aria-label="Text input with segmented dropdown button"/>
      </div>

      <div className="input-group">
        <input type="text" className="form-control"
               aria-label="Text input with segmented dropdown button"/>
        <button type="button" className="btn btn-outline-secondary">Action
        </button>
        <button type="button"
                className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
                data-bs-toggle="dropdown" aria-expanded="false">
          <span className="visually-hidden">Toggle Dropdown</span>
        </button>
        <ul className="dropdown-menu dropdown-menu-end">
          <li><a className="dropdown-item" href="#">Action</a></li>
          <li><a className="dropdown-item" href="#">Another action</a></li>
          <li><a className="dropdown-item" href="#">Something else here</a>
          </li>
          <li>
            <hr className="dropdown-divider"/>
          </li>
          <li><a className="dropdown-item" href="#">Separated link</a></li>
        </ul>
      </div>
    </div>
    <div className="bd-example">
      <div className="input-group mb-3">
        <label className="input-group-text"
               htmlFor="inputGroupSelect01">Options</label>
        <select className="form-select" id="inputGroupSelect01">
          <option selected="">Choose...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>

      <div className="input-group mb-3">
        <select className="form-select" id="inputGroupSelect02">
          <option selected="">Choose...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <label className="input-group-text"
               htmlFor="inputGroupSelect02">Options</label>
      </div>

      <div className="input-group mb-3">
        <button className="btn btn-outline-secondary" type="button">Button
        </button>
        <select className="form-select" id="inputGroupSelect03"
                aria-label="Example select with button addon">
          <option selected="">Choose...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>

      <div className="input-group">
        <select className="form-select" id="inputGroupSelect04"
                aria-label="Example select with button addon">
          <option selected="">Choose...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <button className="btn btn-outline-secondary" type="button">Button
        </button>
      </div>
    </div>
    <div className="bd-example">
      <div className="input-group mb-3">
        <label className="input-group-text"
               htmlFor="inputGroupFile01">Upload</label>
        <input type="file" className="form-control" id="inputGroupFile01"/>
      </div>

      <div className="input-group mb-3">
        <input type="file" className="form-control" id="inputGroupFile02"/>
        <label className="input-group-text"
               htmlFor="inputGroupFile02">Upload</label>
      </div>

      <div className="input-group mb-3">
        <button className="btn btn-outline-secondary" type="button"
                id="inputGroupFileAddon03">Button
        </button>
        <input type="file" className="form-control" id="inputGroupFile03"
               aria-describedby="inputGroupFileAddon03" aria-label="Upload"/>
      </div>

      <div className="input-group">
        <input type="file" className="form-control" id="inputGroupFile04"
               aria-describedby="inputGroupFileAddon04" aria-label="Upload"/>
        <button className="btn btn-outline-secondary" type="button"
                id="inputGroupFileAddon04">Button
        </button>
      </div>
    </div>
  </div>
);
export const inputGroup = TwigTemplate.bind({});
