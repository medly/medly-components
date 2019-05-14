import { select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Checkbox from './Checkbox';
import { Props } from './types';

const labelPosition: Array<Props['labelPosition']> = ['start', 'end', 'top', 'bottom'];
const size: Array<Props['size']> = ['XS', 'S', 'M', 'L', 'XL'];

storiesOf('Core', module).add('Checkbox', () => (
    <Checkbox name="fruit" size={select('Size', size, 'M')} label="Orange" labelPosition={select('Label Position', labelPosition, 'end')} />
));
