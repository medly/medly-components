import { AvatarTheme, defaultTheme } from '@medly-components/theme';
import type { FCC } from 'react';
import styled from 'styled-components';
import { AvatarProps } from './types';

export const sizes: Required<AvatarProps>['size'][] = ['S', 'M', 'L'];

export const ThemeInterface: FCC<AvatarTheme> = () => null;
ThemeInterface.defaultProps = {
    ...defaultTheme.avatar
};

export const Div = styled.div`
    & > * {
        margin-right: 10px;
    }
`;
