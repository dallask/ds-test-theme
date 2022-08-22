import React from 'react';

import sozoseiFoundationTemplate from './sozosei-foundation.twig';

import headerBTwigData
  from '../../../03-organisms/site/site-header-b/site-header-b.yml';
import ul from "../../../01-atoms/lists/ul.twig";
import link from "../../../01-atoms/links/link/link.twig";
import responsiveImage
  from "../../../01-atoms/images/image/responsive-image.twig";

import textParagraph from "../../../01-atoms/text/text/01-paragraph.twig";

import mainMenu from '../../../02-molecules/menus/main-menu/main-menu.twig';
import menuData from './menu.yml';
import prcDate from "../../../01-atoms/footer-atoms/prc-date/prc-date.twig";
import prcCode from "../../../01-atoms/footer-atoms/prc-code/prc-code.twig";

/**
 * Storybook Definition.
 */
export default {
  title: 'Pages/Landing Pages',
  parameters: {
    layout: 'fullscreen'
  }
};

export const sozoseiFoundation = () => (
  <div
    dangerouslySetInnerHTML={{
      __html: sozoseiFoundationTemplate({
        footer_with_container: true,
        footer__additional_class: 'bg-secondary',
        flexible_header__mobile_background_color: 'bg-dark',
        page: {
          header_middle_left: responsiveImage({
            output_image_tag: true,
            image_src: 'custom/sozoseifoundation/logo-dark.png',
            image_alt: 'Logo',
            responsive_image_blockname: 'logo'
          }),
          header_middle_right: mainMenu(menuData),
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
          first_middle_first: responsiveImage({
            output_image_tag: true,
            image_src: 'custom/sozoseifoundation/logo-light.png',
            image_alt: 'Logo',
            responsive_image_blockname: 'logo'
          }) + textParagraph({
            paragraph_content: 'A CATALYST FOR IDEAS THAT NURTURE CREATIVE SOLUTIONS FOR HEALTHIER COMMUNITIES.'
          }),
          first_middle_second: textParagraph({
            paragraph_content: 'Enter your email to learn more about our mission and to receive periodic updates and announcements.'
          }),
          first_middle_third: ul({
              ul_items: [
                {
                  content: link({
                    link_url: '#',
                    link_content: 'CONTACT US'
                  })
                },
                {
                  content: link({
                    link_url: '#',
                    link_content: 'TERMS AND CONDITIONS'
                  })
                },
                {
                  content: link({
                    link_url: '#',
                    link_content: 'PRIVACY POLICY'
                  })
                }
              ]
            }) +
            textParagraph({
              paragraph_content: '© 2022 Sozosei Foundation.<br>All Rights Reserved.'
            }) + prcDate({prcdate_content: 'December 2021'}) + prcCode({prccode_content: '10US21EUC0004'})
        }
      })
    }
    }
  />
);
