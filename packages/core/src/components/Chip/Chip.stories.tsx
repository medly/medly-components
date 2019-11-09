import { ChipTheme, defaultTheme } from '@medly-components/theme';
import { action } from '@storybook/addon-actions';
import { boolean, color, select, text } from '@storybook/addon-knobs';
import React from 'react';
import { Chip } from './Chip';
import { Props } from './types';

const variant: Array<Props['variant']> = ['solid', 'flat', 'outlined'];

export const ThemeInterface = (props: ChipTheme): any => null;

export const Basic = () => (
    <Chip
        label={text('Label', 'Demo')}
        variant={select('Variant', variant, 'solid')}
        onClick={action('Chip Clicked')}
        onDelete={action('Delete Clicked')}
        disabled={boolean('Disabled', false)}
        color={color('Color', defaultTheme.chip.defaultColor)}
    />
);
