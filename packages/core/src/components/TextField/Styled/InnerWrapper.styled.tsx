import { css, styled } from '@medly-components/utils';
import { InnerWrapperProps } from '../types';
import { HelperText } from './HelperText.styled';
import { Label } from './Label.styled';
import { Prefix } from './Prefix.styled';
import { Suffix } from './Suffix.styled';

const activeStyle = ({ theme: { textField }, variant }: InnerWrapperProps) => css`
    &:focus-within,
    &:focus-within:hover {
        border-color: ${textField[variant].active.borderColor};
        background-color: ${variant === 'filled' ? textField.filled.active.bgColor : 'transparent'};
        &::after {
            background-color: ${textField[variant].active.borderColor};
        }
        ${Label} {
            color: ${textField[variant].active.labelColor};
        }
        ${Prefix}, ${Suffix} {
            color: ${textField[variant].active.labelColor};
            * {
                fill: ${textField[variant].active.labelColor};
            }
        }
        input::placeholder {
            color: ${textField[variant].active.placeholderColor};
        }
    }
`;

const outlineStyle = ({ theme, outlined }: InnerWrapperProps) => {
    return css`
        padding: 0 1.5rem;
        background-color: transparent;
        border-radius: ${theme.spacing.S1};
        border: 1px solid ${outlined.default.borderColor};

        &:hover {
            border-color: ${outlined.hover.borderColor};
        }
    `;
};

const filledStyle = ({ theme, filled }: InnerWrapperProps) => {
    return css`
        padding: 0 1.6rem;
        border-radius: ${theme.spacing.S1} ${theme.spacing.S1} 0 0;
        background-color: ${filled.default.bgColor};

        &::after {
            content: '';
            width: 100%;
            height: 0.1rem;
            position: absolute;
            bottom: 0;
            left: 0;
            background-color: ${filled.default.borderColor};
            transition: all 100ms ease-out;
        }
        &:hover::after,
        &:focus-within::after {
            height: 0.2rem;
        }
    `;
};

const disabledStyle = ({ theme: { textField }, variant }: InnerWrapperProps) => css`
    cursor: not-allowed;
    background-color: ${variant === 'filled' ? textField.filled.disabled.bgColor : 'transparent'};
    border-color: ${textField[variant].disabled.borderColor};
    &:hover {
        border-color: ${textField[variant].disabled.borderColor};
    }
    &::after,
    &:hover::after {
        height: 0.1rem;
        background-color: ${textField[variant].disabled.borderColor};
    }
    input {
        color: ${textField[variant].disabled.textColor};
    }
    ${Label} {
        color: ${textField[variant].disabled.labelColor};
    }
    ${Prefix}, ${Suffix} {
        color: ${textField[variant].disabled.labelColor};
        * {
            fill: ${textField[variant].disabled.labelColor};
        }
    }
    & ~ ${HelperText} {
        color: ${textField[variant].disabled.labelColor};
    }
    * {
        cursor: not-allowed;
    }
`;

const errorStyle = ({ theme: { textField }, variant }: InnerWrapperProps) => css`
    &,
    &:hover,
    &:focus-within,
    &:focus-within:hover {
        border-color: ${textField[variant].error.borderColor};
        background-color: ${variant === 'filled' ? textField.filled.error.bgColor : 'transparent'};
        ${Label} {
            color: ${textField[variant].error.labelColor};
        }
        ${Prefix}, ${Suffix} {
            color: ${textField[variant].error.labelColor};
            * {
                fill: ${textField[variant].error.labelColor};
            }
        }
        &::after {
            background-color: ${textField[variant].error.borderColor};
        }
        & ~ ${HelperText} {
            color: ${textField[variant].error.helperTextColor};
        }
        input {
            caret-color: ${textField[variant].error.caretColor};
            &::placeholder {
                color: ${textField[variant].error.placeholderColor};
            }
        }
    }
`;

export const InnerWrapper = styled('div').attrs(({ theme: { textField } }) => ({ ...textField, textField }))<InnerWrapperProps>`
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: row;
    box-sizing: border-box;
    height: 5.6rem;
    transition: all 100ms ease-out;
    cursor: text;

    ${Label} {
        color: ${({ variant, textField }) => textField[variant].default.labelColor};
    }

    ${Prefix}, ${Suffix} {
        color: ${({ variant, textField }) => textField[variant].default.labelColor};
        * {
            fill: ${({ variant, textField }) => textField[variant].default.labelColor};
        }
    }

    & ~ ${HelperText} {
        color: ${({ variant, textField }) => textField[variant].default.helperTextColor};
    }

    ${({ variant }) => (variant === 'filled' ? filledStyle : outlineStyle)}
    ${({ disabled, isErrorPresent }) => (disabled ? disabledStyle : isErrorPresent ? errorStyle : activeStyle)}
`;
