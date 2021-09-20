import { css, styled } from '@medly-components/utils';
import { InnerWrapperProps } from '../../types';
import { CharacterCount } from '../CharacterCount.styled';
import { HelperText } from '../HelperText.styled';
import { Label } from '../Label.styled';
import { Prefix } from '../Prefix.styled';
import { Suffix } from '../Suffix.styled';
import { filledStyle } from './filled.styled';
import { fusionErrorStyle, fusionStyle } from './fusion.styled';
import { outlinedStyle } from './outlined.styled';

const disabledStyle = ({ theme: { textField }, variant }: InnerWrapperProps) => css`
    cursor: ${textField[variant].disabled.cursor};
    background-color: ${textField[variant].disabled.bgColor};
    &::after,
    &:hover::after {
        border-width: 0.1rem;
        border-color: ${textField[variant].disabled.borderColor};
    }
    input {
        box-shadow: 0 0 0 100000px ${textField[variant].disabled.bgColor} inset;
    }
    ${Label} {
        color: ${textField[variant].disabled.labelColor};
    }
    ${CharacterCount} {
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
        cursor: ${textField[variant].disabled.cursor};
    }
`;

const activeStyle = ({ theme: { textField }, variant }: InnerWrapperProps) => css`
    &:focus-within,
    &:focus-within:hover {
        background-color: ${textField[variant].active.bgColor};
        &::after {
            border-color: ${textField[variant].active.borderColor};
            border-radius: ${variant === 'filled' ? '0' : textField[variant].active.borderRadius };
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
        input {
            box-shadow: 0 0 0 100000px ${textField[variant].active.bgColor} inset;
            &::placeholder {
                color: ${textField[variant].active.placeholderColor};
            }
        }
    }
`;

const errorStyle = ({ theme: { textField }, variant }: InnerWrapperProps) =>
    variant === 'fusion'
        ? fusionErrorStyle
        : css`
              &,
              &:hover,
              &:focus-within,
              &:focus-within:hover {
                  background-color: ${textField[variant].error.bgColor};
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
                      box-shadow: 0 0 0 100000px ${textField[variant].error.bgColor} inset;
                      caret-color: ${textField[variant].error.caretColor};
                      &::placeholder {
                          color: ${textField[variant].error.placeholderColor};
                      }
                  }
              }
          `;

const getHeight = ({ size, theme, minRows, multiline, variant }: InnerWrapperProps) => {
    const baseHeight = theme.textField.height[size];
    const baseHeightNumber = parseFloat(baseHeight.replace(/[^\d.-]/g, ''));

    const lineHeight = theme.font.variants[theme.textField.textVariant[size]].lineHeight;
    const lineHeightNumber = parseFloat(lineHeight.replace(/[^\d.-]/g, ''));

    const smallPadding = 1.1 * 2;
    const medPadding = 1.6 * 2;

    if (multiline) {
        if (size === 'S' || variant === 'fusion') {
            return lineHeightNumber * minRows + smallPadding;
        } else {
            return lineHeightNumber * minRows + medPadding;
        }
    }
    return baseHeightNumber;
};

const getPadding = ({ size, multiline }: InnerWrapperProps) => {
    switch (size) {
        case 'S':
            return multiline ? '1.1rem 1.2rem' : '0 1.2rem';
        case 'M':
            return multiline ? '1.1rem 1.6rem' : '0 1.6rem';
        default:
            return '0 1.6rem';
    }
};

export const InnerWrapper = styled('div').attrs(({ theme: { textField } }) => ({ ...textField, textField, height: undefined }))<
    InnerWrapperProps
>`
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: row;
    box-sizing: border-box;
    height: ${getHeight}rem;
    padding: ${getPadding};
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
    ${({ variant }) => variant === 'fusion' && fusionStyle}
    ${({ disabled, isErrorPresent }) => (disabled ? disabledStyle : isErrorPresent ? errorStyle : activeStyle)}
`;
InnerWrapper.defaultProps = {
    size: 'M'
};
