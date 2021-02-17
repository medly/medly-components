const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const packages = path.resolve(__dirname, '../', 'packages');
const docs = path.resolve(__dirname, '../', 'docs');
const pathToInlineSvg = path.resolve(__dirname, '../packages/icons/src/assets/');
const tsconfigPath = path.resolve(__dirname, '../tsconfig.json');

module.exports = {
    stories: [
        '../docs/Introduction.stories.mdx',
        '../docs/Typography/Typography.stories.mdx',
        '../docs/Colors/Colors.stories.mdx',
        '../packages/**/*.stories.(tsx|mdx)'
    ],
    addons: [
        '@storybook/addon-docs',
        '@storybook/addon-jest',
        '@storybook/addon-knobs',
        'storybook-addon-jsx',
        'storybook-addon-designs',
        '@storybook/addon-viewport',
        '@storybook/addon-actions'
    ],
    webpack: async config => {
        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            include: [packages, docs],
            loader: 'babel-loader',
            exclude: [/node_modules/, /\.test.tsx?$/, /__snapshots__/, /__tests__/, /dist/, /icons\/src\/assets/]
        });
        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            include: [packages, docs],
            exclude: [/node_modules/, /\.test.tsx?$/, /__snapshots__/, /__tests__/, /dist/, /icons\/src\/assets/, /icons\/src\/icons/],
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
        });
        config.module.rules.push({
            test: /\.tsx$/,
            include: [packages],
            exclude: [/node_modules/, /\.test.tsx?$/, /__snapshots__/, /__tests__/, /dist/, /icons/],
            loader: 'stylelint-custom-processor-loader'
        });

        const fileLoaderRule = config.module.rules.find(rule => rule.test.test('.svg'));
        if (fileLoaderRule) fileLoaderRule.exclude = pathToInlineSvg;

        config.module.rules.push({
            test: /\.svg$/,
            exclude: [/node_modules/, /\.test.tsx?$/, /__snapshots__/, /__tests__/, /dist/],
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
        config.resolve['plugins'] = [new TsconfigPathsPlugin()];

        return config;
    }
};
