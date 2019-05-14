import { configure, addParameters, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import React from 'react';
import { CssBaseline } from '../packages/core/src';
import { ThemeProvider } from '../packages/utils/src';
import { defaultTheme } from '../packages/theme/src';
import { withPropsTable } from 'storybook-addon-react-docgen';

addDecorator(jsxDecorator);
addDecorator(withKnobs);
addDecorator(
    withPropsTable({
        excludedPropTypes: ['theme']
    })
);
addDecorator(story => (
    <ThemeProvider theme={defaultTheme}>
        <div style={{ padding: '10px', width: '100%', height: '100%' }}>
            <CssBaseline />
            {story()}
        </div>
    </ThemeProvider>
));

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
