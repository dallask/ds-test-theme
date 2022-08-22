This component allow you to wrap any content with video background.

### Available Blocks

* content: Allow you to embed any content into this wrapper.

### Available Modifiers

* Sizing
    * (default) full-width-height: Background will be 100vw & 100wh
    * full-width-(100, 300, 500): Background will be fully wide with 100px height
* Placement
    * center: Background will be fully wide with 100px height
    * center-horizontaly: Background will be fully wide with 100px height
    * center-vertically: Background will be fully wide with 100px height
* Padding
    * all-(8,16,32,64)px: (8,16,32,64)px padding from all sides
    * h-(8,16,32,64)px: (8,16,32,64)px padding from horizontal sides
    * v-(8,16,32,64)px: (8,16,32,64)px padding from vertical sides

### How to use it in a Drupal site:

**Template**: `templates/paragraphs/paragraph--otsk-ds-hero-video-bg-wrapper.html.twig`

1. Enable the theme `otsuka_design_system2022` or a sub-theme based on it.
2. Create a paragraph of the type `Hero Video Background Wrapper`.
