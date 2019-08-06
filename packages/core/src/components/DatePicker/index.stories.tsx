import { boolean, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';
import DatePicker from './DatePicker';
import { Props } from './types';

const labelPosition: Array<Props['labelPosition']> = ['top', 'bottom', 'left', 'right'];

const DemoComponent = () => {
    const [date, setDate] = useState('');

    return (
        <DatePicker
            value={date}
            onChange={setDate}
            disabled={boolean('Disabled', false)}
            label={text('Label', 'Start Date')}
            labelPosition={select('Label Position', labelPosition, 'left')}
            required={boolean('Required', false)}
        />
    );
};
storiesOf('Core', module).add('DatePicker', () => <DemoComponent />);
