This layout build for footer. Allow to anyone creates wide-variety footers.

### Flexible Footer Variables:

* **footer_with_container**: Result of this boolean value, container will appear
  or not. `Default: False`
* **first_middle_first**: optional section
* **first_middle_second**: optional section
* **first_middle_third**: optional section
* **first_middle_fourth**: optional section
* **second_middle_first**: optional section
* **second_middle_last**: optional section
* **third_middle**: optional section
* **fourth_middle_first**: optional section
* **fourth_middle_last**: optional section
* **fourth_middle_first**: optional section
* **fourth_middle_last**: optional section
* **fifth_middle_first**: optional section
* **fifth_middle_second**: optional section
* **fifth_middle_third**: optional section
* **fifth_middle_fourth**: optional section

### How to use it in a Drupal site:
**Template**: `templates/layout/page.html.twig`
1. Enable the theme `otsuka_design_system2022` or a sub-theme based on it.
2. Place at least one block in the bock layout in one of the following regions: `Footer First Middle First`, `Footer First Middle Second`, `Footer First Middle Third`, `Footer First Middle Fourth`, `Footer Second Middle First`, `Footer Second Middle Last`, `Footer Second Middle`, `Footer Second Middle First`, `Footer Second Middle Last` (admin/structure/block).
