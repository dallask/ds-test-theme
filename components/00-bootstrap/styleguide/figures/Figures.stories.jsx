import React from 'react';

import './_style.scss';

import docs from './docs.mdx';

export default {
  title: 'Bootstrap/styleguide',
  component: 'Figures',
  parameters: {
    docs: {
      page: docs,
    },
  },
};

const TwigTemplate = (args) => (
  <div className="m-2 figures-wrapper">
    <div className="bd-example">
      <figure className="figure">
        <svg className="bd-placeholder-img figure-img img-fluid rounded"
             width="400" height="300" xmlns="http://www.w3.org/2000/svg"
             role="img" aria-label="Placeholder: 400x300"
             preserveAspectRatio="xMidYMid slice" focusable="false">
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="#868e96"></rect>
          <text x="50%" y="50%" fill="#dee2e6" dy=".3em">400x300</text>
        </svg>

        <figcaption className="figure-caption">A caption for the above image.
        </figcaption>
      </figure>
    </div>
    <div className="bd-example">
      <figure className="figure">
        <svg className="bd-placeholder-img figure-img img-fluid rounded"
             width="400" height="300" xmlns="http://www.w3.org/2000/svg"
             role="img" aria-label="Placeholder: 400x300"
             preserveAspectRatio="xMidYMid slice" focusable="false">
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="#868e96"></rect>
          <text x="50%" y="50%" fill="#dee2e6" dy=".3em">400x300</text>
        </svg>

        <figcaption className="figure-caption text-end">A caption for the above
          image.
        </figcaption>
      </figure>
    </div>
  </div>
);
export const Figures = TwigTemplate.bind({});
