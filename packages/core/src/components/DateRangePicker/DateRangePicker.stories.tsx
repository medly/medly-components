import { boolean, number, select, text } from '@storybook/addon-knobs';
import React, { useState } from 'react';
import { Placement } from '../Popover/PopoverWrapper/types';
import { DateRangePicker } from './DateRangePicker';
import { Props } from './types';

const labelPosition: Props['labelPosition'][] = ['top', 'bottom', 'left', 'right'];
const placement: Placement[] = [
    'top-start',
    'top',
    'top-end',
    'right-start',
    'right',
    'right-end',
    'bottom-start',
    'bottom',
    'bottom-end',
    'left-end',
    'left',
    'left-start'
];

export const Basic = () => {
    const [dates, setDates] = useState({ startDate: null, endDate: null });

    return (
        <DateRangePicker
            value={dates}
            onChange={setDates}
            placement={select('Placement', placement, 'bottom')}
            fullWidth={boolean('Full Width', false)}
            minWidth={number('Min Width', 300)}
            disabled={boolean('Disabled', false)}
            label={text('Label', 'Period')}
            labelPosition={select('Label Position', labelPosition, 'left')}
            required={boolean('Required', false)}
            minSelectableDate={new Date(2020, 1, 1)}
            maxSelectableDate={new Date(2022, 2, 15)}
        />
    );
};
