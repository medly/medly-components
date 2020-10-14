import { defaultTheme, PaginationTheme } from '@medly-components/theme';
import { centerAligned, styled } from '@medly-components/utils';
import React from 'react';

export const ThemeInterface: React.FC<PaginationTheme> = () => null;
ThemeInterface.defaultProps = {
    ...defaultTheme.pagination
};

export const DummyWrapper = styled('div')`
    width: 100%;
    height: 100%;
    ${centerAligned()};
`;
