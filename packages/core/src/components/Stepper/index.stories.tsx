import { select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React, { useState } from 'react';
import { Stepper } from './Stepper';
import { Props } from './types';

const size: Array<Props['size']> = ['S', 'M', 'L', 'XL'];

const DemoComponent = () => {
    const [activeStep, setActiveStep] = useState(0);
    return (
        <Stepper activeStep={activeStep} size={select('Size', size, 'S')} onStepClick={setActiveStep}>
            <Stepper.Step>Customer Information</Stepper.Step>
            <Stepper.Step>Payment information</Stepper.Step>
            <Stepper.Step>Booking is confirmed!</Stepper.Step>
        </Stepper>
    );
};
storiesOf('Core', module).add('Stepper', DemoComponent, {
    props: {
        propTablesExclude: [Stepper.Step]
    }
});
