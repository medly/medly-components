import { DocsContainer, DocsPage } from '@storybook/addon-docs/blocks';
import { withTests } from '@storybook/addon-jest';
import { withKnobs } from '@storybook/addon-knobs';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { addDecorator, addParameters } from '@storybook/react';
import React from 'react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import results from '../.jest-test-results.json';
import { CssBaseline } from '../packages/core/src';
import { defaultTheme } from '../packages/theme/src';

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
        <div style={{ padding: '10px 0', width: '95%', height: '100%', margin: 'auto' }}>
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
    viewport: {
        viewports: {
            desktop: {
                name: 'Desktop',
                styles: {
                    width: '1440px',
                    height: '100%'
                }
            },
            smallLaptop: {
                name: 'Small Laptop',
                styles: {
                    width: '1280px',
                    height: '100%'
                }
            },
            tabletLandscape: {
                name: 'Tablet Landscape',
                styles: {
                    width: '1024px',
                    height: '100%'
                }
            },
            tabletPortrait: {
                name: 'Tablet Portrait',
                styles: {
                    width: '768px',
                    height: '100%'
                }
            },
            ...INITIAL_VIEWPORTS
        }
    }
});

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
