const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const packages = path.resolve(__dirname, '../', 'packages');
const docs = path.resolve(__dirname, '../', 'docs');
const pathToInlineSvg = path.resolve(__dirname, '../packages/icons/src/assets/');
const tsconfigPath = path.resolve(__dirname, '../tsconfig.json');

module.exports = ({ config, mode }) => {
    config.optimization = {
        ...config.optimization,
        minimize: true,
        minimizer: [
            new TerserPlugin({
                sourceMap: true,
                terserOptions: {
                    mangle: false
                }
            })
        ]
    };

    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        include: [packages, docs],
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
