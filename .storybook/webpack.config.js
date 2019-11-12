const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin');

const packages = path.resolve(__dirname, '../', 'packages');
const docs = path.resolve(__dirname, '../', 'docs');
const utils = path.resolve(__dirname, '../', '.storybook/utils');
const pathToInlineSvg = path.resolve(__dirname, '../packages/icons/src/assets/');
const tsconfigPath = path.resolve(__dirname, '../tsconfig.json');

module.exports = ({ config, mode }) => {
    config.module.rules.push({
        test: /\.(stories|story)\.mdx$/,
        include: [packages, docs],
        exclude: [/node_modules/, /\.test.tsx?$/, /__snapshots__/, /__tests__/, /__dist__/],
        use: [
            {
                loader: 'babel-loader'
            },
            {
                loader: '@mdx-js/loader',
                options: {
                    compilers: [createCompiler({})]
                }
            }
        ]
    });

    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        include: [packages, docs, utils],
        exclude: [/node_modules/, /\.test.tsx?$/, /__snapshots__/, /__tests__/, /__dist__/],
        use: [
            {
                loader: 'babel-loader'
            },
            {
                loader: 'react-docgen-typescript-loader',
                options: {
                    tsconfigPath,
                    shouldExtractLiteralValuesFromEnum: true,
                    propFilter(prop) {
                        if (prop.parent) {
                            return (
                                !prop.parent.fileName.includes('node_modules') &&
                                !prop.parent.fileName.includes('HTMLProps') &&
                                !prop.parent.fileName.includes('WithThemeProp')
                            );
                        }

                        return true;
                    }
                }
            },
            {
                loader: 'stylelint-custom-processor-loader'
            }
        ]
    });

    const fileLoaderRule = config.module.rules.find(rule => rule.test.test('.svg'));
    fileLoaderRule.exclude = pathToInlineSvg;

    config.module.rules.push({
        test: /\.svg$/,
        use: [
            {
                loader: '@svgr/webpack',
                options: {
                    icon: true
                }
            }
        ]
    });

    config.plugins.push(new ForkTsCheckerWebpackPlugin());

    config.resolve.extensions.push('.ts', '.tsx');
    config.resolve.plugins = [new TsconfigPathsPlugin()];

    return config;
};
