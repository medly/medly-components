import { DateRangePickerTheme, defaultTheme } from '@medly-components/theme';
import type { FCC, FormEvent } from 'react';
import { useState } from 'react';
import Button from '../Button';
import { Placement } from '../Popover/types';
import { DateRangePicker } from './DateRangePicker';
import { DateRangeProps, DateRangeSelectionEnum, DateRangeType } from './types';

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

export const CustomDateRangeOptions = [
    { label: 'Current Week', value: DateRangeSelectionEnum.WEEK },
    { label: 'Current Month', value: DateRangeSelectionEnum.MONTH },
    { label: 'Current Quarter', value: DateRangeSelectionEnum.QUARTER },
    { label: 'Current Year', value: DateRangeSelectionEnum.YEAR },
    { label: 'Custom', value: DateRangeSelectionEnum.CUSTOM }
];

export const ThemeInterface: FCC<DateRangePickerTheme> = () => null;
ThemeInterface.defaultProps = {
    ...defaultTheme.dateRangePicker
};

export const FormWithDateRangePicker: FCC = () => {
    const [dates, setDates] = useState<DateRangeType>({ startDate: null, endDate: null }),
        handleSubmit = (e: FormEvent) => e.preventDefault();
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <DateRangePicker value={dates} onChange={setDates} required />
            </div>
            <Button type="submit">Submit</Button>
        </form>
    );
};

export const DateRangePickerWithStateForDoc: FCC = () => {
    const [dates, setDates] = useState<DateRangeType>({ startDate: null, endDate: null });
    return <DateRangePicker value={dates} onChange={setDates} required />;
};
