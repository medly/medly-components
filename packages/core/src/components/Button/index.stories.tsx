import { select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { wInfo } from '../../utils/wInfo';
import Button from './Button';
import { Props } from './types';

const variant: Array<Props['variant']> = ['solid', 'flat', 'outlined'];
const color: Array<Props['color']> = ['primary', 'secondary'];

storiesOf('Components', module).add(
    'Button',
    () => (
        <Button variant={select('Variant', variant, 'solid')} color={select('Color', color, 'primary')}>
            Demo Button
        </Button>
    ),
    wInfo(`
    Button component comes with different variant and colors which can be managed by 'variant' & 'color' props respectively
    `)
);
