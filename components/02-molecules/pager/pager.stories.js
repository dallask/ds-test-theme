import React from 'react';

import pager from './pager.twig';

import pagerData from './pager.yml';
import pagerEllipsesData from './pager-ellipses.yml';
import pagerPrevEllipsesData from './pager-prev-ellipses.yml';
import pagerBothEllipsesData from './pager-both-ellipses.yml';
import documentation from './README.md';

/**
 * Storybook Definition.
 */
export default {
  title: 'Molecules/Menus/Pager',
  parameters: {
    docs: {
      description: {
        component: documentation
      }
    }
  }
};

export const pagerExample = () => (
  <>
    <h3>Pager:</h3>
    <div
      dangerouslySetInnerHTML={{
        __html: pager({ ...pagerData, heading_id:  'pager-heading-id-' + pagerData.pager__uid }),
      }}
    />
    <h3>Pager with next ellipses:</h3>
    <div
      dangerouslySetInnerHTML={{
        __html: pager({ ...pagerData, ...pagerEllipsesData, heading_id:  'pager-heading-id-' + pagerEllipsesData.pager__uid }),
      }}
    />
    <h3>Pager with both ellipses:</h3>
    <div
      dangerouslySetInnerHTML={{
        __html: pager({ ...pagerData, ...pagerBothEllipsesData, heading_id:  'pager-heading-id-' + pagerBothEllipsesData.pager__uid }),
      }}
    />
    <h3>Pager with previous ellipses:</h3>
    <div
      dangerouslySetInnerHTML={{
        __html: pager({ ...pagerData, ...pagerPrevEllipsesData, heading_id:  'pager-heading-id-' + pagerPrevEllipsesData.pager__uid }),
      }}
    />
  </>
);
