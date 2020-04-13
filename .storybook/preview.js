import { DocsContainer, DocsPage } from '@storybook/addon-docs/blocks';
import { withTests } from '@storybook/addon-jest';
import { withKnobs } from '@storybook/addon-knobs';
import { addDecorator, addParameters } from '@storybook/react';
import React from 'react';
import { jsxDecorator } from 'storybook-addon-jsx';
import results from '../.jest-test-results.json';
import { CssBaseline } from '../packages/core/src';
import { defaultTheme } from '../packages/theme/src';
import { ThemeProvider } from '../packages/utils/src';

addDecorator(jsxDecorator);
addDecorator(withKnobs);
addDecorator(story => (
    <ThemeProvider theme={defaultTheme}>
        <div style={{ padding: '10px', width: '95%', height: '100%', margin: 'auto' }}>
            <CssBaseline />
            {story()}
        </div>
    </ThemeProvider>
));
addDecorator(
    withTests({
        results
    })
);

addParameters({
    theme: {
        brandTitle: 'Medly-Components'
    },
    docs: {
        container: props => (
            <ThemeProvider theme={defaultTheme}>
                <>
                    <CssBaseline />
                    <DocsContainer {...props} />
                </>
            </ThemeProvider>
        ),
        page: DocsPage
    }
});
