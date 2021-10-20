import { defaultTheme } from '@medly-components/theme';
import styled, { css } from 'styled-components';
import Text from '../../Text';
import { CounterProps } from '../types';

export const StepCounterStyled = styled('div')<CounterProps>`
    display: inline-block;
    text-align: center;
    border-radius: 50%;
    overflow: hidden;
    ${({ theme, size, active }) => {
        const { sizes, activeColor, inactiveColor, defaultSize, counterColor } = theme.stepper,
            { counterSize, fontVariant } = sizes[size || defaultSize];

        return css`
            width: ${counterSize};
            height: ${counterSize};
            line-height: ${counterSize};
            background: ${active ? activeColor : inactiveColor};

            /* This is the counter */
            ${Text.Style} {
                user-select: none;
                color: ${counterColor};
                line-height: ${counterSize};
                font-size: ${theme.font.variants[fontVariant].fontSize};
            }

            /* This is the description */
            & + ${Text.Style} {
                user-select: none;
                line-height: ${theme.font.variants[fontVariant].lineHeight};
                font-size: ${theme.font.variants[fontVariant].fontSize};
                color: ${active ? activeColor : inactiveColor};
            }
        `;
    }}
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
    ${({ onClick }) =>
        onClick &&
        css`
            * {
                cursor: pointer;
            }
        `}
`;
