import { defaultTheme, StepperTheme } from '@medly-components/theme';
import { select } from '@storybook/addon-knobs';
import React, { FC, useState } from 'react';
import { Stepper } from './Stepper';
import { StepperProps } from './types';

const size: StepperProps['size'][] = ['S', 'M', 'L'];

export const ThemeInterface: FC<StepperTheme> = () => null;
ThemeInterface.defaultProps = {
    ...defaultTheme.stepper
};

export const Basic = () => {
    const [activeStep, setActiveStep] = useState(0);
    return (
        <Stepper activeStep={activeStep} size={select('Size', size, 'S')} onStepClick={setActiveStep}>
            <Stepper.Step>Customer Information</Stepper.Step>
            <Stepper.Step>Payment information</Stepper.Step>
            <Stepper.Step>Booking is confirmed!</Stepper.Step>
        </Stepper>
    );
};
