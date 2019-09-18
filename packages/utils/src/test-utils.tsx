import { defaultTheme } from '@medly-components/theme';
import { render, RenderResult } from '@testing-library/react';
import React from 'react';
import { ThemeProvider } from './styled';

const AllTheProviders: React.FunctionComponent = props => (
    <ThemeProvider theme={defaultTheme}>
        <>{props.children}</>
    </ThemeProvider>
);

const customRender = (ui: React.ReactElement<any>, options?: object): RenderResult => render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
