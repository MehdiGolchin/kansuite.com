// next.config.js
const withTypescript = require('@zeit/next-typescript');

module.exports = withTypescript({

  webpack(config, options) {
    // configuring image loader
    config.module.rules.push({
      test: /\.(png|svg|jpg|gif)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 8192
          }
        }
      ]
    });

    return config;
  }

});