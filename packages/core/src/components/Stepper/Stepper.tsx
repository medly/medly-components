import { WithStyle } from '@medly-components/utils';
import type { FCC } from 'react';
import { Children, cloneElement, forwardRef, memo } from 'react';
import Step from './Step/Step';
import { StepperStyled } from './Stepper.styled';
import { StepperProps, StepperStaticProps } from './types';

const Component: FCC<StepperProps> = memo(
    forwardRef((props, ref) => {
        const { size, activeStep, children, onStepClick, ...restProps } = props;
        return (
            <StepperStyled ref={ref} {...restProps}>
                {Children.map(children, (child, index) => {
                    return cloneElement(child as any, {
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

Component.defaultProps = {
    activeStep: 0
};
Component.displayName = 'Stepper';
export const Stepper: FCC<StepperProps> & WithStyle & StepperStaticProps = Object.assign(Component, {
    Style: StepperStyled,
    Step
});
