import { css } from 'styled-components';
import { InnerWrapperModifiedProps } from '../../types';
import { HelperText } from '../HelperText.styled';
import { Label } from '../Label.styled';
import { Prefix } from '../Prefix.styled';
import { Suffix } from '../Suffix.styled';

export const fusionStyle = ({ fusion, disabled, isTextPresent }: InnerWrapperModifiedProps) => {
    const { bgColor } = fusion[isTextPresent ? 'active' : 'default'];
    return css`
        background-color: ${bgColor};
        border-radius: ${fusion.default.borderRadius};
        border-width: ${fusion.default.borderWidth};
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
            border-radius: ${fusion.default.borderRadius};
            border-width: ${fusion.default.borderWidth};
            border: 0.1rem solid ${fusion.default.borderColor};
        }

        &:hover::after {
            border-width: ${!disabled && fusion.hover.borderWidth};
            border-color: ${!disabled && fusion.hover.borderColor};
        }

        &:focus-within::after {
            border-color: ${fusion.active.borderColor};
            border-radius: ${fusion.active.borderRadius};
            border-width: ${fusion.active.borderWidth};
        }

        &:focus-within {
            border-radius: ${fusion.active.borderRadius};
            border-width: ${fusion.active.borderWidth};
        }
        input {
            box-shadow: 0 0 0 100000px ${bgColor} inset;
        }
    `;
};

export const fusionErrorStyle = ({ theme: { textField }, isTextPresent }: InnerWrapperModifiedProps) => css`
    &,
    &:hover {
        color: ${textField.fusion.error.defaultTextColor};
        background-color: ${textField.fusion.error.bgColor};
        ${Label} {
            color: ${textField.fusion.error.labelColor};
        }
        ${Prefix}, ${Suffix} {
            color: ${textField.fusion.error.labelColor};
            * {
                fill: ${textField.fusion.error.labelColor};
            }
        }
        & ~ ${HelperText} {
            color: ${textField.fusion.error.helperTextColor};
        }
        input {
            caret-color: ${textField.fusion.error.caretColor};
            box-shadow: 0 0 0 100000px ${textField.fusion[isTextPresent ? 'active' : 'error'].bgColor} inset;
            &::placeholder {
                color: ${textField.fusion.error.placeholderColor};
            }
        }
    }

    &:hover::after {
        border-width: 0.15rem;
    }

    &:focus-within,
    &:focus-within:hover {
        background-color: ${textField.fusion.active.bgColor};
        color: ${textField.fusion.error.activeTextColor};
        input {
            box-shadow: 0 0 0 100000px ${textField.fusion.active.bgColor} inset;
        }
    }

    ${isTextPresent &&
    css`
        && {
            background-color: ${textField.fusion.active.bgColor};
            color: ${textField.fusion.error.activeTextColor};
        }
    `}

    &&::after {
        border-color: ${textField.fusion.error.borderColor};
    }
`;
