module.exports = function (api) {
    const presets = [
            [
                '@babel/env',
                {
                    modules: api.env('production') ? false : 'auto'
                }
            ],
            '@babel/react',
            '@babel/typescript'
        ],
        plugins = [
            [
                'babel-plugin-styled-components',
                {
                    pure: true,
                    displayName: true,
                    minify: true,
                    transpileTemplateLiterals: true
                }
            ],
            'inline-react-svg',
            'polished'
        ],
        ignore = ['node_modules'];

    if (api.env('production'))
        ignore.push('**/*.test.tsx', '**/*.test.ts', '**/test-utils.tsx', '**/*.stories.tsx', '__snapshots__', '**/docs');

    if (api.env('development') || api.env('storybook')) ignore.push('**/*.test.tsx', '**/*.test.ts', '__snapshots__');

    if (api.env('test')) plugins.push('@babel/plugin-transform-runtime');

    return { presets, plugins, ignore };
};
