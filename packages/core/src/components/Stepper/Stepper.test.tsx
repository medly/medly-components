import { TestUtils } from '@medly-components/utils';
import 'jest-styled-components';
import React from 'react';
import Stepper from './Stepper';

describe('Stepper component', () => {
    it('should render correctly with all the default props', () => {
        const { container } = TestUtils.render(
            <Stepper>
                <Stepper.Step>Customer Information</Stepper.Step>
                <Stepper.Step>Payment information</Stepper.Step>
                <Stepper.Step>Booking is confirmed!</Stepper.Step>
            </Stepper>
        );
        expect(container).toMatchSnapshot();
    });

    it('should render correctly with all the props given', () => {
        const { container } = TestUtils.render(
            <Stepper activeStep={0} size="S">
                <Stepper.Step>Customer Information</Stepper.Step>
                <Stepper.Step>Payment information</Stepper.Step>
                <Stepper.Step>Booking is confirmed!</Stepper.Step>
            </Stepper>
        );
        expect(container).toMatchSnapshot();
    });
});
