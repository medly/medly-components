import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Step from './Step/Step';
import { StepperStyled } from './Stepper.styled';
import { StepperProps, StepperStaticProps } from './types';

export const Stepper: FC<StepperProps> & WithStyle & StepperStaticProps = React.memo(
    React.forwardRef((props, ref) => {
        const { size, activeStep, children, onStepClick, ...restProps } = props;
        return (
            <StepperStyled ref={ref} {...restProps}>
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child as any, {
                        size,
                        key: index + 1,
                        step: index + 1,
                        active: activeStep === index,
                        onClick: onStepClick ? () => onStepClick(index) : undefined
                    });
                })}
            </StepperStyled>
        );
    })
);

Stepper.defaultProps = {
    activeStep: 0
};
Stepper.Step = Step;
Stepper.Style = StepperStyled;
Stepper.displayName = 'Stepper';
