import { boolean, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Input from './Input';
import { Props } from './types';

const labelPosition: Array<Props['labelPosition']> = ['top', 'bottom', 'left', 'right'];

storiesOf('Core', module).add('Input', () => (
    <Input
        type="email"
        fullWidth={boolean('Full Width', false)}
        label={text('Label', 'Email Address')}
        labelPosition={select('Label Position', labelPosition, 'top')}
        required={boolean('Required', false)}
        placeholder="Enter Email Address"
        description={text('Description', 'We will never share your email with anyone')}
    />
));
