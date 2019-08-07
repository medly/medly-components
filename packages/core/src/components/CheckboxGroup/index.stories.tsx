import { boolean, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Checkbox from '../Checkbox';
import CheckboxGroup from './CheckboxGroup';
import { Props } from './types';

const labelPosition: Array<Props['labelPosition']> = ['left', 'right', 'top', 'bottom'];
const size: Array<Props['size']> = ['XS', 'S', 'M', 'L', 'XL'];

storiesOf('Core', module).add('CheckboxGroup', () => (
    <CheckboxGroup
        disabled={boolean('Disabled', false)}
        required={boolean('Required', false)}
        label={text('Label', 'Fruits')}
        name={text('Name', 'fruits')}
        size={select('Size', size, 'S')}
        labelPosition={select('Label Position', labelPosition, 'top')}
    >
        <Checkbox label="Apple" />
        <Checkbox label="Orange" />
    </CheckboxGroup>
));
