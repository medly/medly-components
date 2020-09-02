import { boolean, select } from '@storybook/addon-knobs';
import React, { useState } from 'react';
import { Placement } from '../Popover/types';
import { DateRangePicker } from './DateRangePicker';

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
            size={select('Size', ['S', 'M'], 'S')}
            placement={select('Placement', placement, 'bottom-start')}
            variant={select('Variant', ['filled', 'outlined'], 'filled')}
            fullWidth={boolean('Full Width', false)}
            disabled={boolean('Disabled', false)}
            minSelectableDate={new Date(2020, 1, 1)}
            maxSelectableDate={new Date(2022, 2, 15)}
        />
    );
};
