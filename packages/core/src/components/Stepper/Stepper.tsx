import React from 'react';
import Step from './Step/Step';
import { StepperStyled } from './Stepper.styled';
import { Props, StepperStaticProps } from './types';

const Stepper: React.SFC<Props> & StepperStaticProps = props => {
    const { size, activeStep, children } = props;
    return (
        <StepperStyled>
            {React.Children.map(children, (child, index) => {
                return React.cloneElement(child as any, {
                    size,
                    step: index + 1,
                    active: activeStep === index
                });
            })}
        </StepperStyled>
    );
};

Stepper.defaultProps = {
    activeStep: 0
};
Stepper.Step = Step;
Stepper.displayName = 'Stepper';

export default Stepper;
