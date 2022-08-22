import landingPage from './svm-landing-page.twig';

import euCookieCompliancePopupInfoData from '../../../03-organisms/block/eu_cookie_compliance_popup_info/eu_cookie_compliance_popup_info.yml';
import headerBTwigData from '../../../03-organisms/site/site-header-b/site-header-b.yml';

import ul from '../../../01-atoms/lists/ul.twig';
import link from '../../../01-atoms/links/link/link.twig';
import responsiveImage from "../../../01-atoms/images/image/responsive-image.twig";
import textParagraph from "../../../01-atoms/text/text/01-paragraph.twig";
import mainMenu from '../../../02-molecules/menus/main-menu/main-menu.twig';
import menuData from './svm-landing-page-menu.yml';

import headerTopContent from './sections/header-top.twig';

import prcDate from "../../../01-atoms/footer-atoms/prc-date/prc-date.twig";
import prcCode from "../../../01-atoms/footer-atoms/prc-code/prc-code.twig";


/**
 * Storybook Definition.
 */
export default {
  title: 'Pages/Landing Pages',
  parameters: {
    layout: 'fullscreen',
  },
};

export const svmLandingPage = () => (
  <div
    dangerouslySetInnerHTML={{
      __html: landingPage({
        page_layout_modifier: 'contained',
        header_with_container: true,
        footer_with_container: true,
        footer__additional_class: 'bg-secondary',
        flexible_header__background_color: 'bg-secondary',
        flexible_header__mobile_background_color: 'bg-dark',
        page: {
          header_top: headerTopContent,
          header_middle_left: responsiveImage({
            output_image_tag: true,
            image_src: 'custom/svm/logo-light.png',
            image_alt: 'Society of valued minds',
            responsive_image_blockname: 'logo',
          }),
          header_middle_right: mainMenu(menuData),
          header_mobile: {
            body: ul({
              ul_items: menuData['menu_items'].map((item, index) => {
                return {
                  content: link({
                    link_url: item.url,
                    link_content: item.title,
                    link_modifiers: ['social-button']
                  }),
                };
              }),
            }),
          },
          image_the_world_is_better: responsiveImage({
            output_image_tag: true,
            image_src: 'custom/svm/the_world_is_better.png',
            image_alt: 'Society of valued minds',
            responsive_image_blockname: 'the-world-is-better',
          }),
          // Footer section content
          first_middle_first: responsiveImage({
            output_image_tag: true,
            image_src: 'custom/svm/logo-light.png',
            image_alt: 'Logo',
            responsive_image_blockname: 'logo'
          }) + textParagraph({
            paragraph_content: 'Society of Valued Minds is brought to you by Otsuka America Pharmaceutical, Inc.'
          }) + textParagraph({
            paragraph_content: 'Learn more about Otsuka and our mission of improving mental health worldwide at <a href="//www.otsuka-us.com" target="_blank">otsuka-us.com</a>'
          }),
          first_middle_second: ul({
              ul_items: [
                {
                  content: link({
                    link_url: '#',
                    link_content: 'Instagram'
                  })+ link({
                    link_url: '#',
                    link_content: 'Email'
                  })
                },
                {
                  content: link({
                    link_url: '#',
                    link_content: 'PRIVACY POLICY'
                  })
                },
                {
                  content: link({
                    link_url: '#',
                    link_content: 'TERMS AND CONDITIONS'
                  })
                }
              ]
            }) +
            textParagraph({
              paragraph_content: '© 2022 Otsuka America Pharmaceutical, Inc.<br>All Rights Reserved.'
            }) + prcDate({prcdate_content: 'April 2022'}) + prcCode({prccode_content: '01US22EUC0032'})
        },
      }),
    }}
  />
);
