import { defaultTheme } from '@medly-components/theme';
import { styled } from '@medly-components/utils';
import Text from '../../Text';
import { StepCounterProps } from '../types';

const getSizes = ({ theme: { stepper }, size }: StepCounterProps) => stepper.sizes[size || stepper.defaultSize];
const getStepperSize = (props: StepCounterProps) => getSizes(props).size;
const getFontSize = (props: StepCounterProps) => props.theme.font.sizes[getSizes(props).fontSize];
const getColor = ({ theme, active }: StepCounterProps) => (active ? theme.stepper.activeColor : theme.stepper.inactiveColor);

export const StepCounterStyled = styled('div')<StepCounterProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${getStepperSize};
    height: ${getStepperSize};
    line-height: ${getStepperSize};
    border-radius: 50%;
    overflow: hidden;
    color: ${({ theme }) => theme.stepper.counterColor};
    background: ${getColor};

    ${Text.Style} {
        font-size: ${getFontSize};
    }

    & + ${Text.Style} {
        color: ${getColor};
        font-size: ${getFontSize};
    }
`;

StepCounterStyled.defaultProps = {
    theme: defaultTheme
};

export const StepStyled = styled('div')`
    display: flex;
    align-items: center;
    margin-right: 20px;

    ${StepCounterStyled} {
        margin-right: 10px;
    }
`;
