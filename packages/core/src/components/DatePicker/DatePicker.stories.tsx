import { DatePickerTheme, defaultTheme } from '@medly-components/theme';
import type { FCC, FormEvent } from 'react';
import { useState } from 'react';
import Button from '../Button';
import { DatePicker } from './DatePicker';
import { DatePickerProps as Props } from './types';

export const variants: Required<Props>['variant'][] = ['outlined', 'filled', 'fusion'];
export const sizes: Required<Props>['size'][] = ['S', 'M'];
export const calendarIconPositions: Required<Props>['calendarIconPosition'][] = ['left', 'right'];
export const displayFormats: Required<Props>['displayFormat'][] = [
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

export const ThemeInterface: FCC<DatePickerTheme> = () => null;
ThemeInterface.defaultProps = {
    ...defaultTheme.datePicker
};

export const FormWithDatePicker: FCC = () => {
    const [date, setDate] = useState<Date | null>(null),
        handleSubmit = (e: FormEvent) => e.preventDefault();
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <DatePicker id="with-form" value={date} onChange={setDate} label="Select Date" required />
            </div>
            <Button type="submit">Submit</Button>
        </form>
    );
};
