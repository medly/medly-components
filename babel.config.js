module.exports = function (api) {
    const ignore = [],
        overrides = [],
        plugins = ['polished'];

    if (api.env('production')) {
        ignore.push('**/*.test.tsx', '**/*.test.ts', '**/test-utils.tsx', '**/*.stories.mdx', '**/*.stories.tsx', '__snapshots__', 'docs');
        overrides.push({
            plugins: [['react-remove-properties', { properties: [] }]]
        });
    }

    if (api.env('development') || api.env('storybook')) {
        ignore.push('**/*.test.tsx', '**/*.test.ts', '__snapshots__');
        plugins.push(['@babel/plugin-transform-modules-commonjs']);
    }

    return { extends: '@medly/babel-config-react', plugins, ignore, overrides };
};
