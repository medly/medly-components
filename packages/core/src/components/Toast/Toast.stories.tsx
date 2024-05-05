import { defaultTheme, ToastTheme } from '@medly-components/theme';
import type { FCC } from 'react';
import styled from 'styled-components';
import { ToastProps } from './types';

export const variants: ToastProps['variant'][] = ['error', 'warning', 'success', 'info'];

export const ThemeInterface: FCC<ToastTheme> = () => null;
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
