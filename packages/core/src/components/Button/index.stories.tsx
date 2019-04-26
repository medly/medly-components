import { wInfo } from '@storybook-utils';
import { select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Button from './Button';

const buttonOptions = ['solid', 'flat', 'outlined'];
storiesOf('Components', module).add(
    'Button',
    () => (
        <Button
            {...{
                solid: 'solid' === select('Button Option', buttonOptions, 'solid'),
                flat: 'flat' === select('Button Option', buttonOptions, 'solid'),
                outlined: 'outlined' === select('Button Option', buttonOptions, 'solid')
            }}
        >
            Demo Button
        </Button>
    ),
    wInfo('Button Component with below props')
);
