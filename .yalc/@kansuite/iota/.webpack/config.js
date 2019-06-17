const path = require('path');
const merge = require('webpack-merge');

const config = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'index.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'awesome-typescript-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [
            '.js',
            '.jsx',
            '.ts',
            '.tsx'
        ],
        alias: {
            'styled-components': path.resolve('../node_modules/styled-components')
        }
    }
};

module.exports = env =>
    merge(config, require(`./${env}.config`));