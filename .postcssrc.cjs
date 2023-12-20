const postcssCustomProperties = require('postcss-custom-properties');
const postcssGlobalData = require('@csstools/postcss-global-data');
const postcssCustomMedia = require('postcss-custom-media');

module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-nesting'),
    postcssCustomProperties({
      preserve: false,
    }),
    postcssGlobalData({
      files: ['./src/styles/media.css', './src/styles/variables.css'],
    }),
    postcssCustomMedia(),
  ],
};
