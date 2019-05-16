import { WithStyle } from '@medly-components/utils';
import React from 'react';
import Text from '../../Text';
import { StepProps } from '../types';
import { StepCounterStyled, StepStyled } from './Step.styled';

const Step: React.SFC<StepProps> & WithStyle = props => {
    const { step, children } = props;

    return (
        <StepStyled>
            <StepCounterStyled {...props}>
                <Text uppercase textWeight="Strong">
                    {step}
                </Text>
            </StepCounterStyled>
            <Text textWeight="Strong">{children}</Text>
        </StepStyled>
    );
};

Step.displayName = 'Step';
Step.Style = StepStyled;

export default Step;
