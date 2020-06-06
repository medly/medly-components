import { defaultTheme, ToastTheme } from '@medly-components/theme';
import { action } from '@storybook/addon-actions';
import { select } from '@storybook/addon-knobs';
import React from 'react';
import { Toast } from './Toast';
import { Props } from './types';

const variant: Props['variant'][] = ['error', 'warning', 'success', 'info'];

export const ThemeInterface: React.SFC<ToastTheme> = () => null;
ThemeInterface.defaultProps = {
    ...defaultTheme.toast
};

export const Basic = () => (
    <Toast
        variant={select('Variant', variant, 'success')}
        onClose={action('Close icon cliked')}
        heading="Default Notification"
        message="If there is a long description that breaks to multiple lines, then the height of the component should increase by the line height of
    the added text."
    ></Toast>
);
