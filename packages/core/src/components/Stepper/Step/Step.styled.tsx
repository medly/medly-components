import { defaultTheme } from '@medly-components/theme';
import { styled } from '@medly-components/utils';
import Text from '../../Text';
import { CounterProps, CounterStyledProps } from '../types';

const getSize = ({ counterSize }: CounterStyledProps) => counterSize;
const getFontSize = ({ fontSize }: CounterStyledProps) => fontSize;

const getMappedProps = ({ theme, size, active }: CounterProps) => {
    const { font, stepper } = theme;
    const { sizes, activeColor, inactiveColor, defaultSize } = stepper;
    const { counterSize, fontSize } = sizes[size || defaultSize];

    return {
        counterSize,
        fontSize: font.sizes[fontSize],
        bgColor: active ? activeColor : inactiveColor,
        descriptionColor: active ? activeColor : inactiveColor
    };
};

export const StepCounterStyled = styled('div').attrs(getMappedProps)<CounterStyledProps>`
    display: inline-block;
    text-align: center;
    width: ${getSize};
    height: ${getSize};
    line-height: ${getSize};
    border-radius: 50%;
    overflow: hidden;
    color: ${({ theme }) => theme.stepper.counterColor};
    background: ${({ bgColor }) => bgColor};

    /* This is the counter */
    ${Text.Style} {
        font-size: ${getFontSize};
    }

    /* This is the description */
    & + ${Text.Style} {
        color: ${({ descriptionColor }) => descriptionColor};
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
