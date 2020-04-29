import { css, styled } from '@medly-components/utils';
import { StyledProps } from '../types';
import { HelperText } from './HelperText.styled';
import { Label } from './Label.styled';
import { Prefix } from './Prefix.styled';

const outlineStyle = ({ theme, outlined, isLabelPresent, isPrefixPresent, isSuffixPresent }: StyledProps) => {
    return css`
        padding-top: ${isLabelPresent ? '2.2rem' : '1.4rem'};
        padding-right: ${isSuffixPresent ? '5.5rem' : '1.5rem'};
        padding-bottom: ${isLabelPresent ? '0.6rem' : '1.4rem'};
        padding-left: ${isPrefixPresent ? '5.5rem' : '1.5rem'};
        border-radius: ${theme.spacing.S1};
        border: 1px solid ${outlined.default.borderColor};

        &:not(:disabled):hover {
            border-color: ${outlined.hover.borderColor};
        }
    `;
};

const filledStyle = ({ theme, filled, isLabelPresent, isPrefixPresent, isSuffixPresent }: StyledProps) => {
    return css`
        padding-top: ${isLabelPresent ? '2.3rem' : '1.4rem'};
        padding-right: ${isSuffixPresent ? '5.6rem' : '1.6rem'};
        padding-left: ${isPrefixPresent ? '5.6rem' : '1.6rem'};
        padding-bottom: ${isLabelPresent ? '0.6rem' : '1.4rem'};
        border-radius: ${theme.spacing.S1} ${theme.spacing.S1} 0 0;
        background-color: ${filled.default.bgColor};
        border: none;
        border-bottom: 0.1rem solid ${filled.default.borderColor};

        &:not(:disabled):hover,
        &:not(:disabled):focus {
            padding-bottom: ${isLabelPresent ? '0.5rem' : '1.3rem'};
            border-bottom-width: 0.2rem;
        }

        &:not(:disabled):hover {
            border-color: ${filled.hover.borderColor};
        }
    `;
};

const activeStyle = ({ theme: { textField }, variant }: StyledProps) => css`
    &:focus,
    &:focus:hover {
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
    &,
    &:focus,
    &:not(:disabled):hover {
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
    }
`;

export const Input = styled('input').attrs(({ theme: { textField } }) => ({ ...textField, textField }))<StyledProps>`
    width: ${({ fullWidth }) => (fullWidth ? '100%' : 'max-content')};
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

    ${({ errorText }) => (errorText ? errorStyle : activeStyle)}
    ${({ withBuiltInValidation }) =>
        withBuiltInValidation &&
        css`
            &:invalid {
                ${errorStyle}
            }
        `}
`;
