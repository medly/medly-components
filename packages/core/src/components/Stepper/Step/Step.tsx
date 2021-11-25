import { WithStyle } from '@medly-components/utils';
import Text from '../../Text';
import { StepProps } from '../types';
import { StepCounterStyled, StepStyled } from './Step.styled';
import type { FC } from 'react';
import { memo } from 'react';

const Component: FC<StepProps> = memo(props => {
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
const Step: FC<StepProps> & WithStyle = Object.assign(Component, { Style: StepStyled });
export default Step;
