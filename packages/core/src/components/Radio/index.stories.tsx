import { boolean, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Radio from './Radio';
import { Props } from './types';

const labelPosition: Array<Props['labelPosition']> = ['start', 'end', 'top', 'bottom'];
const radioSize: Array<Props['radioSize']> = ['XS', 'S', 'M', 'L', 'XL'];

storiesOf('Core', module).add('Radio', () => (
    <>
        <Radio
            name="gender"
            label="Female"
            radioSize={select('Size', radioSize, 'M')}
            labelPosition={select('Label Position', labelPosition, 'end')}
        />
        <Radio
            name="gender"
            label="Male"
            radioSize={select('Size', radioSize, 'M')}
            labelPosition={select('Label Position', labelPosition, 'end')}
        />
    </>
));
