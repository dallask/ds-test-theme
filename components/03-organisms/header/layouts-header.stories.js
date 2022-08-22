import React from 'react';

import flexibleHeaderTwig from './flexible-header.twig';
import flexibleHeaderData from './flexible-header.yml';

import placeHolderTwig from '../../04-templates/placeholder/place-holder.twig';
import documentation from "./README.md";

import CrisisAlert
  from '../block/crisis-alert/crisis-alert.twig';
import CrisisAlertDate
  from '../block/crisis-alert/crisis-alert.yml';

import cta from '../../02-molecules/cta/cta.twig';
import ctaData from '../../02-molecules/cta/cta.yml';

import breadcrumb
  from '../../00-bootstrap/components/breadcrumb/breadcrumb.twig';
import breadcrumbData
  from '../../00-bootstrap/components/breadcrumb/breadcrumb.yml';
import '../../02-molecules/menus/main-menu/main-menu';

import mainMenu from '../../02-molecules/menus/main-menu/main-menu.twig';
import mainMenuData from '../../02-molecules/menus/main-menu/main-menu.yml';

import icon from '../../01-atoms/images/icons/_icon.twig';
import link from '../../01-atoms/links/link/link.twig';

import dropdown from '../../00-bootstrap/components/dropdown/dropdown.twig';
import ul from "../../01-atoms/lists/ul.twig";

import './flexible-header-sticky';
import './flexible-header-overflow';

/**
 * Storybook Definition.
 */
export default {
  title: 'Organisms/Layouts/Header',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: documentation
      }
    }
  }
};

const flexibleHeaderContent = "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas rhoncus libero et purus convallis, eget pulvinar magna accumsan. Donec hendrerit leo in odio accumsan semper. Phasellus vitae massa viverra, gravida sapien ac, iaculis dui. Mauris condimentum leo turpis, at laoreet mauris dictum sed. Praesent vitae mauris sit amet massa ullamcorper ultricies. Quisque velit nunc, convallis vel magna eu, efficitur sollicitudin justo. Nulla consectetur magna turpis, scelerisque pretium dui hendrerit in. Donec lacinia sollicitudin libero id volutpat. Curabitur sagittis odio a dolor placerat aliquam vitae nec enim. Quisque sed dolor at leo aliquet tempor ut quis neque. Nam ut suscipit orci.</p>" +
  "<p>Donec et sapien massa. Donec eu ullamcorper tellus. Cras eget diam mattis turpis aliquet interdum. Duis eget ultrices magna. Duis nec congue libero. Integer tempus aliquet convallis. Pellentesque sed dictum nibh. Aenean laoreet velit magna, hendrerit mattis nulla tempor quis.</p>" +
  "<p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam risus ante, varius id nisl sed, pulvinar gravida dolor. Fusce ultricies laoreet elementum. Nulla vehicula consequat nulla, sed viverra arcu viverra ac. Nulla ipsum sapien, porttitor sed massa et, posuere luctus nisl. Etiam et rutrum justo, eu viverra neque. Aliquam posuere faucibus finibus. Duis turpis lorem, cursus sit amet sapien nec, vehicula pellentesque ex. Aenean lorem odio, sodales eget erat a, rutrum sollicitudin nisl. Integer nisl dolor, fringilla gravida eleifend nec, tincidunt ut turpis. Vivamus ac dignissim eros. Donec mattis lacus ut lacus cursus, blandit lobortis neque vestibulum. Vestibulum porttitor tellus vitae lectus facilisis, nec efficitur mauris facilisis. Morbi sodales et ipsum ac imperdiet. Aenean vehicula mi nec mi malesuada, quis faucibus tellus dignissim.</p>" +
  "<p>Aliquam hendrerit eros ante, at pharetra tellus sagittis at. Phasellus et porta quam. Phasellus ultrices odio nec turpis mollis placerat. Morbi mollis mattis dui, a interdum urna accumsan ut. Quisque pharetra ipsum quis neque tincidunt maximus. Fusce aliquam, quam cursus ullamcorper facilisis, ex augue maximus tellus, et malesuada ligula ante sit amet augue. Morbi ut pretium sapien. Pellentesque aliquet felis sit amet mauris varius, sed fringilla dui interdum. Nam tincidunt ante et arcu interdum, vel luctus diam ornare. Aliquam erat volutpat. Fusce eleifend quis mi nec molestie. Quisque condimentum tortor et nisl laoreet, vel pellentesque eros efficitur. Duis orci diam, commodo sed urna non, imperdiet vestibulum ex. Quisque mattis nisi eu scelerisque condimentum.</p>" +
  "<p>Proin vehicula lorem lacus, in volutpat magna auctor a. Sed interdum enim magna, eu euismod nisi lacinia ut. Etiam faucibus non urna in varius. Mauris nec augue sapien. In hac habitasse platea dictumst. Suspendisse quis mauris arcu. Donec commodo imperdiet velit id efficitur. Vivamus laoreet pulvinar hendrerit. Vivamus vulputate at nisl sit amet fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>" +
  "<p>Vestibulum scelerisque neque sit amet magna blandit vulputate. Vivamus sed mi id turpis dapibus pulvinar sit amet ac sem. Morbi id volutpat nibh, vitae posuere lorem. Duis commodo, metus quis fringilla interdum, sapien augue rutrum dolor, quis hendrerit lorem dolor id tellus. Cras sit amet leo non tortor rutrum sagittis sit amet nec justo. Ut vel egestas lorem. Ut non mattis risus.</p>" +
  "<p>Ut non lacinia ipsum. Proin euismod justo vitae justo condimentum congue. Vivamus fringilla neque nec mi posuere, nec auctor quam dictum. Praesent pharetra in libero vitae finibus. Praesent nec ex consequat, egestas urna vitae, feugiat erat. Proin eget mollis magna. Praesent hendrerit congue lorem et semper. Integer ut gravida sapien. In dui augue, mattis vestibulum purus eget, convallis facilisis augue. Fusce leo odio, tincidunt in nunc eu, interdum blandit nunc. In non congue mauris. Morbi aliquet quam risus, non tincidunt turpis efficitur id. Curabitur tellus augue, tincidunt et est in, scelerisque pulvinar justo. Cras aliquet scelerisque turpis, eu fringilla elit lobortis nec. Vivamus urna mauris, blandit quis varius quis, maximus non erat.</p>" +
  "<p>Cras turpis purus, faucibus quis gravida semper, gravida sed metus. Sed malesuada augue eget purus semper convallis. In facilisis ligula ac consectetur faucibus. Proin facilisis pharetra massa, quis ullamcorper turpis. Nunc mollis ipsum nec velit blandit, id auctor nisl elementum. Duis consequat mauris magna, eget placerat dolor semper in. Mauris porta velit ut congue lacinia. Integer ex ligula, tristique a tellus a, mollis gravida eros. Etiam neque purus, pellentesque et nibh eu, semper condimentum nisl. Nam lacinia mi eget mi consectetur, in vestibulum sem cursus. Sed dolor dolor, vehicula sed nulla in, pretium ultrices orci. Ut at enim eu neque accumsan auctor. Vestibulum consectetur et elit ut efficitur.</p>" +
  "<p>Nam aliquam tellus vel sapien vehicula, ac vulputate dolor fringilla. Nullam at gravida lacus. Mauris consequat dapibus nisl, eleifend gravida lectus fringilla sed. In a laoreet nulla. Quisque at commodo nunc, eu mattis ex. Vivamus maximus, odio nec euismod semper, metus nulla rutrum quam, non laoreet libero tellus quis arcu. Integer varius vehicula nisl vitae vestibulum. Morbi mi enim, elementum ut nulla consectetur, feugiat pretium dolor. Donec lorem arcu, congue vel sapien quis, mattis mollis ante.</p>" +
  "<p>Aenean ullamcorper mauris ipsum, sit amet accumsan justo egestas ac. Etiam porttitor, velit id condimentum feugiat, nulla dolor efficitur leo, sagittis pellentesque felis metus sed urna. Donec vel maximus nisi, nec scelerisque sapien. Aliquam a facilisis nulla. Phasellus vehicula, est in molestie hendrerit, diam lacus cursus libero, ut rutrum sapien diam eu mi. Suspendisse facilisis nisi et diam vulputate, a venenatis nibh vehicula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed condimentum lorem. Vestibulum eros magna, fermentum quis purus quis, volutpat rutrum felis.</p>";


