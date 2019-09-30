import { boolean, number, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { LabelPositions } from '../Label/types';
import SingleSelect from './SingleSelect';

const labelPosition: LabelPositions[] = ['top', 'bottom', 'left', 'right'];

const options = [
    { value: 'all', label: 'All' },
    { value: 'medly pharmacy', label: 'Medly Pharmacy' },
    { value: 'kala pharmacy', label: 'Kala Pharmacy' }
];

const handleOnChange = (value: string) => {
    console.log('value ====>', value);
};

storiesOf('Core', module).add('SingleSelect', () => (
    <SingleSelect
        minWidth={number('Min Width', 300)}
        options={options}
        defaultValue="medly pharmacy"
        onChange={handleOnChange}
        disabled={boolean('Disabled', false)}
        fullWidth={boolean('Full Width', false)}
        required={boolean('Required', false)}
        label={text('Label', 'Pharmacy')}
        placeholder="Select Pharmacy"
        description={text('Description', 'We will show reports based on Pharmacy')}
        labelPosition={select('Label Position', labelPosition, 'left')}
    />
));
