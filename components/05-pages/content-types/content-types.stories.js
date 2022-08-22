import React from 'react';

import '../../02-molecules/menus/main-menu/main-menu';

import articleTwig from './article.twig';

import breadcrumbData
  from '../../02-molecules/menus/breadcrumbs/breadcrumbs.yml';
import socialMenuData from '../../02-molecules/menus/social/social-menu.yml';
import footerMenuData from '../../02-molecules/menus/inline/inline-menu.yml';
import contentWithTitle
  from "../../02-molecules/content-with-title/content-with-title.twig";
import ul from "../../01-atoms/lists/ul.twig";
import link from "../../01-atoms/links/link/link.twig";
import imageLink from "../../02-molecules/image-link/image-link.twig";
import prcDate from "../../01-atoms/footer-atoms/prc-date/prc-date.twig";
import prcCode from "../../01-atoms/footer-atoms/prc-code/prc-code.twig";
import icon from "../../01-atoms/images/icons/_icon.twig";
import dropdown from "../../00-bootstrap/components/dropdown/dropdown.twig";
import flexibleHeaderData from "../../03-organisms/header/flexible-header.yml";

/**
 * Storybook Definition.
 */
export default {
  title: 'Pages/Content Types',
  parameters: {
    layout: 'fullscreen',
  },
};

export const articleDs1 = () => (
  <div class="ds1"
    dangerouslySetInnerHTML={{
      __html: articleTwig({
        page_layout_modifier: 'contained',
        ...breadcrumbData,
        ...socialMenuData,
        ...footerMenuData,
        card__link__text: 'Click here',
        footer_with_container: true,
        footer__additional_class: 'bg-secondary',
        flexible_header__background_color: 'bg-light',
        flexible_header__mobile_background_color: 'bg-dark',
        page: {
          header_middle_left: icon({
            icon_base_class: "icon",
            icon_blockname: "logo",
            icon_name: "otuska-logo--dark"
          }) + dropdown({
            ...flexibleHeaderData,
            classes: ['bg-light']
          }),
          header_middle_right: link({
            link_content: 'SAVINGS CARD PROGRAM',
            link_url: '#',
            link_attributes: {
              'target': '_blank'
            }
          }),
          header_mobile: {
            body: ul({
              ul_items: [
                {
                  content: link({
                    link_url: '#',
                    link_content: 'About'
                  })
                },
                {
                  content: link({
                    link_url: '#',
                    link_content: 'Careers'
                  })
                },
                {
                  content: link({
                    link_url: '#',
                    link_content: 'Research & Development'
                  })
                }
                ,
                {
                  content: link({
                    link_url: '#',
                    link_content: 'Product & Resources'
                  })
                },
                {
                  content: link({
                    link_url: '#',
                    link_content: 'Our Global Locations'
                  })
                },
                {
                  content: link({
                    link_url: '#',
                    link_content: 'Brand Portal'
                  })
                }
              ]
            }),
            classes: []
          },
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
      }),
    }}
  />
);
