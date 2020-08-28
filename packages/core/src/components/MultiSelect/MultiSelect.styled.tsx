import { ChevronDownIcon } from '@medly-components/icons';
import { css, styled } from '@medly-components/utils';
import TextField from '../TextField';
import { InputSuffixStyled } from './InputSuffix/InputSuffix.styled';
import { SelectWrapperProps } from './types';

const getDefaultStyle = ({ theme, areOptionsVisible, disabled, isSearchable }: SelectWrapperProps) => {
    return css`
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
        ${InputSuffixStyled} {
            > ${ChevronDownIcon.Style} {
                transition: all 100ms ease-out;
                transform: ${areOptionsVisible ? 'rotate(180deg)' : 'rotate(0deg)'};
                * {
                    transition: fill 100ms ease-out;
                    fill: ${theme.colors.black};
                }
            }
        }
    `;
};

const getChipStyle = (color: string) => {
    return css`
        ${InputSuffixStyled} {
            > ${ChevronDownIcon.Style} {
                * {
                    fill: ${color};
                }
            }
        }
    `;
};

export const Wrapper = styled.div<SelectWrapperProps>`
    position: relative;
    display: ${({ fullWidth }) => (fullWidth ? 'flex' : 'inline-flex')};
    min-width: ${({ minWidth }) => minWidth || 'max-content'};
    width: ${({ fullWidth }) => (fullWidth ? '100%' : '25.6rem')};
    margin: ${({ theme, fullWidth }) =>
        fullWidth ? `${theme.spacing.S2} 0` : `${theme.spacing.S2} ${theme.spacing.S2} ${theme.spacing.S2} 0`};

    ${getDefaultStyle};
    ${({ areOptionsVisible, isErrorPresent, theme }) => areOptionsVisible && !isErrorPresent && getChipStyle(theme.colors.blue[500])};
    ${({ isErrorPresent, theme }) => isErrorPresent && getChipStyle(theme.colors.red[500])};
    ${({ disabled, theme }) => disabled && getChipStyle(theme.colors.grey[400])};
`;
