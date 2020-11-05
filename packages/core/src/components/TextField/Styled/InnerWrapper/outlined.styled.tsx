import { css } from '@medly-components/utils';
import { rgba } from 'polished';
import { InnerWrapperProps } from '../../types';

export const outlinedStyle = ({ theme, outlined, disabled, isErrorPresent }: InnerWrapperProps) => {
    return css`
        border-radius: ${theme.spacing.S1};
        background-color: ${outlined.default.bgColor};
        input {
            box-shadow: 0 0 0 100000px ${outlined.default.bgColor} inset;
        }
        &::after {
            content: '';
            box-sizing: border-box;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            pointer-events: none;
            background-color: transparent;
            transition: all 100ms ease-out;
            border-radius: ${theme.spacing.S1};
            border: 0.1rem solid ${outlined.default.borderColor};
        }
        &:hover {
            box-shadow: ${!disabled && `0px 0.2rem 0.8rem ${rgba(outlined.hover.shadowColor, 0.2)}`};
        }
        &:focus-within {
            box-shadow: ${!disabled && `0px 0.2rem 0.8rem ${rgba(outlined[isErrorPresent ? 'error' : 'active'].shadowColor, 0.2)}`};
        }

        &:hover::after,
        &:focus-within::after {
            border-width: ${!disabled && `0.15rem`};
            border-color: ${!disabled && outlined.hover.borderColor};
        }
    `;
};
