This component allows to place content in a page.

### How to use it in a Drupal site:
**Template**: `@templates/_default.twig` -> `templates/layout/page.html.twig`
1. Enable the theme `otsuka_design_system2022` or a sub-theme based on it.
2. Place at least one block in the bock layout in one of the following regions: `Content`, `Sidebar`, Header and Footer regions (admin/structure/block).

##  _default_content.twig
This component allows to implement nodes.

### How to use it in a Drupal site:
**Template**: `templates/content/node.html.twig`, `templates/content/node--otsk-ds-landing-page--full.html.twig`
1. Enable the theme `otsuka_design_system2022` or a sub-theme based on it.
2. Enable the view mode `Full content` in the content type `Landing Page` (admin/structure/types/manage/otsk_ds_landing_page/display).
