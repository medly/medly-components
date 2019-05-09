import { select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Button from './Button';
import { Props } from './types';

const variant: Array<Props['variant']> = ['solid', 'flat', 'outlined'];
const color: Array<Props['color']> = ['primary', 'secondary'];

storiesOf('Core', module).add('Button', () => (
    <Button variant={select('Variant', variant, 'solid')} color={select('Color', color, 'primary')}>
        Demo Button
    </Button>
));