export const flexibleHeader = (args) => (
  <div
    dangerouslySetInnerHTML={{
      __html: flexibleHeaderTwig(args) + flexibleHeaderContent
    }}
  />
);

const variants = [
  {
    header_top: CrisisAlert(CrisisAlertDate),
    header_middle_full: cta(ctaData),
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
    header_bottom: '<nav role="navigation">' + mainMenu(mainMenuData) + '</nav>'
      + breadcrumb({
        content: breadcrumbData.content,
        classes: breadcrumbData.classes,
        divider: breadcrumbData.divider
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
          },
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
    }
  },
  {
    header_top: placeHolderTwig({place_holder: 'Header Top'}),
    header_middle_full: placeHolderTwig({place_holder: 'Header Middle (FULL)'}),
    header_middle_left: placeHolderTwig({place_holder: 'Header Middle (Col-3)'}),
    header_middle_right: placeHolderTwig({place_holder: 'Header Middle (Col-9)'}),
    header_bottom: placeHolderTwig({place_holder: 'Header Bottom'}),
    header_mobile: placeHolderTwig({place_holder: 'Mobile Header'})
  },
  {
    header_middle_left: placeHolderTwig({place_holder: 'Header Middle (Col-3)'}),
    header_middle_right: placeHolderTwig({place_holder: 'Header Middle (Col-9)'})
  },
  {
    header_middle_full: placeHolderTwig({place_holder: 'Header Middle (FULL)'}),
    header_middle_left: placeHolderTwig({place_holder: 'Header Middle (Col-3)'}),
    header_middle_right: placeHolderTwig({place_holder: 'Header Middle (Col-9)'}),
    header_mobile: placeHolderTwig({place_holder: 'Mobile Header'})
  }
];

flexibleHeader.args = {
  header_with_container: 0,
  page: 0,
  menu_behavior: 'Normal',
  menu_overflow: 1,
  flexible_header__background_color: 'bg-light',
  flexible_header__mobile_background_color: 'bg-dark'
};

flexibleHeader.argTypes = {
  header_with_container: {
    name: 'With Container',
    control: {
      type: 'boolean'
    }
  },
  menu_behavior: {
    name: 'Top menu behavior',
    options: [
      'Normal',
      'Persistent',
      'Sticky'
    ],
    control: {
      type: 'select',
      labels: {
        'Normal': 'Normal, scrolls out of view until a user scrolls back to top',
        'Persistent': 'Persistent, stays in view as user scrolls',
        'Sticky': 'Sticky, scrolls out of view on scroll down, back in view on scroll up'
      }
    },
  },
  menu_overflow: {
    name: 'Top menu overflow',
    control: {
      type: 'boolean'
    }
  },
  flexible_header__background_color: {
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
  flexible_header__mobile_background_color: {
    name: 'Mobile Background Color',
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
        0: 'All Included with Data',
        1: 'All Included with Place Holder Data',
        2: 'Only Middle Included with Place Holder Data',
        3: 'Without Header Top and Bottom with Place Holder Data'
      }
    }
  }
};

