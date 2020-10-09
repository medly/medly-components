import { css } from '@medly-components/utils';
import { InnerWrapperProps } from '../../types';
import { HelperText } from '../HelperText.styled';
import { Label } from '../Label.styled';
import { Prefix } from '../Prefix.styled';
import { Suffix } from '../Suffix.styled';

export const roundedOutlinedStyle = ({ outlinedRounded, disabled, isTextPresent }: InnerWrapperProps) => {
    return css`
        border-radius: 1rem;
        background-color: ${isTextPresent ? 'transparent' : outlinedRounded.default.bgColor};
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
            border-radius: 1rem;
            border: 0.1rem solid ${outlinedRounded.default.borderColor};
        }

        &:hover::after,
        &:focus-within::after {
            border-width: ${!disabled && `0.15rem`};
            border-color: ${!disabled && outlinedRounded.hover.borderColor};
        }
    `;
};

export const roundedOutlinedErrorStyle = ({ theme: { textField }, isTextPresent }: InnerWrapperProps) => css`
    &,
    &:hover {
        color: ${textField.outlinedRounded.error.defaultTextColor};
        background-color: ${textField.outlinedRounded.error.bgColor};
        ${Label} {
            color: ${textField.outlinedRounded.error.labelColor};
        }
        ${Prefix}, ${Suffix} {
            color: ${textField.outlinedRounded.error.labelColor};
            * {
                fill: ${textField.outlinedRounded.error.labelColor};
            }
        }
        & ~ ${HelperText} {
            color: ${textField.outlinedRounded.error.helperTextColor};
        }
        input {
            caret-color: ${textField.outlinedRounded.error.caretColor};
            &::placeholder {
                color: ${textField.outlinedRounded.error.placeholderColor};
            }
        }
    }
    ,
    &:hover::after {
        border-width: 0.15rem;
    }

    &:focus-within,
    &:focus-within:hover {
        background-color: transparent;
        color: ${textField.outlinedRounded.error.activeTextColor};
    }

    ${isTextPresent &&
    css`
        && {
            background-color: transparent;
            color: ${textField.outlinedRounded.error.activeTextColor};
        }
    `}

    &&::after {
        border-color: ${textField.outlinedRounded.error.borderColor};
    }
`;
