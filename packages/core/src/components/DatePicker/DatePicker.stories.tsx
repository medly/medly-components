import { boolean, select, text } from '@storybook/addon-knobs';
import React, { useState } from 'react';
import { placement } from '../Popover/Popover.stories';
import { DatePicker } from './DatePicker';
import { Props } from './types';

const labelPosition: Props['labelPosition'][] = ['top', 'bottom', 'left', 'right'];

const variants: Props['variant'][] = ['outlined', 'filled'];

export const Basic = () => {
    const [date, setDate] = useState(null);

    return (
        <DatePicker
            value={date}
            onChange={setDate}
            fullWidth={boolean('Full Width', false)}
            displayFormat={text('Display Format', 'MM/dd/yyyy') as Props['displayFormat']}
            disabled={boolean('Disabled', false)}
            placeholder={text('Placeholder', 'MM / DD / YYYY')}
            label={text('Label', 'Date of Birth')}
            variant={select('variant', variants, 'outlined')}
            labelPosition={select('Label Position', labelPosition, 'left')}
            popoverPlacement={select('Popover Placement', placement, 'bottom-start')}
            required={boolean('Required', false)}
            minSelectableDate={new Date(2020, 11, 1)}
            maxSelectableDate={new Date(2021, 11, 30)}
        />
    );
};
