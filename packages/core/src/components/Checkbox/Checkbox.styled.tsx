import { CheckIcon } from '@medly-components/icons';
import { defaultTheme } from '@medly-components/theme';
import { centerAligned, css, styled } from '@medly-components/utils';
import FieldWithLabel from '../FieldWithLabel';
import { CheckboxWrapperProps, Props } from './types';

const activeStyle = ({ theme, error, disabled }: CheckboxWrapperProps) => {
    const color = disabled ? 'disabled' : error ? 'error' : 'confirmation';
    return css`
        border-color: ${theme.checkbox.colors[color].bgColor};
        background-color: ${theme.checkbox.colors[color].bgColor};
        ${CheckIcon.Style} {
            * {
                fill: ${theme.checkbox.colors[color].iconColor};
            }
        }

        &:hover {
            border-color: ${theme.checkbox.colors[color].hoverBgColor};
            background-color: ${theme.checkbox.colors[color].hoverBgColor};
            ${CheckIcon.Style} {
                * {
                    fill: ${theme.checkbox.colors[color].iconColor};
                }
            }
        }
    `;
};
const nonActiveStyle = ({ theme, error, disabled }: CheckboxWrapperProps) => {
    const colors = theme.checkbox.colors,
        color = error ? 'error' : 'confirmation';

    return css`
        background-color: transparent;
        border-color: ${disabled ? colors.disabled.iconColor : error ? colors.error.bgColor : theme.checkbox.colors.default.borderColor};

        &:hover {
            border-color: ${disabled ? colors.disabled.iconColor : colors[color].hoverBgColor};
        }
    `;
};

export const Wrapper = styled.div<CheckboxWrapperProps>`
    position: relative;
    border: 1px solid;
    width: ${({ theme, size }) => theme.checkbox.sizes[size || theme.checkbox.defaultSize]};
    height: ${({ theme, size }) => theme.checkbox.sizes[size || theme.checkbox.defaultSize]};
    border-radius: 15%;

    ${({ isActive }) => (isActive ? activeStyle : nonActiveStyle)};
    ${centerAligned()}
`;

Wrapper.defaultProps = {
    theme: defaultTheme
};

export const CheckboxWithLabelWrapper = styled(FieldWithLabel)<Props>`
    label {
        color: ${({ theme, disabled }) => theme.checkbox.colors[disabled ? 'disabled' : 'default'].labelColor};
    }

    &:hover {
        ${Wrapper} {
            border-color: ${({ disabled, error, theme }) =>
                !disabled && theme.checkbox.colors[error ? 'error' : 'confirmation'].hoverBgColor};
        }
    }
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })<Props>`
    opacity: 0;
    z-index: 100;
    width: 100%;
    height: 100%;
    position: absolute;
    margin: 0;
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

    & + ${CheckIcon.Style} {
        z-index: 1;
        position: absolute;
        transform: scale(0);
        transition: transform 0.2s ease-in-out;
    }

    &:focus {
        outline: none;
    }

    &:checked + ${CheckIcon.Style} {
        transform: scale(0.7);
    }
`;
