import { defaultTheme, SelectTheme } from '@medly-components/theme';
import { boolean, color, number, select, text } from '@storybook/addon-knobs';
import React, { useState } from 'react';
import { LabelPositions } from '../Label/types';
import { SingleSelect } from './SingleSelect';

const labelPosition: LabelPositions[] = ['top', 'bottom', 'left', 'right'];

const options = [
    { value: 'all', label: 'All' },
    { value: 'Dummy1 option', label: 'Dummy1 option', disabled: true },
    { value: 'Dummy2 option', label: 'Dummy2 option' },
    { value: 'Dummy3 option', label: 'Dummy3 option' },
    { value: 'Dummy4 option', label: 'Dummy4 option' },
    { value: 'Dummy5 option', label: 'Dummy5 option' },
    { value: 'Dummy6 option', label: 'Dummy6 option' }
];

export const ThemeInterface = (props: SelectTheme): any => null;
ThemeInterface.defaultProps = {
    ...defaultTheme.select
};

export const Basic = () => {
    const [value, setValue] = useState('Dummy4 option');

    return (
        <SingleSelect
            minWidth={number('Min Width', 300)}
            options={options}
            value={value}
            onChange={setValue}
            disabled={boolean('Disabled', false)}
            fullWidth={boolean('Full Width', false)}
            required={boolean('Required', false)}
            label={text('Label', 'Pharmacy')}
            placeholder="Select Pharmacy"
            description={text('Description', 'We will show reports based on Pharmacy')}
            descriptionColor={color('Description Color', defaultTheme.input.descriptionColor)}
            labelPosition={select('Label Position', labelPosition, 'left')}
        />
    );
};
