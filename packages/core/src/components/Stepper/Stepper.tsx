import { WithStyle } from '@medly-components/utils';
import { memo, forwardRef, Children, cloneElement } from 'react';
import Step from './Step/Step';
import { StepperStyled } from './Stepper.styled';
import { StepperProps, StepperStaticProps } from './types';
import type { FC } from 'react';

const Component: FC<StepperProps> = memo(
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
export const Stepper: FC<StepperProps> & WithStyle & StepperStaticProps = Object.assign(Component, {
    Style: StepperStyled,
    Step
});
