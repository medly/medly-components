import { defaultTheme, ToastTheme } from '@medly-components/theme';
import { styled } from '@medly-components/utils';
import React from 'react';
import { ToastProps } from './types';

export const variants: ToastProps['variant'][] = ['error', 'warning', 'success', 'info'];

export const ThemeInterface: React.SFC<ToastTheme> = () => null;
ThemeInterface.defaultProps = {
    ...defaultTheme.toast
};

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    & > * {
        margin-bottom: 2rem;
    }
`;
