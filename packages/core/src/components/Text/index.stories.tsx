import { FontSizeTheme, FontWeightTheme } from '@medly-components/theme';
import { wInfo } from '@storybook-utils';
import { boolean, color, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Text from './Text';

const sizeOptions: Array<keyof FontSizeTheme> = ['S1', 'M1', 'M2', 'M3', 'L1', 'L2', 'L3', 'L4'];
const weightOptions: Array<keyof FontWeightTheme> = ['Light', 'Normal', 'Strong'];

storiesOf('Components', module).add(
    'Text',
    () => (
        <Text
            uppercase={boolean('Upper Case', false)}
            lineThrough={boolean('Line through', false)}
            textColor={color('Color', 'black')}
            textSize={select<keyof FontSizeTheme>('Text Size', sizeOptions, 'L1')}
            textWeight={select<keyof FontWeightTheme>('Text Weight', weightOptions, 'Normal')}
        >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat excepturi quos vitae quisquam hic molestias et cumque nostrum
            corrupti ad dolorem ab laborum iste veniam, animi optio ipsa quod error!
        </Text>
    ),
    wInfo('Text component with below mentioned props')
);
