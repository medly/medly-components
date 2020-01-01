import { configure, addParameters, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { jsxDecorator } from 'storybook-addon-jsx';
import React from 'react';
import { CssBaseline } from '../packages/core/src';
import { ThemeProvider } from '../packages/utils/src';
import { defaultTheme } from '../packages/theme/src';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

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

addParameters({
    theme: {
        brandTitle: 'Medly-Components'
    },
    docs: {
        container: DocsContainer,
        page: DocsPage
    }
});

configure(
    [
        require.context('../docs', false, /Introduction\.stories\.mdx/),
        require.context('../docs', true, /\.stories\.mdx$/),
        require.context('../packages', false, /Introduction\.stories\.mdx/),
        require.context('../packages', true, /\.stories\.(tsx|mdx)$/)
    ],
    module
);
