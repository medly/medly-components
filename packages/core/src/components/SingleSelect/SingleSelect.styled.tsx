import { styled } from '@medly-components/utils';
import TextField from '../TextField';
import { Suffix } from '../TextField/Styled';
import { SelectWrapperProps } from './types';

export const Wrapper = styled('div')<SelectWrapperProps>`
    position: relative;
    display: ${({ fullWidth }) => (fullWidth ? 'flex' : 'inline-flex')};
    min-width: ${({ minWidth }) => minWidth || 'max-content'};
    width: ${({ fullWidth }) => (fullWidth ? '100%' : 'max-content')};
    margin: ${({ theme, fullWidth }) =>
        fullWidth ? `${theme.spacing.S2} 0` : `${theme.spacing.S2} ${theme.spacing.S2} ${theme.spacing.S2} 0`};

    ${TextField.Style} {
        margin: 0;
        div,
        input,
        label {
            cursor: ${({ disabled }) => !disabled && 'pointer'};
        }
        &:focus-within {
            input {
                cursor: ${({ disabled, isSearchable }) => !disabled && isSearchable && 'text'};
            }
        }
        ${Suffix} {
            transition: transform 200ms ease-out;
            transform: ${({ areOptionsVisible }) => (areOptionsVisible ? 'rotate(180deg)' : 'rotate(0deg)')};
            * {
                transition: fill 100ms ease-out;
            }
        }
        &:not(:focus-within):hover {
            ${Suffix} {
                * {
                    fill: ${({ theme, variant, disabled, isErrorPresent }) =>
                        !disabled && !isErrorPresent && theme.textField[variant].default.textColor};
                }
            }
        }
    }
`;
