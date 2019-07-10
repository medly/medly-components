import { defaultTheme, FontSizes, FontWeights } from '@medly-components/theme';
import { boolean, color, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Label from './Label';

const sizeOptions: FontSizes[] = ['S1', 'M1', 'M2', 'M3', 'L1', 'L2', 'L3', 'L4'];
const weightOptions: FontWeights[] = ['Light', 'Normal', 'Strong'];
const defaultColor = defaultTheme.font.defaultColor;

storiesOf('Core', module).add('Label', () => (
    <Label
        showPointer={boolean('Show Pointer', false)}
        required={boolean('Show Required asterisk', false)}
        textColor={color('Color', defaultColor)}
        textSize={select('Text Size', sizeOptions, 'L1')}
        textWeight={select('Text Weight', weightOptions, 'Normal')}
    >
        Top 5
    </Label>
));
