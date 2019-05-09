import { configure, addParameters, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { withPropsTable } from 'storybook-addon-react-docgen';

addDecorator(jsxDecorator);
addDecorator(withKnobs);
addDecorator(
    withPropsTable({
        excludedPropTypes: ['theme']
    })
);

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
