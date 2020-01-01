import { defaultTheme, FontSizes, FontWeights, TextTheme } from '@medly-components/theme';
import { boolean, color, select } from '@storybook/addon-knobs';
import React from 'react';
import { Text } from './Text';

const sizeOptions: FontSizes[] = ['S1', 'M1', 'M2', 'M3', 'L1', 'L2', 'L3', 'L4'];
const weightOptions: FontWeights[] = ['Light', 'Regular', 'Medium', 'Strong'];

export const ThemeInterface = (props: TextTheme): any => null;
ThemeInterface.defaultProps = {
    ...defaultTheme.text
};

export const Basic = () => (
    <Text
        fullWidth={boolean('Full Width', false)}
        uppercase={boolean('Upper Case', false)}
        lineThrough={boolean('Line through', false)}
        textColor={color('Color', '#012040')}
        textSize={select('Text Size', sizeOptions, 'L1')}
        textWeight={select('Text Weight', weightOptions, 'Regular')}
    >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    </Text>
);
