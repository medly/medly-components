import { rgba } from 'polished';
import { css } from 'styled-components';
import { InnerWrapperModifiedProps } from '../../types';

export const outlinedStyle = ({ outlined, disabled, isErrorPresent }: InnerWrapperModifiedProps) => {
    return css`
        border-radius: ${outlined.default.borderRadius};
        background-color: ${outlined.default.bgColor};
        input {
            box-shadow: 0 0 0 100000px ${outlined.default.bgColor} inset;
            &::placeholder {
                color: ${outlined.default.placeholderColor};
            }
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
            border-radius: ${outlined.default.borderRadius};
            border-width: ${outlined.default.borderRadius};
            border: 0.1rem solid ${outlined.default.borderColor};
        }
        &:hover {
            box-shadow: ${!disabled && `0px 0.2rem 0.8rem ${rgba(outlined.hover.shadowColor, 0.2)}`};
        }
        &:focus-within {
            border-radius: ${outlined.active.borderRadius};
            box-shadow: 0 0.2rem 0.8rem ${rgba(outlined[isErrorPresent ? 'error' : 'active'].shadowColor, 0.2)};
        }

        &:hover::after {
            border-color: ${!disabled && outlined.hover.borderColor};
            border-width: ${!disabled && outlined.hover.borderWidth};
        }
        &:focus-within::after {
            border-color: ${outlined.active.borderColor};
            border-radius: ${outlined.active.borderRadius};
            border-width: ${outlined.active.borderWidth};
        }
    `;
};
