import { select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Radio from './Radio';
import { Props } from './types';

const labelPosition: Array<Props['labelPosition']> = ['start', 'end', 'top', 'bottom'];
const size: Array<Props['size']> = ['XS', 'S', 'M', 'L', 'XL'];

storiesOf('Core', module).add('Radio', () => (
    <>
        <Radio
            name="gender"
            label="Female"
            size={select('Size', size, 'M')}
            labelPosition={select('Label Position', labelPosition, 'end')}
        />
        <Radio name="gender" label="Male" size={select('Size', size, 'M')} labelPosition={select('Label Position', labelPosition, 'end')} />
    </>
));
