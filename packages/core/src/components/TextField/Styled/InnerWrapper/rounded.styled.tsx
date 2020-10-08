import { css } from '@medly-components/utils';
import { InnerWrapperProps } from '../../types';
import { HelperText } from '../HelperText.styled';
import { Label } from '../Label.styled';
import { Prefix } from '../Prefix.styled';
import { Suffix } from '../Suffix.styled';

export const roundedStyle = ({ rounded, disabled, inputContainsText }: InnerWrapperProps) => {
    return css`
        border-radius: 1rem;
        background-color: ${inputContainsText ? 'transparent' : rounded.default.bgColor};
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
            border: 0.1rem solid ${rounded.default.borderColor};
        }

        &:hover::after,
        &:focus-within::after {
            border-width: ${!disabled && `0.15rem`};
            border-color: ${!disabled && rounded.hover.borderColor};
        }
    `;
};

export const roundedErrorStyle = ({ theme: { textField }, inputContainsText }: InnerWrapperProps) => css`
    &,
    &:hover {
        color: ${textField.rounded.error.defaultTextColor};
        background-color: ${textField.rounded.error.bgColor};
        ${Label} {
            color: ${textField.rounded.error.labelColor};
        }
        ${Prefix}, ${Suffix} {
            color: ${textField.rounded.error.labelColor};
            * {
                fill: ${textField.rounded.error.labelColor};
            }
        }
        & ~ ${HelperText} {
            color: ${textField.rounded.error.helperTextColor};
        }
        input {
            caret-color: ${textField.rounded.error.caretColor};
            &::placeholder {
                color: ${textField.rounded.error.placeholderColor};
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
        color: ${textField.rounded.error.activeTextColor};
    }

    ${inputContainsText &&
    css`
        && {
            background-color: transparent;
            color: ${textField.rounded.error.activeTextColor};
        }
    `}

    &&::after {
        border-color: ${textField.rounded.error.borderColor};
    }
`;
