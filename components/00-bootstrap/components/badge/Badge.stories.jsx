import React from 'react';

import badgeTwig from './badge.twig';
import badgeData from './badge.yml';

import docs from './badge.mdx';

export default {
  title: 'Bootstrap/components',
  component: 'Badge',
  argTypes: {
    badge_size: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    docs: {
      page: docs,
    },
  },
};

const TwigTemplate = (args) => (
  <div className="m-2">
    <h2>Headings:</h2>
    {Object.values([1, 2, 3, 4, 5, 6]).map(variant => (
      <div key={variant} className={`h${variant} text-dark`}>
        Example heading
        <span dangerouslySetInnerHTML={{
          __html: badgeTwig({
            ...args,
            badge_variant: 'secondary',
          }),
        }}/>
      </div>
    ))}
    <h2 className={'mt-5'}>Buttons:</h2>
    <button type="button" className="btn btn-primary">
      Notifications <span dangerouslySetInnerHTML={{
      __html: badgeTwig({
        ...args,
        badge_content: 4,
        badge_variant: 'secondary',
      }),
    }}/>
    </button>
    <h2 className={'mt-5'}>Positioned:</h2>
    <button type="button" className="btn btn-primary position-relative">
      Inbox
      <span dangerouslySetInnerHTML={{
        __html: badgeTwig({
          ...args,
          badge_content: '99+<span class="visually-hidden">unread messages</span>',
          badge_variant: 'danger',
          badge_pill: true,
          badge_classes: [
            'position-absolute',
            'top-0',
            'start-100',
            'translate-middle',
          ],
        }),
      }}/>
    </button>
    <button type="button" className="btn btn-primary position-relative mx-5">
      Profile
      <span dangerouslySetInnerHTML={{
        __html: badgeTwig({
          ...args,
          badge_content: '<span class="visually-hidden">unread messages</span>',
          badge_variant: 'danger',
          badge_pill: false,
          badge_classes: [
            'position-absolute',
            'top-0',
            'start-100',
            'translate-middle',
            'p-2',
            'bg-danger',
            'border',
            'border-light',
            'rounded-circle',
          ],
        }),
      }}/>
    </button>
    <h2 className={'mt-5'}>Background colors:</h2>
    {Object.values(badgeData.variant).map(badge_variant => (
      <span key={badge_variant} className={'me-2 d-inline-block'}
            dangerouslySetInnerHTML={{
              __html: badgeTwig({ ...args, badge_variant }),
            }}/>
    ))}
  </div>
);
export const Badge = TwigTemplate.bind({});

Badge.args = {
  badge_content: badgeData.content,
  badge_pill: badgeData.pill,
  badge_classes: badgeData.classes,
  badge_extra_attributes: badgeData.attributes,
};
