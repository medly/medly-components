import { boolean, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Radio from '../Radio';
import RadioGroup from './RadioGroup';
import { Props } from './types';

const labelPosition: Array<Props['labelPosition']> = ['left', 'right', 'top', 'bottom'];
const size: Array<Props['size']> = ['XS', 'S', 'M', 'L', 'XL'];

storiesOf('Core', module).add('RadioGroup', () => (
    <RadioGroup
        label={text('Label', 'Gender')}
        name={text('Name', 'gender')}
        required={boolean('Required', false)}
        size={select('Size', size, 'S')}
        labelPosition={select('Label Position', labelPosition, 'top')}
    >
        <Radio label="Female" />
        <Radio label="Male" />
    </RadioGroup>
));
