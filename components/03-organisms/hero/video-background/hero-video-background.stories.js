import heroVideoBackgroundTwig from './hero-video-background.twig';
import documentation from './README.md';

/**
 * Storybook Definition.
 */
export default {
  title: 'Organisms/Paragraphs/Hero',
  argTypes: {
    hero_sizing_modifier: {
      options: [
        'full-width-height',
        'full-width-100',
        'full-width-300',
        'full-width-500'],
      control: { type: 'radio' },
      name: 'Hero Sizing Modifier',
    },
    hero_placement_modifier: {
      options: ['center', 'center-horizontaly', 'center-vertically'],
      control: { type: 'radio' },
      name: 'Hero Placement Modifier',
    },
    hero_padding_modifier: {
      options: [
        'all-8px', 'all-16px', 'all-32px', 'all-64px',
        'h-8px', 'h-16px', 'h-32px', 'h-64px',
        'v-8px', 'v-16px', 'v-32px', 'v-64px',
      ],
      control: { type: 'select' },
      name: 'Hero Padding Modifier',
    },
  },
  parameters: {
    docs: {
      description: {
        component: documentation,
      },
      source: {
        code: `
{% extends "@organisms/hero/video-background/hero-video-background.twig" %}

{% set hero_video_source = file_url(paragraph.field_video.entity.field_media_video_file.entity.fileuri) %}
{% set hero_video_poster = file_url(paragraph.field_otsk_ds_image.entity.field_media_image.entity.fileuri) %}
{% set hero_sizing_modifier = 'full-width-300' %}
{% set hero_placement_modifier = 'center' %}
{% set hero_padding_modifier = 'all-16' %}

{% block content %}
  {{ content.field_otsk_ds_paragraphs }}
{% endblock %}
        `,
        language: 'twig',
      },
    },
  },
};

export const HeroVideoBackground = (args) => (
  <div
    dangerouslySetInnerHTML={{
      __html: heroVideoBackgroundTwig(args),
    }}
  />
);

HeroVideoBackground.args = {
  hero_sizing_modifier: 'full-width-height',
  hero_placement_modifier: 'center',
  hero_padding_modifier: 'all-8px',
};
