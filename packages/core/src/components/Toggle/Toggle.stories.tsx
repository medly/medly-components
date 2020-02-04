import { defaultTheme, ToggleTheme } from '@medly-components/theme';
import { boolean, select } from '@storybook/addon-knobs';
import React from 'react';
import { Toggle } from './Toggle';
import { Props } from './types';

const labelPosition: Array<Props['labelPosition']> = ['left', 'right', 'top', 'bottom'];
const size: Array<Props['size']> = ['XS', 'S', 'M', 'L', 'XL'];

export const ThemeInterface = (props: ToggleTheme): any => null;
ThemeInterface.defaultProps = {
    ...defaultTheme.checkbox
};

export const Basic = () => (
    <Toggle
        size={select('Size', size, 'S')}
        label="Orange"
        fullWidth={boolean('Full Width', false)}
        disabled={boolean('Disabled', false)}
        labelPosition={select('Label Position', labelPosition, 'right')}
    />
);
