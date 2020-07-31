import { ChevronDownIcon } from '@medly-components/icons';
import { css, styled } from '@medly-components/utils';
import TextField from '../TextField';
import { SelectWrapperProps } from './types';

export const SuffixWrap = styled.div`
    display: flex;
    align-items: center;
`;

const getDefaultStyle = ({ theme, areOptionsVisible, disabled, isSearchable }: SelectWrapperProps) => {
    return css`
        ${TextField.Style} {
            margin: 0;
            caret-color: ${!isSearchable && 'transparent'};

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
        ${SuffixWrap} {
            > ${ChevronDownIcon.Style} {
                transition: all 100ms ease-out;
                transform: ${areOptionsVisible ? 'rotate(180deg)' : 'rotate(0deg)'};
                margin-left: 0.8rem;
                * {
                    transition: fill 100ms ease-out;
                    fill: ${theme.colors.black};
                }
            }
        }
    `;
};

const getActiveStyle = ({ theme }: SelectWrapperProps) => {
    return css`
        ${SuffixWrap} {
            > ${ChevronDownIcon.Style} {
                * {
                    fill: ${theme.colors.blue[500]};
                }
            }
        }
    `;
};

const getErrorStyle = ({ theme }: SelectWrapperProps) => {
    return css`
        ${SuffixWrap} {
            > ${ChevronDownIcon.Style} {
                * {
                    fill: ${theme.colors.red[500]};
                }
            }
        }
    `;
};

const getDisabledStyle = ({ theme }: SelectWrapperProps) => {
    return css`
        ${SuffixWrap} {
            > ${ChevronDownIcon.Style} {
                * {
                    fill: ${theme.colors.grey[400]};
                }
            }
        }
    `;
};

export const Wrapper = styled.div<SelectWrapperProps>`
    position: relative;
    display: ${({ fullWidth }) => (fullWidth ? 'flex' : 'inline-flex')};
    min-width: ${({ minWidth }) => minWidth || 'max-content'};
    width: ${({ fullWidth }) => (fullWidth ? '100%' : 'max-content')};
    margin: ${({ theme, fullWidth }) =>
        fullWidth ? `${theme.spacing.S2} 0` : `${theme.spacing.S2} ${theme.spacing.S2} ${theme.spacing.S2} 0`};

    ${TextField.Style} {
        ${({ fullWidth }) => !fullWidth && `max-width: 25.6rem;`}
    }

    ${getDefaultStyle};
    ${({ areOptionsVisible }) => areOptionsVisible && getActiveStyle};
    ${({ isErrorPresent }) => isErrorPresent && getErrorStyle};
    ${({ disabled }) => disabled && getDisabledStyle};
`;
