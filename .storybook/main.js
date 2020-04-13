module.exports = {
    stories: [
        '../docs/Introduction.stories.mdx',
        '../docs/Typography/Typography.stories.mdx',
        '../docs/Colors/Colors.stories.mdx',
        '../packages/**/*.stories.(tsx|mdx)'
    ],
    addons: ['@storybook/addon-docs', '@storybook/addon-jest', '@storybook/addon-knobs', 'storybook-addon-jsx', '@storybook/addon-actions']
};
