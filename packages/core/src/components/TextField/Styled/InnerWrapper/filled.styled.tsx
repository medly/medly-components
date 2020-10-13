import { css } from 'styled-components';
import { InnerWrapperProps } from '../../types';

export const filledStyle = ({ theme, filled, disabled }: InnerWrapperProps) => {
    return css`
        border-radius: ${theme.spacing.S1} ${theme.spacing.S1} 0 0;
        background-color: ${filled.default.bgColor};
        &::after {
            content: '';
            width: 100%;
            height: 0;
            position: absolute;
            bottom: 0;
            left: 0;
            box-sizing: border-box;
            border-top: 0.1rem solid ${filled.default.borderColor};
            transition: all 100ms ease-out;
        }
        &:hover::after,
        &:focus-within::after {
            border-width: ${!disabled && `0.2rem`};
        }
    `;
};
