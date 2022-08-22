import React from 'react';
import documentation from './README.md';

import flexibleFooterTwig from './flexible-footer.twig';
import placeHolderTwig from '../../04-templates/placeholder/place-holder.twig';
import contentWithTitle
  from '../../02-molecules/content-with-title/content-with-title.twig';
import ul from '../../01-atoms/lists/ul.twig';
import link from '../../01-atoms/links/link/link.twig';
import imageLink from '../../02-molecules/image-link/image-link.twig';
import prcDate from '../../01-atoms/footer-atoms/prc-date/prc-date.twig';
import prcCode from '../../01-atoms/footer-atoms/prc-code/prc-code.twig';

/**
 * Storybook Definition.
 */
export default {
  title: 'Organisms/Layouts/Footer',
  parameters: {
    docs: {
      description: {
        component: documentation
      }
    },
    layout: 'fullscreen'
  }
};

export const flexibleFooter = (args) => (
  <div
    dangerouslySetInnerHTML={{
      __html: flexibleFooterTwig(args)
    }}
  />
);

const variants = [
  {
    first_middle_first: contentWithTitle({
      title: 'Pre Footer Space',
      content: 'Optional text area that can be applied to the footer. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }),
    first_middle_second: contentWithTitle({
      title: 'Sections',
      content: ul({
        ul_items: [
          {
            content: link({
              link_url: '/overview/directory',
              link_content: 'Overview'
            })
          },
          {
            content: link({
              link_url: '/global/typography',
              link_content: 'Global Base Styles &amp; Variables'
            })
          },
          {
            content: link({
              link_url: '/elements/accordions',
              link_content: 'Elements (Bootstrap Building Blocks)'
            })
          }
          ,
          {
            content: link({
              link_url: '/nav/breadcrumbs',
              link_content: 'Navigation'
            })
          },
          {
            content: link({
              link_url: '/content/content-cards-rows',
              link_content: 'Content Patterns'
            })
          },
          {
            content: link({
              link_url: '/forms/components',
              link_content: 'Forms'
            })
          }
        ]
      })
    }),
    first_middle_third: contentWithTitle({
      title: 'SECTION LINKS',
      content: ul({
        ul_items: [
          {
            content: link({
              link_url: '/overview/intro',
              link_content: 'Intro to the Otsuka Design System'
            })
          },
          {
            content: link({
              link_url: '/overview/directory',
              link_content: 'Directory'
            })
          }
        ]
      })
    }),
    first_middle_fourth: contentWithTitle({
      title: 'Legal',
      content: ul({
        ul_items: [
          {
            content: link({
              link_url: '/some.pdf',
              link_content: 'Important Safety Information'
            })
          },
          {
            content: link({
              link_url: '/some.pdf',
              link_content: 'US Full Prescribing Information'
            })
          },
          {
            content: link({
              link_url: '/some.pdf',
              link_content: 'Medication Guide'
            })
          },
          {
            content: link({
              link_url: '/some.pdf',
              link_content: 'Federal Communications Commission (FCC) Statement'
            })
          }
        ]
      })
    }),
    second_middle_first: imageLink({
      link_url: '#',
      img_src: 'http://designsystem6946.dev-otsuka.acsitefactory.com/sites/g/files/qhldwo5061/files/fields/2021-01/otsuka-logo-footer.png',
      image_alt: 'Logo'
    }),
    second_middle_last: ul({
      ul_base_class: 'd-flex gap-3 justify-content-end',
      ul_items: [
        {
          content: link({
            link_url: '#',
            link_content: 'Privacy Policy'
          })
        },
        {
          content: link({
            link_url: '#',
            link_content: 'Site Map'
          })
        },
        {
          content: link({
            link_url: '#',
            link_content: 'Terms of Use'
          })
        }
      ]
    }),
    third_middle: 'Unless otherwise specified, all product and service names appearing on this Internet site are trademarks owned by or licensed to Otsuka Patient Assistance Foundation, Inc. No use of any trademark, trade name, or trade dress in this site may be made without the prior written authorization of Otsuka Patient Assistance Foundation, Inc. except to identify the product or services of the company.',
    fourth_middle_first: '© 2020 Otsuka America Pharmaceutical, Inc., Rockville, MD',
    fourth_middle_last: prcDate({prcdate_content: 'December 2021'}) + prcCode({prccode_content: '10US21EUC0004'})
  },
  {
    first_middle_first: placeHolderTwig({place_holder: 'Place Holder'}),
    first_middle_second: placeHolderTwig({place_holder: 'Place Holder'}),
    first_middle_third: placeHolderTwig({place_holder: 'Place Holder'}),
    first_middle_fourth: placeHolderTwig({place_holder: 'Place Holder'}),
    second_middle_first: placeHolderTwig({place_holder: 'Place Holder'}),
    second_middle_last: placeHolderTwig({place_holder: 'Place Holder'}),
    third_middle: placeHolderTwig({place_holder: 'Place Holder'}),
    fourth_middle_first: placeHolderTwig({place_holder: 'Place Holder'}),
    fourth_middle_last: placeHolderTwig({place_holder: 'Place Holder'}),
    fifth_middle_first: placeHolderTwig({place_holder: 'Place Holder'}),
    fifth_middle_second: placeHolderTwig({place_holder: 'Place Holder'}),
    fifth_middle_third: placeHolderTwig({place_holder: 'Place Holder'}),
    fifth_middle_fourth: placeHolderTwig({place_holder: 'Place Holder'}),
  },
  {
    first_middle_first: placeHolderTwig({place_holder: 'Place Holder'}),
    first_middle_second: placeHolderTwig({place_holder: 'Place Holder'}),
    first_middle_third: placeHolderTwig({place_holder: 'Place Holder'}),
    first_middle_fourth: placeHolderTwig({place_holder: 'Place Holder'})
  },
  {
    second_middle_first: placeHolderTwig({place_holder: 'Place Holder'}),
    second_middle_last: placeHolderTwig({place_holder: 'Place Holder'}),
    third_middle: placeHolderTwig({place_holder: 'Place Holder'}),
    fourth_middle_first: placeHolderTwig({place_holder: 'Place Holder'}),
    fourth_middle_last: placeHolderTwig({place_holder: 'Place Holder'}),
    fifth_middle_first: placeHolderTwig({place_holder: 'Place Holder'}),
    fifth_middle_second: placeHolderTwig({place_holder: 'Place Holder'}),
    fifth_middle_third: placeHolderTwig({place_holder: 'Place Holder'}),
    fifth_middle_fourth: placeHolderTwig({place_holder: 'Place Holder'}),
  }
];

flexibleFooter.args = {
  footer_with_container: 0,
  page: 0,
  footer__additional_class: 'bg-secondary'
};

flexibleFooter.argTypes = {
  footer_with_container: {
    name: 'With Container',
    control: {
      type: 'boolean'
    }
  },
  footer__additional_class: {
    name: 'Background Color',
    options: ['bg-primary', 'bg-secondary', 'bg-success', 'bg-info', 'bg-warning', 'bg-danger', 'bg-light', 'bg-dark'],
    control: {
      type: 'select',
      labels: {
        'bg-primary': 'Primary',
        'bg-secondary': 'Secondary',
        "bg-success": 'Success',
        "bg-info": 'Info',
        "bg-warning": 'Warning',
        "bg-danger": 'Danger',
        "bg-light": 'Light',
        "bg-dark": 'Dark'
      }
    }
  },
  page: {
    name: 'Variant',
    options: Object.keys(variants),
    mapping: variants,
    control: {
      type: 'select',
      labels: {
        0: 'All Included with Data without Fifth Section',
        1: 'All Included with Place Holder Data',
        2: 'Only First Section with Place Holder Data',
        3: 'Without First Section with Place Holder Data'
      }
    }
  }
};

