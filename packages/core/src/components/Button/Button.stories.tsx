import { ButtonTheme } from '@medly-components/theme';
import { boolean, select } from '@storybook/addon-knobs';
import React from 'react';
import { Button } from './Button';
import { Props } from './types';

const variant: Array<Props['variant']> = ['solid', 'flat', 'outlined'];
const color: Array<Props['color']> = ['primary', 'secondary'];

export const ThemeInterface = (props: ButtonTheme): any => null;

// tslint:disable-next-line: no-console
const handleClick = () => console.log('Button Clicked');

export const Basic = () => (
    <Button
        variant={select('Variant', variant, 'solid')}
        onClick={handleClick}
        disabled={boolean('Disabled', false)}
        color={select('Color', color, 'primary')}
    >
        Demo Button
    </Button>
);
