import { boolean, select, text } from '@storybook/addon-knobs';
import React, { useState } from 'react';
import { DatePicker } from './DatePicker';
import { Props } from './types';

const variants: Props['variant'][] = ['outlined', 'filled'],
    sizes: Props['size'][] = ['S', 'M'];

export const Basic = () => {
    const [date, setDate] = useState(null);
    const minDate = new Date();

    return (
        <DatePicker
            value={date}
            onChange={setDate}
            fullWidth={boolean('Full Width', false)}
            size={select('Size', sizes, 'M')}
            displayFormat={text('Display Format', 'MM/dd/yyyy') as Props['displayFormat']}
            disabled={boolean('Disabled', false)}
            placeholder={text('Placeholder', 'MM / DD / YYYY')}
            label={text('Label', 'Date of Birth')}
            variant={select('variant', variants, 'outlined')}
            required={boolean('Required', false)}
            minSelectableDate={new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate())}
            maxSelectableDate={new Date(2021, 11, 30)}
        />
    );
};
