import { boolean, select, text } from '@storybook/addon-knobs';
import React, { useState } from 'react';
import { CheckboxGroup } from './CheckboxGroup';
import { Props } from './types';

const size: Props['size'][] = ['XS', 'S', 'M', 'L', 'XL'];

export const Basic = () => {
    const [values, setValues] = useState(['hyundai']);

    return (
        <CheckboxGroup
            values={values}
            onChange={setValues}
            options={[
                { value: 'honda', label: 'Honda' },
                { value: 'hyundai', label: 'Hyundai' },
                {
                    value: [
                        { value: 'jaguar', label: 'Jaguar' },
                        { value: 'landRover', label: 'Land Rover' }
                    ],
                    label: 'Tata'
                }
            ]}
            disabled={boolean('Disabled', false)}
            fullWidth={boolean('Full Width', false)}
            showSelectAll={boolean('Show Select All', false)}
            label={text('Label', 'Cars')}
            size={select('Size', size, 'S')}
            errorText={text('Error Text', '')}
            helperText={text('Helper Text', '')}
        />
    );
};

export const WithError = () => {
    const [values, setValues] = useState(['honda']);

    return (
        <CheckboxGroup
            values={values}
            onChange={setValues}
            options={[
                { value: 'honda', label: 'Honda' },
                { value: 'hyundai', label: 'Hyundai' },
                {
                    value: [
                        { value: 'jaguar', label: 'Jaguar' },
                        { value: 'mahindra', label: 'Mahindra' }
                    ],
                    label: 'Tata',
                    columns: 2
                }
            ]}
            disabled={boolean('Disabled', false)}
            fullWidth={boolean('Full Width', false)}
            showSelectAll={boolean('Show Select All', false)}
            label={text('Label', 'Cars')}
            size={select('Size', size, 'S')}
        />
    );
};
