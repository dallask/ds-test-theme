This component allows to implement a footer PCR.

### How to use it in a Drupal site:
**Template**: `templates/otsuka-prc-code-info.html.twig`
**Module**: `otsuka_prc_code`
1. Enable the theme `otsuka_design_system2022` or a sub-theme based on it.
2. Enable the custom module `PRC Code`.
3. Configure global PRC values `Global PRC Code` and `PRC Date` (/admin/config/content/prc-codes-and-copyright-texts) or overwrite them per node.
4. Place a block `Otsuka Prc Code Info` or `Otsuka Updated Prc Code Info` in the block layout (admin/structure/block).
