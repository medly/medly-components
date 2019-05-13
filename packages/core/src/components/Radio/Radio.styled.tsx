import { defaultTheme } from '@medly-components/theme';
import { styled, WithThemeProp } from '@medly-components/utils';
import { Props, RadioWrapperProps } from './types';

export const RadioWrapperStyled = styled('div')<RadioWrapperProps>`
    width: ${({ theme, radioSize }) => (radioSize ? theme.radio.sizes[radioSize] : theme.radio.defaultSize)};
    height: ${({ theme, radioSize }) => (radioSize ? theme.radio.sizes[radioSize] : theme.radio.defaultSize)};
    position: relative;

    &::before {
        content: '';
        border-radius: 100%;
        border: 1px solid ${({ theme }) => theme.radio.borderColor};
        background: white;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        box-sizing: border-box;
        pointer-events: none;
        z-index: 0;
    }
`;
RadioWrapperStyled.defaultProps = {
    theme: defaultTheme
};

export const RadioFillStyled = styled('div')<WithThemeProp>`
    background-color: ${({ theme }) => theme.radio.fillColor};
    width: 0;
    height: 0;
    border-radius: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: width 0.2s ease-in, height 0.2s ease-in;
    pointer-events: none;
    z-index: 1;
`;
RadioFillStyled.defaultProps = {
    theme: defaultTheme
};

export const RadioStyled = styled('input').attrs({ type: 'radio' })<Props>`
    opacity: 0;
    z-index: 2;
    position: absolute;
    width: 100%;
    height: 100%;
    margin: 0;
    cursor: pointer;

    &:focus {
        outline: none;
    }

    &:checked ~ ${RadioFillStyled} {
        width: calc(75%);
        height: calc(75%);
        transition: width 0.2s ease-out, height 0.2s ease-out;
    }
`;
