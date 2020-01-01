import { defaultTheme, SelectTheme } from '@medly-components/theme';
import { boolean, color, select, text } from '@storybook/addon-knobs';
import React, { useState } from 'react';
import { LabelPositions } from '../Label/types';
import { MultiSelect } from './MultiSelect';

const labelPosition: LabelPositions[] = ['top', 'bottom', 'left', 'right'];

const options = [
    { value: 'all', label: 'All' },
    { value: 'medly pharmacy', label: 'Medly Pharmacy' },
    { value: 'kala pharmacy', label: 'Kala Pharmacy' },
    {
        label: 'Group',
        value: [
            { value: 'a pharmacy', label: 'a Pharmacy' },
            { value: 'b pharmacy', label: 'b Pharmacy' },
            { value: 'c pharmacy', label: 'c Pharmacy' },
            { value: 'd pharmacy', label: 'd Pharmacy' }
        ]
    }
];

export const ThemeInterface = (props: SelectTheme): any => null;
ThemeInterface.defaultProps = {
    ...defaultTheme.select
};

export const Basic = () => {
    const [values, setValues] = useState(['medly pharmacy', 'a pharmacy']);

    return (
        <MultiSelect
            options={options}
            values={values}
            onChange={setValues}
            disabled={boolean('Disabled', false)}
            showChips={boolean('Show Chips', true)}
            showCheckbox={boolean('Show Checkbox', true)}
            fullWidth={boolean('Full Width', true)}
            required={boolean('Required', false)}
            label={text('Label', 'Pharmacy')}
            placeholder="Select Pharmacy"
            description={text('Description', 'We will show reports based on Pharmacy')}
            descriptionColor={color('Description Color', defaultTheme.input.descriptionColor)}
            labelPosition={select('Label Position', labelPosition, 'left')}
        />
    );
};
