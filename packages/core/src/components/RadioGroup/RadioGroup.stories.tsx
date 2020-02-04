import { boolean, select, text } from '@storybook/addon-knobs';
import React, { useState } from 'react';
import { RadioGroup } from './RadioGroup';
import { Props } from './types';

const labelPosition: Props['labelPosition'][] = ['left', 'right', 'top', 'bottom'];
const size: Props['size'][] = ['XS', 'S', 'M', 'L', 'XL'];

export const Basic = () => {
    const [value, setValue] = useState('female');
    return (
        <RadioGroup
            value={value}
            onChange={setValue}
            disabled={boolean('Disabled', false)}
            required={boolean('Required', false)}
            fullWidth={boolean('Full Width', false)}
            label={text('Label', 'Gender')}
            name={text('Name', 'gender')}
            size={select('Size', size, 'S')}
            labelPosition={select('Label Position', labelPosition, 'top')}
            options={[
                { value: 'female', label: 'Female' },
                { value: 'male', label: 'Male' }
            ]}
        />
    );
};
