import { CheckIcon, SvgIcon } from '@medly-components/icons';
import { centerAligned, css, styled } from '@medly-components/utils';
import Text from '../Text';
import { Props } from './types';

const activeStyle = ({ theme, hasError, disabled }: Props) => {
    const checkboxState = disabled ? 'disabled' : hasError ? 'error' : 'active',
        bgColor = theme.checkbox.bgColor[checkboxState];

    return css`
        border-color: ${bgColor};
        background-color: ${bgColor};
        ${CheckIcon.Style} {
            * {
                fill: ${theme.checkbox.iconColor[checkboxState]};
            }
        }
    `;
};

const nonActiveStyle = ({ theme, hasError, disabled }: Props) => {
    const checkboxState = disabled ? 'disabled' : hasError ? 'error' : 'default';

    return css`
        background-color: transparent;
        border-color: ${theme.checkbox.borderColor[checkboxState]};
    `;
};

export const Wrapper = styled.div<Props & { isActive?: boolean }>`
    margin: 0.3rem;
    position: relative;
    border: 0.15rem solid;
    box-sizing: border-box;
    width: ${({ theme, size }) => theme.checkbox.sizes[size || theme.checkbox.defaultSize]};
    height: ${({ theme, size }) => theme.checkbox.sizes[size || theme.checkbox.defaultSize]};
    border-radius: 22.2%;
    transition: all 100ms ease-out;

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
        user-select: none;
        color: ${({ theme, disabled }) => theme.checkbox.labelColor[disabled ? 'disabled' : 'default']};
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
            border-color: ${({ disabled, hasError, theme }) => !disabled && theme.checkbox.hoverBgColor[hasError ? 'error' : 'active']};
            background-color: ${({ isActive, disabled, hasError, theme }) =>
                !disabled && isActive && theme.checkbox.hoverBgColor[hasError ? 'error' : 'active']};
        }
    }
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
    opacity: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    position: absolute;

    &:focus {
        outline: none;
    }
`;
