// next.config.js
const webpack = require('webpack');
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

    // config.optimization = {
    //   splitChunks: {
    //     name: 'vendor',
    //     minChunks: Infinity,
    //   }
    // };

    return config;
  }

});