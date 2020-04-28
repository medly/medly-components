import { css, styled } from '@medly-components/utils';
import { StyledProps } from '../types';
import { HelperText } from './HelperText.styled';
import { Label } from './Label.styled';
import { Prefix } from './Prefix.styled';

const outlineStyle = ({ theme, outlined }: StyledProps) => {
    return css`
        padding-top: 2.2rem;
        border-radius: ${theme.spacing.S1};
        border: 1px solid ${outlined.default.borderColor};

        &:not(:disabled):hover {
            border-color: ${outlined.hover.borderColor};
        }
    `;
};

const filledStyle = ({ theme, filled }: StyledProps) => {
    return css`
        padding-top: 2.3rem;
        border-radius: ${theme.spacing.S1} ${theme.spacing.S1} 0 0;
        background-color: ${filled.default.bgColor};
        border: none;
        border-bottom: 0.1rem solid ${filled.default.borderColor};

        &:not(:disabled):hover,
        &:not(:disabled):focus {
            padding-bottom: 0.5rem;
            border-bottom-width: 0.2rem;
        }
    `;
};

const activeStyle = ({ theme: { textField }, variant }: StyledProps) => css`
    &:focus {
        border-color: ${textField[variant].active.borderColor};
        background-color: ${variant === 'filled' ? textField.filled.active.bgColor : 'transparent'};
        & ~ ${Label} {
            color: ${textField[variant].active.labelColor};
        }
        & ~ ${Prefix} {
            * {
                fill: ${textField[variant].active.labelColor};
            }
        }
        &::placeholder {
            color: ${textField[variant].active.placeholderColor};
        }
    }
`;

const disabledStyle = ({ theme: { textField }, variant }: StyledProps) => css`
    cursor: not-allowed;
    color: ${textField[variant].disabled.textColor};
    background-color: ${variant === 'filled' ? textField.filled.disabled.bgColor : 'transparent'};
    border-color: ${textField[variant].disabled.borderColor};
    & ~ ${Label} {
        color: ${textField[variant].disabled.labelColor};
    }
    & ~ ${Prefix} {
        * {
            fill: ${textField[variant].disabled.labelColor};
        }
    }
    & ~ ${HelperText} {
        color: ${textField[variant].disabled.labelColor};
    }
    & ~ * {
        cursor: not-allowed;
    }
`;

const errorStyle = ({ theme: { textField }, variant }: StyledProps) => css`
    caret-color: ${textField[variant].error.caretColor};
    border-color: ${textField[variant].error.borderColor};
    background-color: ${variant === 'filled' ? textField.filled.error.bgColor : 'transparent'};
    & ~ ${Label} {
        color: ${textField[variant].error.labelColor};
    }
    & ~ ${Prefix} {
        * {
            fill: ${textField[variant].error.labelColor};
        }
    }
    & ~ ${HelperText} {
        color: ${textField[variant].error.helperTextColor};
    }
    &::placeholder {
        color: ${textField[variant].error.placeholderColor};
    }
`;

export const Input = styled('input').attrs(({ theme: { textField } }) => ({ ...textField, textField }))<StyledProps>`
    width: ${({ fullWidth }) => (fullWidth ? '100%' : 'max-content')};
    padding-bottom: 0.6rem;
    padding-left: ${({ isPrefixPresent }) => (isPrefixPresent ? '5.6rem' : '1.6rem')};
    padding-right: ${({ isSuffixPresent }) => (isSuffixPresent ? '5.6rem' : '1.6rem')};
    color: ${({ variant, textField }) => textField[variant].default.textColor};
    font-size: 1.6rem;
    line-height: 2.6rem;
    cursor: text;
    box-sizing: border-box;
    transition: all 100ms ease-out;

    &:focus {
        outline: none;
        &::placeholder {
            opacity: 1;
        }
    }

    ::placeholder {
        opacity: 0;
        transition: all 150ms ease-out;
    }

    &:not(:placeholder-shown) + ${Label}, &:focus + ${Label} {
        transform: translate3d(0, 20%, 0) scale(0.75);
    }

    & ~ ${Label} {
        color: ${({ variant, textField }) => textField[variant].default.labelColor};
    }

    & ~ ${Prefix} {
        * {
            fill: ${({ variant, textField }) => textField[variant].default.labelColor};
        }
    }

    & ~ ${HelperText} {
        color: ${({ variant, textField }) => textField[variant].default.helperTextColor};
    }

    ${props => (props.variant === 'outlined' ? outlineStyle(props) : filledStyle(props))}

    &:disabled {
        ${disabledStyle}
    }

    ${({ withBuiltInValidation }) =>
        withBuiltInValidation &&
        css`
            &:invalid {
                ${errorStyle}
            }
        `}

    ${({ errorText }) => (errorText ? errorStyle : activeStyle)}
`;
