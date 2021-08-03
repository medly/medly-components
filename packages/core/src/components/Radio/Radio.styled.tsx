import { RadioSizes, RadioTheme } from '@medly-components/theme';
import { css, styled, WithThemeProp } from '@medly-components/utils';
import { rgba } from 'polished';
import { getSelectorLabelPositionStyle } from '../Selectors';
import { RadioProps, WrapperProps } from './types';

const getRadioSize = ({ theme, size }: { size?: RadioSizes } & WithThemeProp) => theme.radio.sizes[size || theme.radio.defaultSize];

export const StyledRadio = styled('div')`
    position: relative;
    transition: all 100ms ease-out;
    box-sizing: border-box;
    border: 0.15rem solid;
    width: 100%;
    height: 100%;
    border-radius: 100%;

    &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 67%;
        height: 67%;
        transform: translate(-50%, -50%) scale(0);
        border-radius: 100%;
        transition: transform 100ms ease-out;
    }
`;

const getStyle = (color: string) => css`
    border-color: ${color};
    &::after {
        background-color: ${color};
    }
`;

const getEventStyle = (event: 'hovered' | 'pressed' | 'focused') => ({
    hasError,
    theme,
    fillColor,
    borderColor
}: RadioTheme & (WrapperProps | RadioProps)) => {
    const state = hasError ? 'error' : 'active';
    const { blurRadius, spreadRadius } = theme.radio.boxShadow;
    const borderColorValue = event !== 'focused' && borderColor[event][state];
    return css`
        border-color: ${borderColorValue};
        box-shadow: 0 0 ${blurRadius} ${spreadRadius} ${rgba(fillColor[state], event === 'pressed' ? 0.5 : 0.35)};
    `;
};

export const HiddenRadio = styled('input').attrs(({ theme }) => ({ type: 'radio', ...theme.radio }))<RadioProps>`
    position: absolute;
    opacity: 0;
    width: 1%;
    height: 1%;
    margin: 0;

    & ~ ${StyledRadio} {
        ${({ fillColor, hasError }) => getStyle(fillColor[hasError ? 'error' : 'default'])};
    }

    &:checked ~ ${StyledRadio} {
        &::after {
            transform: translate(-50%, -50%) scale(1);
        }
    }

    &:disabled ~ ${StyledRadio} {
        ${({ fillColor }) => getStyle(fillColor.disabled)};
    }

    &:not(:disabled) {
        &:checked ~ ${StyledRadio} {
            ${({ fillColor, hasError }) => getStyle(fillColor[hasError ? 'error' : 'active'])};
        }

        &:focus ~ ${StyledRadio} {
            ${getEventStyle('focused')}
        }
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
        ${StyledRadio} {
            ${({ isActive, disabled }) => !isActive && !disabled && getEventStyle('hovered')}
        }
    }

    &:active {
        ${StyledRadio} {
            ${({ isActive, disabled }) => !isActive && !disabled && getEventStyle('pressed')}
        }
    }
`;
