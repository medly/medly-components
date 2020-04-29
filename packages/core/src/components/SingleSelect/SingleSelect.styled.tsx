import { css, styled } from '@medly-components/utils';
import TextField from '../TextField';
import { Suffix } from '../TextField/Styled';
import { SelectWrapperProps } from './types';

const errorStyle = ({ theme, variant }: SelectWrapperProps) => {
    return css`
        & ~ ${Suffix}, &:hover ~ ${Suffix}, &:focus ~ ${Suffix} {
            * {
                fill: ${theme.textField[variant].error.labelColor};
            }
            &:hover {
                * {
                    fill: ${theme.textField[variant].error.labelColor};
                }
            }
        }
    `;
};

export const Wrapper = styled('div')<SelectWrapperProps>`
    position: relative;
    display: ${({ fullWidth }) => (fullWidth ? 'flex' : 'inline-flex')};
    min-width: ${({ minWidth }) => minWidth || 'max-content'};
    width: ${({ fullWidth }) => (fullWidth ? '100%' : 'max-content')};
    margin: ${({ theme, fullWidth }) =>
        fullWidth ? `${theme.spacing.S2} 0` : `${theme.spacing.S2} ${theme.spacing.S2} ${theme.spacing.S2} 0`};

    ${TextField.Style} {
        margin: 0;
        input {
            cursor: ${({ disabled }) => !disabled && 'pointer'};
            & ~ ${Suffix} {
                transition: transform 200ms ease-out;
                cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
                transform: ${({ areOptionsVisible }) =>
                    areOptionsVisible ? 'translateY(-50%) rotate(180deg)' : 'translateY(-50%) rotate(0deg)'};
                * {
                    transition: fill 100ms ease-out;
                    fill: ${({ theme, variant, disabled }) =>
                        disabled ? theme.textField[variant].disabled.labelColor : theme.textField[variant].default.labelColor};
                }
                &:hover {
                    * {
                        fill: ${({ theme, variant, disabled }) =>
                            disabled ? theme.textField[variant].disabled.labelColor : theme.textField[variant].default.textColor};
                    }
                }
            }
            &:hover ~ ${Suffix} {
                * {
                    fill: ${({ theme, variant, disabled }) =>
                        disabled ? theme.textField[variant].disabled.labelColor : theme.textField[variant].default.textColor};
                }
            }
            &:focus ~ ${Suffix} {
                * {
                    fill: ${({ theme, variant }) => theme.textField[variant].active.labelColor};
                }
            }
            ${({ withBuiltInValidation, disabled }) =>
                !disabled &&
                withBuiltInValidation &&
                css`
                    &:invalid {
                        ${errorStyle}
                    }
                `}
            ${props => props.isErrorPresent && !props.disabled && errorStyle(props)}
        }
    }
`;
