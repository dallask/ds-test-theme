import React from 'react';

import './_style.scss';

import docs from './docs.mdx';

export default {
  title: 'Bootstrap/styleguide',
  component: 'Images',
  parameters: {
    docs: {
      page: docs,
    },
  },
};

const TwigTemplate = (args) => (
  <div className="m-2">
    <div className="bd-example">
      <svg className="bd-placeholder-img bd-placeholder-img-lg img-fluid"
           width="100%" height="250" xmlns="http://www.w3.org/2000/svg"
           role="img" aria-label="Placeholder: Responsive image"
           preserveAspectRatio="xMidYMid slice" focusable="false">
        <title>Placeholder</title>
        <rect width="100%" height="100%" fill="#868e96"></rect>
        <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Responsive image</text>
      </svg>
    </div>
    <div className="bd-example">
      <svg className="bd-placeholder-img img-thumbnail" width="200" height="200"
           xmlns="http://www.w3.org/2000/svg" role="img"
           aria-label="A generic square placeholder image with a white border around it, making it resemble a photograph taken with an old instant camera: 200x200"
           preserveAspectRatio="xMidYMid slice" focusable="false"><title>A
        generic square placeholder image with a white border around it, making
        it resemble a photograph taken with an old instant camera</title>
        <rect width="100%" height="100%" fill="#868e96"></rect>
        <text x="50%" y="50%" fill="#dee2e6" dy=".3em">200x200</text>
      </svg>
    </div>
    <div className="bd-example">
      <svg className="bd-placeholder-img rounded float-start" width="200"
           height="200" xmlns="http://www.w3.org/2000/svg" role="img"
           aria-label="Placeholder: 200x200"
           preserveAspectRatio="xMidYMid slice" focusable="false">
        <title>Placeholder</title>
        <rect width="100%" height="100%" fill="#868e96"></rect>
        <text x="50%" y="50%" fill="#dee2e6" dy=".3em">200x200</text>
      </svg>

      <svg className="bd-placeholder-img rounded float-end" width="200"
           height="200" xmlns="http://www.w3.org/2000/svg" role="img"
           aria-label="Placeholder: 200x200"
           preserveAspectRatio="xMidYMid slice" focusable="false">
        <title>Placeholder</title>
        <rect width="100%" height="100%" fill="#868e96"></rect>
        <text x="50%" y="50%" fill="#dee2e6" dy=".3em">200x200</text>
      </svg>

    </div>
    <div className="bd-example">
      <svg className="bd-placeholder-img rounded mx-auto d-block" width="200"
           height="200" xmlns="http://www.w3.org/2000/svg" role="img"
           aria-label="Placeholder: 200x200"
           preserveAspectRatio="xMidYMid slice" focusable="false">
        <title>Placeholder</title>
        <rect width="100%" height="100%" fill="#868e96"></rect>
        <text x="50%" y="50%" fill="#dee2e6" dy=".3em">200x200</text>
      </svg>

    </div>
  </div>
);
export const Images = TwigTemplate.bind({});
