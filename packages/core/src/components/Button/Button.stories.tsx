import { ButtonTheme, defaultTheme } from '@medly-components/theme';
import { action } from '@storybook/addon-actions';
import { boolean, select } from '@storybook/addon-knobs';
import React from 'react';
import { Button } from './Button';
import { Props } from './types';

export default {
    title: 'Core/Button',
    component: Button,
    includeStories: []
};

const variant: Array<Props['variant']> = ['solid', 'flat', 'outlined'];
const color: Array<Props['color']> = ['primary', 'secondary'];

export const ThemeInterface = (props: ButtonTheme): any => null;
ThemeInterface.defaultProps = {
    ...defaultTheme.button
};

export const Basic = () => (
    <Button
        variant={select('Variant', variant, 'solid')}
        onClick={action('Button Clicked')}
        disabled={boolean('Disabled', false)}
        color={select('Color', color, 'primary')}
    >
        Demo Button
    </Button>
);
