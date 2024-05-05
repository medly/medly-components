import { defaultTheme } from '@medly-components/theme';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import type { FCC, ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';
import { SWRConfig } from 'swr';
export const mockAxios = new MockAdapter(axios);

const WithTheme: FCC = props => (
    <ThemeProvider theme={defaultTheme}>
        <>{props.children}</>
    </ThemeProvider>
);

const WithSWR: FCC = props => (
    <SWRConfig value={{ provider: () => new Map() }}>
        <>{props.children}</>
    </SWRConfig>
);

const customRender = (ui: ReactElement<any>, options?: RenderOptions): RenderResult => render(ui, { wrapper: WithTheme, ...options });

const renderWithSWR = (ui: ReactElement<any>, options?: RenderOptions): RenderResult => render(ui, { wrapper: WithSWR, ...options });

// re-export everything
export * from '@testing-library/react';
// override render method
export { customRender as render, renderWithSWR };
