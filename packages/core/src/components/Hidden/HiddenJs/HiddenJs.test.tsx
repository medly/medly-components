import { defaultTheme } from '@medly-components/theme';
import { useMediaQuery } from '@medly-components/utils';
import { render } from '@test-utils';
import React from 'react';
import { ThemeContext } from 'styled-components';
import { HiddenProps } from '../types';
import { HiddenJs } from './HiddenJs';

const useMediaQueryMock = jest.fn(),
    renderComponent = (props: HiddenProps) =>
        render(
            <ThemeContext.Provider value={defaultTheme}>
                <HiddenJs {...props}>Strong text</HiddenJs>
            </ThemeContext.Provider>
        );

jest.mock('@medly-components/utils', () => ({
    ...(jest.requireActual('@medly-components/utils') as any),
    useMediaQuery: jest.fn()
}));

describe('HiddenJs', () => {
    beforeAll(() => {
        // @ts-ignore
        useMediaQuery.mockImplementation(useMediaQueryMock);
    });
    afterEach(() => jest.clearAllMocks());

    test.each([
        ['at or above', { up: 'S' }, `@media (min-width: ${defaultTheme.breakpoints.S.min}px)`],
        ['at or down', { down: 'S' }, `@media (max-width: ${defaultTheme.breakpoints.S.max}px)`],
        [
            'between start and end of',
            { between: { start: 'S', end: 'L' } },
            `@media (min-width: ${defaultTheme.breakpoints.S.min}px) and (max-width: ${defaultTheme.breakpoints.L.max}px)`
        ],
        [
            'at specific',
            { only: 'S' },
            `@media (min-width: ${defaultTheme.breakpoints.S.min}px) and (max-width: ${defaultTheme.breakpoints.S.max}px)`
        ],
        [
            'at the specified list of',
            { multiple: ['M', 'XL'] },
            `@media (min-width: ${defaultTheme.breakpoints.M.min}px) and (max-width: ${defaultTheme.breakpoints.M.max}px),(min-width: ${defaultTheme.breakpoints.XL.min}px) and (max-width: ${defaultTheme.breakpoints.XL.max}px)`
        ]
    ])('should hide the children %s breakpoint', (propKey: any, props: any, query: string) => {
        useMediaQueryMock.mockReturnValue(true);
        const { queryByText } = renderComponent(props);
        expect(useMediaQueryMock).toHaveBeenCalledWith(query);
        expect(queryByText('Strong text')).toBeNull();
    });

    it('should show the children if media query does not match', () => {
        useMediaQueryMock.mockReturnValue(false);
        const { queryByText } = renderComponent({ up: 'S' });
        expect(useMediaQueryMock).toHaveBeenCalledWith(`@media (min-width: ${defaultTheme.breakpoints.S.min}px)`);
        expect(queryByText('Strong text')).toBeInTheDocument();
    });

    it('should hide the children if none of the prop is passed', () => {
        const { queryByText } = renderComponent({});
        expect(useMediaQueryMock).toHaveBeenCalledWith('');
        expect(queryByText('Strong text')).toBeNull();
    });
});
