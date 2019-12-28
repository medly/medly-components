import { boolean, select, text } from '@storybook/addon-knobs';
import React, { useState } from 'react';
import { CheckboxGroup } from './CheckboxGroup';
import { Props } from './types';

const labelPosition: Array<Props['labelPosition']> = ['left', 'right', 'top', 'bottom'];
const size: Array<Props['size']> = ['XS', 'S', 'M', 'L', 'XL'];

export const Basic = () => {
    const [values, setValues] = useState(['grapes']);

    return (
        <CheckboxGroup
            values={values}
            onChange={setValues}
            options={[
                { value: 'apple', label: 'Apple' },
                { value: 'orange', label: 'Orange' },
                { value: 'grapes', label: 'Grapes' },
                {
                    value: [
                        { value: 'custardApple', label: 'Custard Apple' },
                        { value: 'papaya', label: 'Papaya' }
                    ],
                    label: 'Group'
                }
            ]}
            disabled={boolean('Disabled', false)}
            fullWidth={boolean('Full Width', false)}
            showSelectAll={boolean('Show Select All', false)}
            label={text('Label', 'Fruits')}
            size={select('Size', size, 'S')}
            labelPosition={select('Label Position', labelPosition, 'top')}
        />
    );
};
