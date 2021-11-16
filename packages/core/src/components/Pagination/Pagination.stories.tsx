import { defaultTheme, PaginationTheme } from '@medly-components/theme';
import { centerAligned } from '@medly-components/utils';
import styled from 'styled-components';
import type { FC } from 'react';

export const ThemeInterface: FC<PaginationTheme> = () => null;
ThemeInterface.defaultProps = {
    ...defaultTheme.pagination
};

export const DummyWrapper = styled('div')`
    width: 100%;
    height: 100%;
    ${centerAligned()};
`;
