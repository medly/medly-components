import { CheckboxTheme, defaultTheme } from '@medly-components/theme';
import { boolean, select } from '@storybook/addon-knobs';
import React from 'react';
import { Checkbox } from './Checkbox';
import { Props } from './types';

const labelPosition: Props['labelPosition'][] = ['left', 'right', 'top', 'bottom'];
const size: Props['size'][] = ['XS', 'S', 'M', 'L', 'XL'];

export const ThemeInterface: React.SFC<CheckboxTheme> = () => null;
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
        error={boolean('error', false)}
        labelPosition={select('Label Position', labelPosition, 'right')}
    />
);
