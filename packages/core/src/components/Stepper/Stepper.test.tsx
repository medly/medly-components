import { fireEvent, render } from '@test-utils';
import React from 'react';
import { Stepper } from './Stepper';
import { StepperProps } from './types';

const renderer = (props: StepperProps = {}) =>
    render(
        <Stepper {...props}>
            <Stepper.Step>Customer Information</Stepper.Step>
            <Stepper.Step>Payment information</Stepper.Step>
            <Stepper.Step>Booking is confirmed!</Stepper.Step>
        </Stepper>
    );

describe('Stepper component', () => {
    it('should render correctly with all the default props', () => {
        const { container } = renderer();
        expect(container).toMatchSnapshot();
    });

    it('should render correctly with all the props given', () => {
        const mockOnStepClick = jest.fn();
        const { container } = renderer({ activeStep: 0, size: 'S', onStepClick: mockOnStepClick });
        expect(container).toMatchSnapshot();
    });

    it('should change active step when click on any step', async () => {
        const mockOnStepClick = jest.fn();
        const { container, getByText } = renderer({ activeStep: 0, size: 'S', onStepClick: mockOnStepClick });
        fireEvent.click(getByText('Payment information'));
        expect(mockOnStepClick).toBeCalledWith(1);
        expect(container).toMatchSnapshot();
    });
});
