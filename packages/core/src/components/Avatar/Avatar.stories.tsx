import { AvatarTheme, defaultTheme } from '@medly-components/theme';
import styled from 'styled-components';
import { AvatarProps } from './types';
import type { FC } from 'react';

export const sizes: Required<AvatarProps>['size'][] = ['S', 'M', 'L'];

export const ThemeInterface: FC<AvatarTheme> = () => null;
ThemeInterface.defaultProps = {
    ...defaultTheme.avatar
};

export const Div = styled.div`
    & > * {
        margin-right: 10px;
    }
`;
