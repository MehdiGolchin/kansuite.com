// next.config.js
const withTypescript = require('@zeit/next-typescript');
const withImages = require('next-images');

module.exports = withTypescript({
  webpack(config, options) {
    return config
  }
});

module.exports = withImages({
  webpack(config, options) {
    return config
  }
});