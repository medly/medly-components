import { WithStyle } from '@medly-components/utils';
import React from 'react';
import Text from '../../Text';
import { StepProps } from '../types';
import { StepCounterStyled, StepStyled } from './Step.styled';

const Component: React.FC<StepProps> = React.memo(props => {
    const { step, children, onClick, ...restProps } = props;

    return (
        <StepStyled {...{ onClick }}>
            <StepCounterStyled {...restProps}>
                <Text uppercase textWeight="Strong">
                    {step}
                </Text>
            </StepCounterStyled>
            <Text textWeight="Strong">{children}</Text>
        </StepStyled>
    );
});

Component.displayName = 'Step';
const Step: React.FC<StepProps> & WithStyle = Object.assign(Component, { Style: StepStyled });
export default Step;
