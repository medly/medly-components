import { CheckIcon } from '@medly-components/icons';
import { defaultTheme } from '@medly-components/theme';
import { centerAligned, css, styled } from '@medly-components/utils';
import { CheckboxColors, CheckboxWrapperProps, Props } from './types';

const getStyle = (colors: CheckboxColors) => css`
    border: 1px solid ${colors.borderColor};
    background-color: ${colors.bgColor};

    /* box-shadow: 0 0 0 1pt ${colors.outlineColor}; */
    ${CheckIcon.Style} {
        * {
            fill: ${colors.iconColor};
        }
    }
`;

export const Wrapper = styled('div')<CheckboxWrapperProps>`
    position: relative;
    width: ${({ theme, size }) => theme.checkbox.sizes[size || theme.checkbox.defaultSize]};
    height: ${({ theme, size }) => theme.checkbox.sizes[size || theme.checkbox.defaultSize]};
    border-radius: 15%;
    border: 1px solid ${({ theme, isActive }) => theme.checkbox.colors[isActive ? 'active' : 'default'].borderColor};
    background-color: ${({ theme, isActive }) => theme.checkbox.colors[isActive ? 'active' : 'default'].bgColor};

    ${CheckIcon.Style} {
        * {
            fill: ${({ theme, isActive }) => theme.checkbox.colors[isActive ? 'active' : 'default'].iconColor};
        }
    }

    &:hover {
        border: 1px solid ${({ theme }) => theme.checkbox.colors.hover.borderColor};
        background-color: ${({ theme, isActive, disabled }) => {
            if (disabled) {
                return theme.checkbox.colors[isActive ? 'checkedDisabled' : 'disabled'].bgColor;
            } else {
                return theme.checkbox.colors[isActive ? 'hover' : 'default'].bgColor;
            }
        }};
    }

    ${({ isActive, disabled, error, theme }) => {
        const { checkedDisabled, checkedError, error: errorStyle, disabled: disabledStyle } = theme.checkbox.colors;

        if (isActive && disabled) {
            return getStyle(checkedDisabled);
        }

        if (isActive && error) {
            return getStyle(checkedError);
        }

        if (error) {
            return getStyle(errorStyle);
        }

        if (disabled) {
            return getStyle(disabledStyle);
        }
    }}

    ${centerAligned()}
`;

Wrapper.defaultProps = {
    theme: defaultTheme
};

export const Checkbox = styled('input').attrs({ type: 'checkbox' })<Props>`
    opacity: 0;
    z-index: 100;
    width: 100%;
    height: 100%;
    position: absolute;
    margin: 0;
    cursor: pointer;

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
