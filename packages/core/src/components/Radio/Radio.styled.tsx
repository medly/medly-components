import { RadioSizes } from '@medly-components/theme';
import { css, styled, WithThemeProp } from '@medly-components/utils';
import { rgba } from 'polished';
import { getSelectorLabelPositionStyle } from '../Selectors';
import { Props, WrapperProps } from './types';

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

export const HiddenRadio = styled('input').attrs(({ theme }) => ({ type: 'radio', ...theme.radio }))<Props>`
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
            border-color: ${({ fillColor, hasError }) => fillColor.hovered[hasError ? 'error' : 'default']};
            box-shadow: ${({ fillColor, hasError, theme }) =>
                `0 0 ${theme.radio.boxShadow.blurRadius} ${theme.radio.boxShadow.spreadRadius} ${rgba(
                    fillColor[hasError ? 'error' : 'active'],
                    0.35
                )}`};
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
        ${({ isActive, disabled, hasError, fillColor, theme }) =>
            !isActive &&
            !disabled &&
            css`
                && ${StyledRadio} {
                    border-color: ${fillColor.hovered[hasError ? 'error' : 'default']};
                    box-shadow: ${`0 0 ${theme.radio.boxShadow.blurRadius} ${theme.radio.boxShadow.spreadRadius} ${rgba(
                        fillColor[hasError ? 'error' : 'active'],
                        0.35
                    )}`};
                }
            `}
    }

    &:active {
        ${({ isActive, disabled, hasError, fillColor, theme }) =>
            !isActive &&
            !disabled &&
            css`
                && ${/* sc-selector */ StyledRadio} {
                    border-color: ${fillColor.hovered[hasError ? 'error' : 'default']};
                    box-shadow: ${`0 0 ${theme.radio.boxShadow.blurRadius} ${theme.radio.boxShadow.spreadRadius} ${rgba(
                        fillColor[hasError ? 'error' : 'active'],
                        0.5
                    )}`};
                }
            `}
    }
`;
