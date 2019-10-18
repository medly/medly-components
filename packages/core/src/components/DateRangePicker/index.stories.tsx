import { boolean, number, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';
import { Placement } from '../Popover/types';
import { DateRangePicker } from './DateRangePicker';
import { Props } from './types';

const labelPosition: Array<Props['labelPosition']> = ['top', 'bottom', 'left', 'right'];
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

const DemoComponent = () => {
    const [date, setDate] = useState({ startDate: null, endDate: null });

    return (
        <DateRangePicker
            value={date}
            onChange={setDate}
            placement={select('Placement', placement, 'bottom')}
            minWidth={number('Min Width', 300)}
            disabled={boolean('Disabled', false)}
            label={text('Label', 'Period')}
            labelPosition={select('Label Position', labelPosition, 'left')}
            required={boolean('Required', false)}
        />
    );
};
storiesOf('Core', module).add('DateRangePicker', DemoComponent);
