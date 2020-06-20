import { AvatarTheme, defaultTheme } from '@medly-components/theme';
import { styled } from '@medly-components/utils';
import React from 'react';
import { Props } from './types';

export const sizes: Props['size'][] = ['S', 'M', 'L'];

export const ThemeInterface: React.FC<AvatarTheme> = () => null;
ThemeInterface.defaultProps = {
    ...defaultTheme.avatar
};

export const Div = styled.div`
    & > * {
        margin-right: 10px;
    }
`;
