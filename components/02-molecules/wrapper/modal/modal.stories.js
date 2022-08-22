import React from 'react';

import modal from './modal.twig';
import modalTrigger from './modal-trigger.twig';

import modalDataDefault from './modal-data--default.yml';
import modalDataSmall from './modal-data--small.yml';
import modalDataBig from './modal-data--big.yml';
import modalDataVideo from './modal-data--video.yml';
import modalDataCentered from './modal-data--centered.yml';
import modalDataContent from './modal-data--content.yml';
import modalDataImageTrigger from './modal-data--image-trigger.yml';
import modalDataImageViewer from './modal-data--image-viewer.yml';
import modalDataCloseOutside from './modal-data--close-outside.yml';
import modalDataExternal from './modal-data--external.yml';
import modalTwigDs1 from './modal-ds1.twig';
import modalDataDs1 from './modal-ds1.yml';

import './modal';

// This TWIG templates should be use only as examples.
// Don't try to include them in to the real project.
import mockedExternal from './mocked/mocked--external.twig';
import mockedCloseOutside from './mocked/mocked--close-outside.twig';

// Don't import this JS in to the real project.
import './mocked/mocked--close-outside';
import documentation from './README.md';

/**
 * Storybook Definition.
 */
export default {
  title: 'Molecules/Wrappers/Modal',
  parameters: {
    docs: {
      description: {
        component: documentation
      }
    }
  }
};

export const ModalDefault = () => (
  <div dangerouslySetInnerHTML={{
    __html: modal(modalDataDefault) + modalTrigger(modalDataDefault),
  }}/>
);

export const ModalSmall = () => (
  <div dangerouslySetInnerHTML={{
    __html: modal(modalDataSmall) + modalTrigger(modalDataSmall),
  }}/>
);

export const ModalBig = () => (
  <div dangerouslySetInnerHTML={{
    __html: modal(modalDataBig) + modalTrigger(modalDataBig),
  }}/>
);

export const ModalVideo = () => (
  <div dangerouslySetInnerHTML={{
    __html: modal(modalDataVideo) + modalTrigger(modalDataVideo),
  }}/>
);

export const ModalCentered = () => (
  <div dangerouslySetInnerHTML={{
    __html: modal(modalDataCentered) + modalTrigger(modalDataCentered),
  }}/>
);

export const ModalContent = () => (
  <div dangerouslySetInnerHTML={{
    __html: modal(modalDataContent) + modalTrigger(modalDataContent),
  }}/>
);

export const ModalImageTrigger = () => (
  <div dangerouslySetInnerHTML={{
    __html: modal(modalDataImageTrigger) + modalTrigger(modalDataImageTrigger),
  }}/>
);

export const ModalImageViewer = () => (
  <div dangerouslySetInnerHTML={{
    __html: modal(modalDataImageViewer) + modalTrigger(modalDataImageViewer),
  }}/>
);

// Examples:
export const ExampleCloseModalOutside = () => (
  <div dangerouslySetInnerHTML={{
    __html: mockedCloseOutside(modalDataCloseOutside),
  }}/>
);

export const ExampleModalExternal = () => (
  <div dangerouslySetInnerHTML={{
    __html: mockedExternal(modalDataExternal),
  }}/>
);

export const modalDs1 = () => (
  <div dangerouslySetInnerHTML={{__html: modalTwigDs1(modalDataDs1)}}/>
);
