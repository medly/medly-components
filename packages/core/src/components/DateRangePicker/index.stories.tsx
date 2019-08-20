import { boolean, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';
import DateRangePicker from './DateRangePicker';
import { Props } from './types';

const labelPosition: Array<Props['labelPosition']> = ['top', 'bottom', 'left', 'right'];

const DemoComponent = () => {
    const [date, setDate] = useState({ startDate: null, endDate: null });

    return (
        <DateRangePicker
            value={date}
            onChange={setDate}
            disabled={boolean('Disabled', false)}
            label={text('Label', 'Period')}
            labelPosition={select('Label Position', labelPosition, 'left')}
            required={boolean('Required', false)}
        />
    );
};
storiesOf('Core', module).add('DateRangePicker', () => <DemoComponent />);
