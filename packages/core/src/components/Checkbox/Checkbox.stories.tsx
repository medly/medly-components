import { CheckboxTheme, defaultTheme } from '@medly-components/theme';
import { boolean, select } from '@storybook/addon-knobs';
import React from 'react';
import { Checkbox } from './Checkbox';
import { Props } from './types';

const labelPosition: Array<Props['labelPosition']> = ['left', 'right', 'top', 'bottom'];
const size: Array<Props['size']> = ['XS', 'S', 'M', 'L', 'XL'];

export const ThemeInterface = (props: CheckboxTheme): any => null;
ThemeInterface.defaultProps = {
    ...defaultTheme.checkbox
};

export const Basic = () => (
    <Checkbox
        name="fruit"
        size={select('Size', size, 'S')}
        label="Orange"
        fullWidth={boolean('Full Width', false)}
        disabled={boolean('Disabled', false)}
        labelPosition={select('Label Position', labelPosition, 'right')}
    />
);
