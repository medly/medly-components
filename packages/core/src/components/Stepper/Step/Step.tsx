import { WithStyle } from '@medly-components/utils';
import type { FCC } from 'react';
import { memo } from 'react';
import Text from '../../Text';
import { StepProps } from '../types';
import { StepCounterStyled, StepStyled } from './Step.styled';

const Component: FCC<StepProps> = memo(props => {
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
const Step: FCC<StepProps> & WithStyle = Object.assign(Component, { Style: StepStyled });
export default Step;
