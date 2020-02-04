import { defaultTheme, ToastTheme } from '@medly-components/theme';
import { action } from '@storybook/addon-actions';
import { select } from '@storybook/addon-knobs';
import React from 'react';
import { Toast } from './Toast';
import { Props } from './types';

const variant: Props['variant'][] = ['error', 'warning', 'success', 'info'];

export const ThemeInterface = (props: ToastTheme): any => null;
ThemeInterface.defaultProps = {
    ...defaultTheme.toast
};

export const Basic = () => (
    <Toast variant={select('Variant', variant, 'success')} onClose={action('Close icon cliked')}>
        Hello
    </Toast>
);
