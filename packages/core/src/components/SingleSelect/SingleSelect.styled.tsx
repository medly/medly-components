import styled from 'styled-components';
import TextField from '../TextField';
import { IconWrapper } from '../TextField/Styled';
import { SelectWrapperProps } from './types';

export const Wrapper = styled('div')<SelectWrapperProps>`
    position: relative;
    display: ${({ fullWidth }) => (fullWidth ? 'flex' : 'inline-flex')};
    min-width: ${({ minWidth }) => minWidth};
    max-width: ${({ maxWidth }) => maxWidth};
    width: ${({ fullWidth }) => fullWidth && '100%'};
    margin: ${({ theme, fullWidth }) =>
        fullWidth ? `${theme.spacing.S2} 0` : `${theme.spacing.S2} ${theme.spacing.S2} ${theme.spacing.S2} 0`};

    ${TextField.Style} {
        margin: 0;
        caret-color: ${({ isSearchable }) => !isSearchable && 'transparent'};

        label {
            pointer-events: none;
        }

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
        ${IconWrapper} {
            transition: transform 200ms ease-out;
            transform: ${({ areOptionsVisible }) => (areOptionsVisible ? 'rotate(180deg)' : 'rotate(0deg)')};
        }
        &:not(:focus-within):hover {
            ${IconWrapper} {
                * {
                    fill: ${({ theme, variant, disabled, isErrorPresent }) =>
                        !disabled && !isErrorPresent && variant !== 'flat' && theme.textField[variant].default.textColor};
                }
            }
        }
    }
`;
