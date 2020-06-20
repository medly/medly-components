import { asterisk, styled, WithThemeProp } from '@medly-components/utils';
import { getSelectorLabelPositionStyle } from '../Checkbox/Checkbox.styled';
import Text from '../Text';
import { Props } from './types';

const getRadioSize = ({ theme, size }: Props & WithThemeProp) => theme.radio.sizes[size || theme.radio.defaultSize];

export const StyledRadio = styled('div')`
    transition: all 100ms ease-out;
    box-sizing: border-box;
    border: 1px solid;
    width: 100%;
    height: 100%;
    z-index: 1;
    border-radius: 100%;
`;

export const HiddenRadio = styled('input').attrs(({ theme }) => ({ type: 'radio', ...theme.radio }))<Props>`
    opacity: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    margin: 0;
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

    & ~ ${StyledRadio} {
        border-color: ${({ borderColor, hasError }) => borderColor[hasError ? 'error' : 'default']};
    }

    &:checked ~ ${StyledRadio} {
        border-width: ${props => `calc(${getRadioSize(props)} / 3) `};
    }

    &:checked:disabled ~ ${StyledRadio} {
        border-color: ${({ disabledBorderColor }) => disabledBorderColor.active};
    }

    &:not(:checked):disabled ~ ${StyledRadio} {
        border-color: ${({ disabledBorderColor }) => disabledBorderColor.default};
    }

    &:not(:disabled):checked ~ ${StyledRadio} {
        border-color: ${({ borderColor, hasError }) => borderColor[hasError ? 'error' : 'active']};
    }
`;

export const RadioWrapper = styled('div')<Props>`
    margin: 0.3rem;
    width: ${getRadioSize};
    height: ${getRadioSize};
    position: relative;
    border-radius: 100%;
`;

export const RadioWithLabelWrapper = styled('label').attrs(({ theme }) => ({ ...theme.radio }))<Props>`
    display: ${({ fullWidth }) => (fullWidth ? 'flex' : 'inline-flex')};
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

    ${getSelectorLabelPositionStyle}

    ${Text.Style} {
        user-select: none;
        ${({ required }) => required && asterisk}
        color: ${({ disabled, labelColor }) => labelColor[disabled ? 'disabled' : 'default']};
        padding: ${({ labelPosition }) => (labelPosition === 'top' || labelPosition === 'bottom' ? '1.6rem 0' : '0 1.6rem')};
    }

    &:hover {
        && ${StyledRadio} {
            border-color: ${({ disabled, hasError, hoveredBorderColor }) => !disabled && hoveredBorderColor[hasError ? 'error' : 'active']}
        }
    }
`;
