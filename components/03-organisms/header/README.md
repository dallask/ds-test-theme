This layout build for header. Allow to anyone creates wide-variety headers.

### Flexible Header Variables:

* **header_with_container**: Result of this boolean value, container will appear or not. `Default: False`
* **header_top**: Full width optional section. This will appear above of all
  other sections.
* **header_middle_full**: Full width optional section. This will appear after
  header_top.
* **header_middle_left**: 25% width optional section.
* **header_middle_right**: 75% width optional section.
* **header_bottom**: Full width optional section. This will appear under of all
  other sections.
* **header_mobile**: Full width optional section that appear only for mobile (when defined action performed)

### How to use it in a Drupal site:
**Template**: `templates/layout/page.html.twig`
1. Enable the theme `otsuka_design_system2022` or a sub-theme based on it.
2. Place at least one block in the bock layout in one of the following regions: `Header Top`, `Header Middle (FULL)`, `Header Middle (Col-3)`, `Header Middle (Col-9)`, `Header Bottom`, `Optional Mobile Header` (admin/structure/block).
3. Set the configuration `Top menu behavior` in the theme settings form: `Normal`, `Persistent`, `Sticky`.
3. Set the configuration `Top menu overflow` in the theme settings form: `Yes`, `No`.
