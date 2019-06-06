import { defaultTheme } from '@medly-components/theme';
import { centerAligned, styled, WithThemeProp } from '@medly-components/utils';
import { Props, RadioWrapperProps } from './types';

export const RadioWrapperStyled = styled('div')<RadioWrapperProps>`
    width: ${({ theme, size }) => (size ? theme.radio.sizes[size] : theme.radio.defaultSize)};
    height: ${({ theme, size }) => (size ? theme.radio.sizes[size] : theme.radio.defaultSize)};
    position: relative;
    border-radius: 100%;
    border: 1px solid ${({ theme }) => theme.radio.borderColor};
    background-color: ${({ theme }) => theme.radio.bgColor};

    ${centerAligned()}
`;
RadioWrapperStyled.defaultProps = {
    theme: defaultTheme
};

export const RadioFillStyled = styled('div')<WithThemeProp>`
    background-color: ${({ theme }) => theme.radio.fillColor};
    width: 0;
    height: 0;
    z-index: 1;
    border-radius: 100%;
    ${centerAligned()}
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
        transition: width 0.2s ease, height 0.2s ease;
    }
`;
