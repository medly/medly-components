import { ChevronDownIcon } from '@medly-components/icons';
import styled, { css } from 'styled-components';
import TextField from '../TextField';
import { InputSuffixStyled } from './InputSuffix/InputSuffix.styled';
import { SelectWrapperProps } from './types';

const iconStyle = (color: string) => css`
    ${InputSuffixStyled} > ${ChevronDownIcon.Style} {
        * {
            fill: ${color};
        }
    }
`;

const getDefaultStyle = ({ theme, variant, areOptionsVisible, disabled, isSearchable }: SelectWrapperProps) => css`
    ${TextField.Style} {
        margin: 0;

        label {
            pointer-events: none;
        }

        div,
        input,
        label {
            cursor: ${!disabled && 'pointer'};
        }
        &:focus-within {
            input {
                cursor: ${!disabled && isSearchable && 'text'};
            }
        }
        input {
            padding-right: 1.6rem;
        }
    }

    ${InputSuffixStyled} > ${ChevronDownIcon.Style} {
        transform: ${areOptionsVisible ? 'rotate(180deg)' : 'rotate(0deg)'};
    }

    ${!disabled && iconStyle(theme.textField[variant].default.labelColor)}

    &:not(:focus-within):hover {
        ${!disabled && iconStyle(theme.textField[variant].default.textColor)}
    }
`;

export const Wrapper = styled.div<SelectWrapperProps>`
    position: relative;
    display: ${({ fullWidth }) => (fullWidth ? 'flex' : 'inline-flex')};
    min-width: ${({ minWidth }) => minWidth || 'max-content'};
    width: ${({ fullWidth }) => fullWidth && '100%'};
    margin: ${({ theme, fullWidth }) =>
        fullWidth ? `${theme.spacing.S2} 0` : `${theme.spacing.S2} ${theme.spacing.S2} ${theme.spacing.S2} 0`};

    ${getDefaultStyle};
    ${({ areOptionsVisible, isErrorPresent, theme }) => areOptionsVisible && !isErrorPresent && iconStyle(theme.colors.blue[500])};
    ${({ isErrorPresent, theme }) => isErrorPresent && iconStyle(theme.colors.red[500])};
    ${({ disabled, theme }) => disabled && iconStyle(theme.colors.grey[400])};
`;
