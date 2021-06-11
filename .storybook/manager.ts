import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';
// @ts-ignore
import Logo from './static/logo.svg';

const theme = create({
    base: 'light',
    brandTitle: 'Medly-components',
    brandUrl: 'https://medlycomponents.com',
    brandImage: Logo,
    fontCode: 'monospace',
    fontBase: '"Open Sans", sans-serif'
});

addons.setConfig({
    showNav: true,
    showPanel: true,
    panelPosition: 'bottom',
    theme,
    previewTabs: {
        'storybook/docs/panel': { index: -1 }
    }
});
