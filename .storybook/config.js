import { configure, addParameters, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

addDecorator(withKnobs);
addDecorator(withInfo);
addParameters({
    options: {
        name: 'Medly-Components',
        addonPanelInRight: true
    }
});

const req = require.context('../packages', true, /\.stories\.tsx$/);
function loadStories() {
    req.keys().forEach(req);
}

configure(loadStories, module);
