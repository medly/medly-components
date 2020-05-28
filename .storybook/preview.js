import { DocsContainer, DocsPage } from '@storybook/addon-docs/blocks';
import { withTests } from '@storybook/addon-jest';
import { withKnobs } from '@storybook/addon-knobs';
import { addDecorator, addParameters } from '@storybook/react';
import React from 'react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { createGlobalStyle } from 'styled-components';
import results from '../.jest-test-results.json';
import { CssBaseline } from '../packages/core/src';
import { defaultTheme } from '../packages/theme/src';
import { ThemeProvider } from '../packages/utils/src';

const PreviewOverflow = createGlobalStyle`
    .sbdocs h5, .sbdocs h3, .sbdocs h4 {
        position: inherit;
    }
    
    .sbdocs-content .sbdocs-preview {
        overflow: visible;
        & > div {
            overflow: visible;
            & > div {
                overflow: visible;
            }
        }
    }
`;

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
                    <PreviewOverflow />
                    <DocsContainer {...props} />
                </>
            </ThemeProvider>
        ),
        page: DocsPage
    }
});
