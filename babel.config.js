module.exports = function(api) {
  api.cache(true);

  const presets = [
    "next/babel",
    "@zeit/next-typescript/babel",
    ["@babel/preset-typescript", { isTSX: true, allExtensions: true }],
    ["@babel/preset-env",
      {
        targets: {
          node: "current",
        }
      }
    ]
  ];

  const plugins = [["styled-components", { "ssr": true, "displayName": true, "preprocess": false }]];

  return {
    presets,
    plugins
  };
};