import { css, styled } from '@medly-components/utils';
import { InnerWrapperProps } from '../../types';
import { HelperText } from '../HelperText.styled';
import { Label } from '../Label.styled';
import { Prefix } from '../Prefix.styled';
import { Suffix } from '../Suffix.styled';
import { filledStyle } from './filled.styled';
import { outlinedStyle } from './outlined.styled';
import { roundedOutlinedErrorStyle, roundedOutlinedStyle } from './fusion.styled';

const disabledStyle = ({ theme: { textField }, variant }: InnerWrapperProps) => css`
    cursor: not-allowed;
    background-color: ${variant === 'filled' ? textField.filled.disabled.bgColor : 'transparent'};
    &::after,
    &:hover::after {
        border-width: 0.1rem;
        border-color: ${textField[variant].disabled.borderColor};
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

const activeStyle = ({ theme: { textField }, variant }: InnerWrapperProps) => css`
    &:focus-within,
    &:focus-within:hover {
        background-color: ${variant === 'filled' ? textField.filled.active.bgColor : 'transparent'};
        &::after {
            border-color: ${textField[variant].active.borderColor};
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

const errorStyle = ({ theme: { textField }, variant }: InnerWrapperProps) =>
    variant === 'fusion'
        ? roundedOutlinedErrorStyle
        : css`
              &,
              &:hover,
              &:focus-within,
              &:focus-within:hover {
                  background-color: ${variant === 'filled' ? textField.filled.error.bgColor : 'transparent'};
                  &::after {
                      border-color: ${textField[variant].error.borderColor};
                  }
                  ${Label} {
                      color: ${textField[variant].error.labelColor};
                  }
                  ${Prefix}, ${Suffix} {
                      color: ${textField[variant].error.labelColor};
                      * {
                          fill: ${textField[variant].error.labelColor};
                      }
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

export const InnerWrapper = styled('div').attrs(({ theme: { textField } }) => ({ ...textField, textField, height: undefined }))<
    InnerWrapperProps
>`
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: row;
    box-sizing: border-box;
    height: ${({ size, theme }) => theme.textField.height[size]};
    padding: 0 ${({ size }) => (size === 'S' ? '1.2rem' : '1.6rem')};
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

    ${({ variant }) => variant === 'filled' && filledStyle}
    ${({ variant }) => variant === 'outlined' && outlinedStyle}
    ${({ variant }) => variant === 'fusion' && roundedOutlinedStyle}
    ${({ disabled, isErrorPresent }) => (disabled ? disabledStyle : isErrorPresent ? errorStyle : activeStyle)}
`;
InnerWrapper.defaultProps = {
    size: 'M'
};
