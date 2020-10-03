import { boolean, select } from '@storybook/addon-knobs';
import React, { useState } from 'react';
import DateRangePicker from '.';
import { Placement } from '../Popover/types';
import { DateRangeProps } from './types';

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

const displayFormats: DateRangeProps['displayFormat'][] = [
    'dd/MM/yyyy',
    'MM/dd/yyyy',
    'dd/yyyy/MM',
    'MM/yyyy/dd',
    'yyyy/dd/MM',
    'yyyy/MM/dd',
    'dd-MM-yyyy',
    'dd-yyyy-MM',
    'MM-dd-yyyy',
    'MM-yyyy-dd',
    'yyyy-dd-MM',
    'yyyy-MM-dd'
];

export const Basic = () => {
    const [dates, setDates] = useState({ startDate: null, endDate: null });

    return (
        <DateRangePicker
            displayFormat={select('Display Format', displayFormats, 'MM/dd/yyyy')}
            required={boolean('Required', false)}
            fromLabel="From"
            toLabel="To"
            id="date-range-picker"
            value={dates}
            onChange={setDates}
            size={select('Size', ['S', 'M'], 'M')}
            popoverPlacement={select('Placement', placement, 'bottom-start')}
            variant={select('Variant', ['filled', 'outlined'], 'filled')}
            fullWidth={boolean('Full Width', false)}
            disabled={boolean('Disabled', false)}
            minSelectableDate={new Date(2020, 1, 1)}
            maxSelectableDate={new Date(2022, 2, 15)}
        />
    );
};
