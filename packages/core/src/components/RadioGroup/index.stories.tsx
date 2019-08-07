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
        disabled={boolean('Disabled', false)}
        required={boolean('Required', false)}
        label={text('Label', 'Gender')}
        name={text('Name', 'gender')}
        size={select('Size', size, 'S')}
        labelPosition={select('Label Position', labelPosition, 'top')}
    >
        <Radio value="female" label="Female" />
        <Radio value="male" label="Male" />
    </RadioGroup>
));
