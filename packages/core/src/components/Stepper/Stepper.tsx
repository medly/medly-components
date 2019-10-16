import { WithStyle } from '@medly-components/utils';
import React from 'react';
import Step from './Step/Step';
import { StepperStyled } from './Stepper.styled';
import { Props, StepperStaticProps } from './types';

const Stepper: React.SFC<Props> & WithStyle & StepperStaticProps = props => {
    const { size, activeStep, children, onStepClick } = props;
    return (
        <StepperStyled>
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
};

Stepper.defaultProps = {
    activeStep: 0
};
Stepper.Step = Step;
Stepper.Style = StepperStyled;
Stepper.displayName = 'Stepper';

export default Stepper;
