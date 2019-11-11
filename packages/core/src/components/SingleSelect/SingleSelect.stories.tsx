import { SelectTheme } from '@medly-components/theme';
import { action } from '@storybook/addon-actions';
import { boolean, number, select, text } from '@storybook/addon-knobs';
import React from 'react';
import { LabelPositions } from '../Label/types';
import { SingleSelect } from './SingleSelect';

const labelPosition: LabelPositions[] = ['top', 'bottom', 'left', 'right'];

const options = [
    { value: 'all', label: 'All' },
    { value: 'Dummy1 option', label: 'Dummy1 option' },
    { value: 'Dummy2 option', label: 'Dummy2 option' },
    { value: 'Dummy3 option', label: 'Dummy3 option' },
    { value: 'Dummy4 option', label: 'Dummy4 option' },
    { value: 'Dummy5 option', label: 'Dummy5 option' },
    { value: 'Dummy6 option', label: 'Dummy6 option' }
];

export const ThemeInterface = (props: SelectTheme): any => null;

export const Basic = () => (
    <SingleSelect
        minWidth={number('Min Width', 300)}
        options={options}
        defaultValue="medly pharmacy"
        onChange={action('Value Changed')}
        disabled={boolean('Disabled', false)}
        fullWidth={boolean('Full Width', false)}
        required={boolean('Required', false)}
        label={text('Label', 'Pharmacy')}
        placeholder="Select Pharmacy"
        description={text('Description', 'We will show reports based on Pharmacy')}
        labelPosition={select('Label Position', labelPosition, 'left')}
    />
);
