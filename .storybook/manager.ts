import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';

const theme = create({
    base: 'light',
    brandTitle: 'Medly-components',
    fontCode: 'monospace',
    fontBase: '"Open Sans", sans-serif'
});

addons.setConfig({
    panelPosition: 'bottom',
    theme,
    previewTabs: {
        'storybook/docs/panel': { index: -1 }
    }
});
