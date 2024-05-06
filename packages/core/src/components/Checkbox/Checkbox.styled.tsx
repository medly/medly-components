import { SvgIcon } from '@medly-components/icons';
import { CheckboxSizes } from '@medly-components/theme';
import { WithThemeProp, centerAligned } from '@medly-components/utils';
import { rgba } from 'polished';
import styled, { css } from 'styled-components';
import { getSelectorLabelPositionStyle } from '../Selectors';
import Text from '../Text';
import { CheckboxProps } from './types';

const getCheckboxSize = ({ theme, size }: { size?: CheckboxSizes } & WithThemeProp) =>
    theme.checkbox.sizes[size || theme.checkbox.defaultSize];

const activeStyle = ({ hasError, disabled, theme }: CheckboxProps & WithThemeProp) => {
    const checkboxState = disabled ? 'disabled' : hasError ? 'error' : 'active';

    return css`
        border-color: ${theme.checkbox.bgColor[checkboxState]};
        background-color: ${theme.checkbox.bgColor[checkboxState]};
        ${SvgIcon} {
            transform: scale(1);
            * {
                fill: ${theme.checkbox.iconColor[checkboxState]};
            }
        }
    `;
};

const nonActiveStyle = ({ theme, hasError, disabled }: CheckboxProps & WithThemeProp) => {
    const checkboxState = disabled ? 'disabled' : hasError ? 'error' : 'default';

    return css`
        background-color: transparent;
        border-color: ${theme.checkbox.borderColor[checkboxState]};
    `;
};

const getEventStyle =
    (event: 'hovered' | 'pressed' | 'focused') =>
    ({ isActive, hasError, theme }: CheckboxProps & { isActive?: boolean } & WithThemeProp) => {
        const state = hasError ? 'error' : 'active';
        const borderColorEventValue = event === 'pressed' ? 'pressed' : state;
        const { blurRadius, spreadRadius } = theme.checkbox.boxShadow;
        return css`
            box-shadow: 0 0 ${blurRadius} ${spreadRadius} ${rgba(theme.checkbox.borderColor[state], event === 'pressed' ? 0.5 : 0.35)};
            border-color: ${event !== 'focused' && isActive
                ? theme.checkbox.bgColor[event][state]
                : theme.checkbox.borderColor[borderColorEventValue]};
            background-color: ${isActive && event !== 'focused' && theme.checkbox.bgColor[event][state]};
        `;
    };

export const StyledCheckbox = styled.div`
    border: 0.15rem solid;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border-radius: ${({ theme }) => theme.checkbox.borderRadius};
    transition: all 100ms ease-out;

    ${centerAligned('flex')}

    ${SvgIcon} {
        pointer-events: none;
        z-index: 1;
        transition: all 200ms ease-in-out;
        transform: scale(0);
        width: 100%;
        height: 100%;
        margin-right: 0.05rem;
    }
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })<CheckboxProps>`
    opacity: 0;
    margin: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    outline: none;
    position: absolute;

    &:checked ~ ${StyledCheckbox} {
        ${activeStyle};
    }

    &:not(:checked) ~ ${StyledCheckbox} {
        ${({ indeterminate }) => (indeterminate ? activeStyle : nonActiveStyle)}
    }

    &:not(:disabled) {
        &:focus {
            & ~ ${StyledCheckbox} {
                ${getEventStyle('focused')}
            }

            &:not(:checked) ~ ${StyledCheckbox} {
                border-color: ${({ hasError, theme, indeterminate }) =>
                    !indeterminate && theme.checkbox.borderColor[hasError ? 'error' : 'active']};
            }
        }
    }
`;

export const CheckboxWrapper = styled('div')<{ size: CheckboxSizes }>`
    margin: 0.3rem;
    flex-shrink: 0;
    width: ${getCheckboxSize};
    height: ${getCheckboxSize};
    position: relative;
`;

export const ErrorText = styled(Text)<{ disabled?: boolean }>`
    display: block;
    font-size: 1.2rem;
    line-height: 1.6rem;
    color: ${({ theme, disabled }) => theme.checkbox.helperTextColor[disabled ? 'disabled' : 'error']};
    margin-bottom: 0.5rem;
`;

export const CheckboxWithLabelWrapper = styled('label')<CheckboxProps & { isActive?: boolean; isHovered?: boolean }>`
    display: ${({ fullWidth }) => (fullWidth ? 'flex' : 'inline-flex')};
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    * {
        cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    }
    background-color: ${({ theme, isHovered, disabled }) => !disabled && isHovered && theme.colors.grey[50]};

    ${getSelectorLabelPositionStyle}

    &&&:hover {
        ${StyledCheckbox} {
            ${({ disabled }) => !disabled && getEventStyle('hovered')};
        }
    }

    &&&:active {
        ${StyledCheckbox} {
            ${({ disabled }) => !disabled && getEventStyle('pressed')};
        }
    }
`;
