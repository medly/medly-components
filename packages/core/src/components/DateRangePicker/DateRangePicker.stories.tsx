import { DateRangePickerTheme, defaultTheme } from '@medly-components/theme';
import React, { useState } from 'react';
import Button from '../Button';
import { Placement } from '../Popover/types';
import { DateRangePicker } from './DateRangePicker';
import { DateRangeProps, DateRangeType } from './types';

export const placement: Placement[] = [
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

export const displayFormats: DateRangeProps['displayFormat'][] = [
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

export const ThemeInterface: React.FC<DateRangePickerTheme> = () => null;
ThemeInterface.defaultProps = {
    ...defaultTheme.dateRangePicker
};

export const FormWithDateRangePicker: React.FC = () => {
    const [dates, setDates] = useState<DateRangeType>({ startDate: null, endDate: null }),
        handleSubmit = (e: React.FormEvent) => e.preventDefault();
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <DateRangePicker value={dates} onChange={setDates} required />
            </div>
            <Button type="submit">Submit</Button>
        </form>
    );
};

export const DateRangePickerWithStateForDoc: React.FC = () => {
    const [dates, setDates] = useState<DateRangeType>({ startDate: null, endDate: null });
    return <DateRangePicker value={dates} onChange={setDates} required />;
};
