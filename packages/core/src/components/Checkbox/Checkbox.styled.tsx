import { CheckIcon, SvgIcon } from '@medly-components/icons';
import { centerAligned, css, styled } from '@medly-components/utils';
import Text from '../Text';
import { CheckboxWrapperProps, Props } from './types';

const activeStyle = ({ theme, hasError, disabled }: CheckboxWrapperProps) => {
    const checkboxState = disabled ? 'disabled' : hasError ? 'error' : 'active',
        colors = theme.checkbox.colors[checkboxState];

    return css`
        border-color: ${colors.bgColor};
        background-color: ${colors.bgColor};
        ${CheckIcon.Style} {
            * {
                fill: ${colors.iconColor};
            }
        }
    `;
};

const nonActiveStyle = ({ theme, hasError, disabled }: CheckboxWrapperProps) => {
    const colors = theme.checkbox.colors;

    return css`
        background-color: transparent;
        border-color: ${disabled ? colors.disabled.iconColor : hasError ? colors.error.bgColor : colors.default.borderColor};
    `;
};

export const Wrapper = styled.div<CheckboxWrapperProps>`
    margin: 0.3rem;
    position: relative;
    border: 1.5px solid;
    box-sizing: border-box;
    width: ${({ theme, size }) => theme.checkbox.sizes[size || theme.checkbox.defaultSize]};
    height: ${({ theme, size }) => theme.checkbox.sizes[size || theme.checkbox.defaultSize]};
    border-radius: 22.2%;

    ${({ isActive }) => (isActive ? activeStyle : nonActiveStyle)};
    ${centerAligned()}
`;

const getPositionStyle = ({ labelPosition, fullWidth }: Props) => {
    switch (labelPosition) {
        case 'top':
            return css`
                padding: ${fullWidth ? '0.8rem 0' : '0.8rem'};
                flex-direction: column;
                justify-content: center;
            `;
        case 'bottom':
            return css`
                padding: ${fullWidth ? '0.8rem 0' : '0.8rem'};
                justify-content: center;
                flex-direction: column-reverse;
            `;
        case 'left':
            return css`
                padding: 0.8rem 0;
                justify-content: flex-start;
                align-items: center;
                flex-direction: row;
            `;
        case 'right':
        default:
            return css`
                padding: 0.8rem 0;
                align-items: center;
                justify-content: flex-end;
                flex-direction: row-reverse;
            `;
    }
};

export const CheckboxWithLabelWrapper = styled('label')<Props & { isActive: boolean }>`
    display: ${({ fullWidth }) => (fullWidth ? 'flex' : 'inline-flex')};
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    * {
        cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    }

    ${getPositionStyle}

    ${Text.Style} {
        color: ${({ theme, disabled }) => theme.checkbox.colors[disabled ? 'disabled' : 'default'].labelColor};
        padding: ${({ labelPosition }) => (labelPosition === 'top' || labelPosition === 'bottom' ? '1.6rem 0' : '0 1.6rem')};
    }

    ${SvgIcon} {
        z-index: 1;
        pointer-events: none;
        position: absolute;
        transition: transform 0.2s ease-in-out;
        transform: ${({ isActive }) => (isActive ? 'scale(0.7)' : 'scale(0)')};
    }

    &:hover {
        ${Wrapper} {
            border-color: ${({ disabled, hasError, theme }) =>
                !disabled && theme.checkbox.colors[hasError ? 'error' : 'active'].hoverBgColor};
            background-color: ${({ isActive, disabled, hasError, theme }) =>
                !disabled && isActive && theme.checkbox.colors[hasError ? 'error' : 'active'].hoverBgColor};
        }
    }
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })<Props>`
    opacity: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    position: absolute;

    &:focus {
        outline: none;
    }
`;
