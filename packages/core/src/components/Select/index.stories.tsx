import { boolean, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Select from './Select';
import { Props } from './types';

const labelPosition: Array<Props['labelPosition']> = ['top', 'bottom', 'start', 'end'];

storiesOf('Core', module).add('Select', () => (
    <Select
        fullWidth={boolean('Full Width', false)}
        required={boolean('Required', false)}
        label={text('Label', 'Role')}
        labelPosition={select('Label Position', labelPosition, 'top')}
        description={text('Description', 'We will show reports based on role')}
    >
        <option value="0">Admin</option>
        <option value="1">Pharmacist</option>
        <option value="2">Covered Entity</option>
    </Select>
));
