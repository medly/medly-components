import { RadioTheme } from '@medly-components/theme';
import { boolean, select } from '@storybook/addon-knobs';
import React from 'react';
import { Radio } from './Radio';
import { Props } from './types';

const labelPosition: Array<Props['labelPosition']> = ['left', 'right', 'top', 'bottom'];
const size: Array<Props['size']> = ['XS', 'S', 'M', 'L', 'XL'];

export const ThemeInterface = (props: RadioTheme): any => null;

export const Basic = () => (
    <Radio
        value="female"
        name="gender"
        label="Female"
        disabled={boolean('Disabled', false)}
        size={select('Size', size, 'S')}
        labelPosition={select('Label Position', labelPosition, 'right')}
    />
);
