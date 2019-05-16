import { boolean, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Stepper from './Stepper';
import { Props } from './types';

const size: Array<Props['size']> = ['S', 'M', 'L', 'XL'];
const activeStep: Array<Props['activeStep']> = [0, 1, 2];

storiesOf('Core', module).add('Stepper', () => (
    <Stepper activeStep={select('Active Step', activeStep, 0)} size={select('Size', size, 'S')}>
        <Stepper.Step>Customer Information</Stepper.Step>
        <Stepper.Step>Payment information</Stepper.Step>
        <Stepper.Step>Booking is confirmed!</Stepper.Step>
    </Stepper>
));
