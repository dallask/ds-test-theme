This component allows to implement a text paragraph (One column, Two Columns - Image Left, Two Columns - Image Right).

### Paragraph Text Variables:

* **field_type**: The paragraph type. `paragraph-type-text, paragraph-type-image`
* **layout**: An array with layout information.
    * **layout**: The layout class. `item-layout-1-column, item-layout-2-columns`.
    * **image_position**: The image position, it only applies for the layout class
      item-layout-2-columns. `image-position-left, image-position-right`.
* **field_custom_class**: A custom class if needed.
* **field_image**: An absolute or relative image URL.
* **field_title**: A formatted text title.
* **field_text**: A formatted long text content.
* **field_link**: An HTML link (anchor tag).

### How to use it in a Drupal site:

**Template**: `templates/paragraphs/paragraph--otsk-ds-text.html.twig`
**Module**: `otsuka_ds_paragraph_behaviors`

1. Enable the theme `otsuka_design_system2022` or a sub-theme based on it.
2. Enable the custom module `Design System : Paragraph Behaviors`.
3. Enable the behavior `Paragraph layout` in the paragraph type `Text` (admin/structure/paragraphs_type/otsk_ds_text).
4. In the behavior form, a field `Layout` will appear with the following options: `Layout 1 Column`, `Layout 2 Columns`.
5. If option `Layout 1 Column` is selected, a field `Image position` will appear with the following options: `Left`
   , `Right`.

### CKeditor styles sets:

This feature allows to implement heading styles to your text from Drupal side.

### How to use it in a Drupal site:

1. Highlight the text that needs to be styled in the CKEditor field.
2. Click on  the `styles` drop-down button in the upper left corner.
3. Choose the type of style for the text.
