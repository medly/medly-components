import { defaultTheme } from '@medly-components/theme';
import { render, RenderResult } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import React from 'react';
import { SWRConfig } from 'swr';
import { ThemeProvider } from './styled';

export const mockAxios = new MockAdapter(axios);

const WithTheme: React.FunctionComponent = props => (
    <ThemeProvider theme={defaultTheme}>
        <>{props.children}</>
    </ThemeProvider>
);

const WithSWR: React.FunctionComponent = props => (
    <SWRConfig value={{ dedupingInterval: 0 }}>
        <>{props.children}</>
    </SWRConfig>
);

const customRender = (ui: React.ReactElement<any>, options?: object): RenderResult => render(ui, { wrapper: WithTheme, ...options });

const renderWithSWR = (ui: React.ReactElement<any>, options?: object): RenderResult => render(ui, { wrapper: WithSWR, ...options });

// re-export everything
export * from '@testing-library/react';
// override render method
export { customRender as render, renderWithSWR };
