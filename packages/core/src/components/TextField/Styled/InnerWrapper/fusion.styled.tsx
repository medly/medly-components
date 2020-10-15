import { css } from '@medly-components/utils';
import { InnerWrapperProps } from '../../types';
import { HelperText } from '../HelperText.styled';
import { Label } from '../Label.styled';
import { Prefix } from '../Prefix.styled';
import { Suffix } from '../Suffix.styled';

export const fusionStyle = ({ fusion, disabled, isTextPresent }: InnerWrapperProps) => {
    return css`
        border-radius: 1rem;
        background-color: ${isTextPresent ? 'transparent' : fusion.default.bgColor};
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
            border: 0.1rem solid ${fusion.default.borderColor};
        }

        &:hover::after,
        &:focus-within::after {
            border-width: ${!disabled && `0.15rem`};
            border-color: ${!disabled && fusion.hover.borderColor};
        }
    `;
};

export const fusionErrorStyle = ({ theme: { textField }, isTextPresent }: InnerWrapperProps) => css`
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
        background-color: transparent;
        color: ${textField.fusion.error.activeTextColor};
    }

    ${isTextPresent &&
    css`
        && {
            background-color: transparent;
            color: ${textField.fusion.error.activeTextColor};
        }
    `}

    &&::after {
        border-color: ${textField.fusion.error.borderColor};
    }
`;
