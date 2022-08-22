import home from './wild5.twig';

export default {
  title: 'Pages/Landing Pages',
  parameters: {
    layout: 'fullscreen'
  }
};

export const homePageDs1Wild5 = () => (
  <div
    dangerouslySetInnerHTML={{
      __html: home()}}/>);
