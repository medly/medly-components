import { RadioSizes } from '@medly-components/theme';
import { styled, WithThemeProp } from '@medly-components/utils';
import { getSelectorLabelPositionStyle } from '../Selectors';
import { Props, WrapperProps } from './types';

const getRadioSize = ({ theme, size }: { size?: RadioSizes } & WithThemeProp) => theme.radio.sizes[size || theme.radio.defaultSize];

export const StyledRadio = styled('div')`
    transition: all 100ms ease-out;
    box-sizing: border-box;
    border: 0.15rem solid;
    width: 100%;
    height: 100%;
    border-radius: 100%;
`;

export const HiddenRadio = styled('input').attrs(({ theme }) => ({ type: 'radio', ...theme.radio }))<Props>`
    position: absolute;
    opacity: 0;
    width: 1%;
    height: 1%;
    margin: 0;

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

    &:not(:disabled):checked ~ ${StyledRadio}, &:not(:disabled):focus ~ ${StyledRadio} {
        border-color: ${({ borderColor, hasError }) => borderColor[hasError ? 'error' : 'active']};
    }
`;

export const RadioWrapper = styled('div')<WrapperProps>`
    margin: 0.3rem;
    width: ${getRadioSize};
    height: ${getRadioSize};
    position: relative;
    border-radius: 100%;
`;

export const RadioWithLabelWrapper = styled('label').attrs(({ theme }) => ({ ...theme.radio }))<WrapperProps>`
    display: ${({ fullWidth }) => (fullWidth ? 'flex' : 'inline-flex')};
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

    ${getSelectorLabelPositionStyle}

    &:hover {
        && ${StyledRadio} {
            border-color: ${({ disabled, hasError, hoveredBorderColor }) => !disabled && hoveredBorderColor[hasError ? 'error' : 'active']};
        }
    }
`;
