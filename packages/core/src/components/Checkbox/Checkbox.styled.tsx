import { SvgIcon } from '@medly-components/icons';
import { CheckboxSizes } from '@medly-components/theme/src';
import { centerAligned, css, styled, WithThemeProp } from '@medly-components/utils';
import { getSelectorLabelPositionStyle } from '../Selectors';
import { Props } from './types';

const getCheckboxSize = ({ theme, size }: { size?: CheckboxSizes } & WithThemeProp) =>
    theme.checkbox.sizes[size || theme.checkbox.defaultSize];

const activeStyle = ({ theme, hasError, disabled }: Props) => {
    const checkboxState = disabled ? 'disabled' : hasError ? 'error' : 'active',
        bgColor = theme.checkbox.bgColor[checkboxState];

    return css`
        border-color: ${bgColor};
        background-color: ${bgColor};
        ${SvgIcon} {
            transform: scale(0.7);
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

export const StyledCheckbox = styled.div`
    border: 0.15rem solid;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border-radius: 22.2%;
    transition: all 100ms ease-out;

    ${centerAligned()}

    ${SvgIcon} {
        z-index: 1;
        position: absolute;
        transition: transform 0.2s ease-in-out;
        transform: scale(0);
    }
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })<Props>`
    opacity: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    outline: none;
    position: absolute;

    &:checked {
        & ~ ${StyledCheckbox} {
            ${activeStyle};
        }
    }

    &:not(:checked) {
        & ~ ${StyledCheckbox} {
            ${({ indeterminate }) => (indeterminate ? activeStyle : nonActiveStyle)}
        }
    }
`;

export const CheckboxWrapper = styled('div')`
    margin: 0.3rem;
    width: ${getCheckboxSize};
    height: ${getCheckboxSize};
    position: relative;
`;

export const CheckboxWithLabelWrapper = styled('label').attrs(({ theme }) => ({ ...theme.checkbox }))<Props & { isActive: boolean }>`
    display: ${({ fullWidth }) => (fullWidth ? 'flex' : 'inline-flex')};
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    * {
        cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    }

    ${getSelectorLabelPositionStyle}

    &:hover {
        ${StyledCheckbox} {
            border-color: ${({ disabled, hasError, hoverBgColor }) => !disabled && hoverBgColor[hasError ? 'error' : 'active']};
            background-color: ${({ disabled, hasError, hoverBgColor, isActive }) =>
                !disabled && isActive && hoverBgColor[hasError ? 'error' : 'active']};
        }
    }
`;
