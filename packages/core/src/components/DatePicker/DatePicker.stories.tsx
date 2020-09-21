import { DatePickerTheme, defaultTheme } from '@medly-components/theme';
import React, { useState } from 'react';
import Button from '../Button';
import { DatePicker } from './DatePicker';
import { Props } from './types';

export const variants: Props['variant'][] = ['outlined', 'filled'];
export const sizes: Props['size'][] = ['S', 'M'];
export const displayFormats: Props['displayFormat'][] = [
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

export const ThemeInterface: React.FC<DatePickerTheme> = () => null;
ThemeInterface.defaultProps = {
    ...defaultTheme.datePicker
};

export const FormWithDatePicker: React.FC = () => {
    const [date, setDate] = useState(null),
        handleSubmit = (e: React.FormEvent) => e.preventDefault();
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <DatePicker id="with-form" value={date} onChange={setDate} label="Select Date" required />
            </div>
            <Button type="submit">Submit</Button>
        </form>
    );
};
