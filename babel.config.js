module.exports = function (api) {
    const overrides = [],
        ignore = ['node_modules'],
        plugins = [
            'polished',
            '@babel/plugin-transform-runtime',
            [
                'babel-plugin-styled-components',
                {
                    pure: true,
                    minify: true,
                    fileName: api.env('storybook'),
                    displayName: api.env('storybook'),
                    transpileTemplateLiterals: true
                }
            ],
            [
                'inline-react-svg',
                {
                    svgo: {
                        plugins: [
                            {
                                cleanupIDs: {
                                    minify: false
                                }
                            }
                        ]
                    }
                }
            ],
            [
                '@babel/plugin-transform-react-jsx',
                {
                    runtime: api.env('storybook') ? 'classic' : 'automatic'
                }
            ]
        ],
        presets = [
            [
                '@babel/env',
                {
                    modules: api.env('production') ? false : 'auto'
                }
            ],
            [
                '@babel/preset-react',
                {
                    runtime: api.env('storybook') ? 'classic' : 'automatic'
                }
            ],
            '@babel/typescript'
        ];

    if (api.env('development') || api.env('storybook')) {
        ignore.push('**/*.test.tsx', '**/*.test.ts', '__snapshots__');
        plugins.push(['@babel/plugin-transform-modules-commonjs']);
        overrides.push({
            plugins: [
                [
                    'babel-plugin-styled-components',
                    {
                        fileName: true,
                        displayName: true
                    }
                ]
            ]
        });
    }

    if (api.env('production')) {
        ignore.push('**/*.test.tsx', '**/*.test.ts', '**/test-utils.tsx', '**/*.stories.mdx', '**/*.stories.tsx', '__snapshots__', 'docs');
    }

    return { plugins, ignore, presets, overrides };
};
