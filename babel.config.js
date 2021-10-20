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
            '@babel/plugin-transform-runtime',
            [
                'babel-plugin-styled-components',
                {
                    pure: true,
                    minify: true,
                    fileName: false,
                    displayName: false,
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
            'polished'
        ],
        ignore = ['node_modules'];

    if (api.env('production'))
        ignore.push('**/*.test.tsx', '**/*.test.ts', '**/test-utils.tsx', '**/*.stories.mdx', '**/*.stories.tsx', '__snapshots__', 'docs');

    if (api.env('development') || api.env('storybook')) {
        ignore.push('**/*.test.tsx', '**/*.test.ts', '__snapshots__');
        plugins.push(['@babel/plugin-transform-modules-commonjs']);
    }

    return { presets, plugins, ignore };
};
