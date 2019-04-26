const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const packages = path.resolve(__dirname, '../', 'packages');
const utils = path.resolve(__dirname, '../', '.storybook/utils');

module.exports = ({ config, mode }) => {
    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        include: [packages, utils],
        exclude: [/node_modules/, /\.test.tsx?$/, /__snapshots__/, /__tests__/, /__dist__/],
        use: ['babel-loader', 'stylelint-custom-processor-loader', 'react-docgen-typescript-loader']
    });
    config.plugins.push(new ForkTsCheckerWebpackPlugin());

    config.resolve.extensions.push('.ts', '.tsx');
    config.resolve.plugins = [new TsconfigPathsPlugin()];

    return config;
};
