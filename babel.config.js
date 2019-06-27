module.exports = function(api) {
    const presets = ['@babel/env', '@babel/react', '@babel/typescript'],
        plugins = [
            [
                'babel-plugin-styled-components',
                {
                    pure: true
                }
            ],
            '@babel/plugin-proposal-class-properties',
            '@babel/plugin-proposal-object-rest-spread',
            'inline-react-svg'
        ],
        ignore = ['node_modules'];

    if (api.env('production')) ignore.push('**/*.test.tsx', '**/*.test.ts', '**/*.stories.tsx', '__snapshots__');

    if (api.env('development') || api.env('storybook')) ignore.push('**/*.test.tsx', '**/*.test.ts', '__snapshots__');

    if (api.env('test')) plugins.push('@babel/plugin-transform-runtime');

    return { presets, plugins, ignore };
};
