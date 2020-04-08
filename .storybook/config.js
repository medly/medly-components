import { DocsContainer, DocsPage } from '@storybook/addon-docs/blocks';
import { withKnobs } from '@storybook/addon-knobs/react';
import { addDecorator, addParameters, configure } from '@storybook/react';
import React from 'react';
import { jsxDecorator } from 'storybook-addon-jsx';
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
