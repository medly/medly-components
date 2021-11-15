import { DatePickerTheme, defaultTheme } from '@medly-components/theme';
import { useState } from 'react';
import Button from '../Button';
import { DatePicker } from './DatePicker';
import { DatePickerProps as Props } from './types';
import type { FC, FormEvent } from 'react';

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

export const ThemeInterface: FC<DatePickerTheme> = () => null;
ThemeInterface.defaultProps = {
    ...defaultTheme.datePicker
};

export const FormWithDatePicker: FC = () => {
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
