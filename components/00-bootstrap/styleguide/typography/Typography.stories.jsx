import React from 'react';

import './_style.scss';

import docs from './docs.mdx';

export default {
  title: 'Bootstrap/styleguide',
  component: 'Typography',
  parameters: {
    docs: {
      page: docs,
    },
  },
};

const TwigTemplate = (args) => (
  <div className="m-2 typography-wrapper">
    <table className="table">
      <thead>
      <tr>
        <th>Heading</th>
        <th>Example</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>
          <code>&lt;h1&gt;&lt;/h1&gt;</code>
        </td>
        <td><span className="h1">h1. Bootstrap heading</span></td>
      </tr>
      <tr>
        <td>
          <code>&lt;h2&gt;&lt;/h2&gt;</code>
        </td>
        <td><span className="h2">h2. Bootstrap heading</span></td>
      </tr>
      <tr>
        <td>
          <code>&lt;h3&gt;&lt;/h3&gt;</code>
        </td>
        <td><span className="h3">h3. Bootstrap heading</span></td>
      </tr>
      <tr>
        <td>
          <code>&lt;h4&gt;&lt;/h4&gt;</code>
        </td>
        <td><span className="h4">h4. Bootstrap heading</span></td>
      </tr>
      <tr>
        <td>
          <code>&lt;h5&gt;&lt;/h5&gt;</code>
        </td>
        <td><span className="h5">h5. Bootstrap heading</span></td>
      </tr>
      <tr>
        <td>
          <code>&lt;h6&gt;&lt;/h6&gt;</code>
        </td>
        <td><span className="h6">h6. Bootstrap heading</span></td>
      </tr>
      </tbody>
    </table>
    <div className="bd-example">
      <p className="h1">h1. Bootstrap heading</p>
      <p className="h2">h2. Bootstrap heading</p>
      <p className="h3">h3. Bootstrap heading</p>
      <p className="h4">h4. Bootstrap heading</p>
      <p className="h5">h5. Bootstrap heading</p>
      <p className="h6">h6. Bootstrap heading</p>
    </div>
    <div className="bd-example">
      <div className="display-1 pb-3 mb-3 border-bottom">Display 1</div>
      <div className="display-2 pb-3 mb-3 border-bottom">Display 2</div>
      <div className="display-3 pb-3 mb-3 border-bottom">Display 3</div>
      <div className="display-4 pb-3 mb-3 border-bottom">Display 4</div>
      <div className="display-5 pb-3 mb-3 border-bottom">Display 5</div>
      <div className="display-6">Display 6</div>
    </div>
    <div className="bd-example">
      <p>You can use the mark tag to <mark>highlight</mark> text.</p>
      <p>
        <del>This line of text is meant to be treated as deleted text.</del>
      </p>
      <p><s>This line of text is meant to be treated as no longer accurate.</s>
      </p>
      <p>
        <ins>This line of text is meant to be treated as an addition to the
          document.
        </ins>
      </p>
      <p><u>This line of text will render as underlined.</u></p>
      <p><small>This line of text is meant to be treated as fine print.</small>
      </p>
      <p><strong>This line rendered as bold text.</strong></p>
      <p><em>This line rendered as italicized text.</em></p>
    </div>
    <div className="bd-example">
      <p><abbr title="attribute">attr</abbr></p>
      <p><abbr title="HyperText Markup Language"
               className="initialism">HTML</abbr></p>
    </div>
    <div className="bd-example">
      <blockquote className="blockquote">
        <p>A well-known quote, contained in a blockquote element.</p>
      </blockquote>
    </div>
    <div className="bd-example">
      <figure>
        <blockquote className="blockquote">
          <p>A well-known quote, contained in a blockquote element.</p>
        </blockquote>
        <figcaption className="blockquote-footer">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </figcaption>
      </figure>
    </div>
    <div className="bd-example">
      <figure className="text-center">
        <blockquote className="blockquote">
          <p>A well-known quote, contained in a blockquote element.</p>
        </blockquote>
        <figcaption className="blockquote-footer">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </figcaption>
      </figure>
    </div>
    <div className="bd-example">
      <figure className="text-end">
        <blockquote className="blockquote">
          <p>A well-known quote, contained in a blockquote element.</p>
        </blockquote>
        <figcaption className="blockquote-footer">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </figcaption>
      </figure>
    </div>
    <div className="bd-example">
      <ul className="list-unstyled">
        <li>This is a list.</li>
        <li>It appears completely unstyled.</li>
        <li>Structurally, it's still a list.</li>
        <li>However, this style only applies to immediate child elements.</li>
        <li>Nested lists:
          <ul>
            <li>are unaffected by this style</li>
            <li>will still show a bullet</li>
            <li>and have appropriate left margin</li>
          </ul>
        </li>
        <li>This may still come in handy in some situations.</li>
      </ul>
    </div>
    <div className="bd-example">
      <ul className="list-inline">
        <li className="list-inline-item">This is a list item.</li>
        <li className="list-inline-item">And another one.</li>
        <li className="list-inline-item">But they're displayed inline.</li>
      </ul>
    </div>
    <div className="bd-example">
      <dl className="row">
        <dt className="col-sm-15">Description lists</dt>
        <dd className="col-sm-45">A description list is perfect for defining
          terms.
        </dd>

        <dt className="col-sm-15">Term</dt>
        <dd className="col-sm-45">
          <p>Definition for the term.</p>
          <p>And some more placeholder definition text.</p>
        </dd>

        <dt className="col-sm-15">Another term</dt>
        <dd className="col-sm-45">This definition is short, so no extra
          paragraphs or anything.
        </dd>

        <dt className="col-sm-15 text-truncate">Truncated term is truncated</dt>
        <dd className="col-sm-45">This can be useful when space is tight. Adds an
          ellipsis at the end.
        </dd>

        <dt className="col-sm-15">Nesting</dt>
        <dd className="col-sm-45">
          <dl className="row">
            <dt className="col-sm-20">Nested definition list</dt>
            <dd className="col-sm-40">I heard you like definition lists. Let me
              put a definition list inside your definition list.
            </dd>
          </dl>
        </dd>
      </dl>
    </div>
  </div>
);
export const Typography = TwigTemplate.bind({});
