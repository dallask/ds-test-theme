const path = require('path');
module.exports = {
  screenDir: path.join(__dirname, '../.creevey/images'),
  reportDir: path.join(__dirname, '../.creevey/report'),
  diffOptions: { threshold: 0.3 },
  delay: 5000,
  maxRetries: 2,
  // Viewports height was fixed to 5000 as a workaround to the following Creevey pending task:
  // First priority (v0.8) - Fix taking composite screenshots with hidden scrollbar
  // See https://github.com/wKich/creevey/blob/master/TODO.md
  browsers: {
    //Otsuka Mobile | 360px
    chrome_mobile: {
      browserName: 'chrome',
      //viewport: { width: 360, height: 720 },
      viewport: { width: 360, height: 5000 },
      limit: 3,
    },
    // Tablet was omitted to save Git space.
    // //Otsuka Tablet | 750px
    // chrome_tablet: {
    //   browserName: 'chrome',
    //   //viewport: { width: 750, height: 801 },
    //   viewport: { width: 750, height: 5000 },
    //   limit: 3,
    // },
    //Otsuka Desktop | 1440px
    chrome_desktop: {
      browserName: 'chrome',
      //viewport: { width: 1440, height: 900 },
      viewport: { width: 1440, height: 5000 },
      limit: 3,
    },
    // IE 11 disabled because the image seems to have been moved to the Microsoft Container Registry (MCR).
    // Error: (HTTP code 404) unexpected - pull access denied for microsoft/ie,
    // repository does not exist or may require 'docker login': denied: requested access to the resource is denied
    // //Otsuka Mobile | 360px
    // ie11_mobile: {
    //   browserName: 'internet explorer',
    //   dockerImage: 'microsoft/ie:11.0',
    //   viewport: { width: 360, height: 720 },
    //   limit: 3,
    // },
    // //Otsuka Tablet | 750px
    // ie11_tablet: {
    //   browserName: 'internet explorer',
    //   dockerImage: 'microsoft/ie:11.0',
    //   viewport: { width: 750, height: 801 },
    //   limit: 3,
    // },
    // //Otsuka Desktop | 1440px
    // ie11_desktop: {
    //   browserName: 'internet explorer',
    //   dockerImage: 'microsoft/ie:11.0',
    //   viewport: { width: 1440, height: 900 },
    //   limit: 3,
    // },
  },
};
