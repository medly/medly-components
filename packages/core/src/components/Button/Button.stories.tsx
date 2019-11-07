import { ButtonTheme } from '@medly-components/theme';
import { HTMLProps } from '@medly-components/utils';
import { action } from '@storybook/addon-actions';
import { boolean, select } from '@storybook/addon-knobs';
import React from 'react';
import { Button } from './Button';
import { Props } from './types';

const variant: Array<Props['variant']> = ['solid', 'flat', 'outlined'];
const color: Array<Props['color']> = ['primary', 'secondary'];

export const ThemeInterface = (props: ButtonTheme): any => null;

export const Basic = (props: Omit<Props, keyof HTMLProps<HTMLButtonElement>>) => (
    <Button
        variant={select('Variant', variant, 'solid')}
        onClick={action('Button Clicked')}
        disabled={boolean('Disabled', false)}
        color={select('Color', color, 'primary')}
    >
        Demo Button
    </Button>
);
