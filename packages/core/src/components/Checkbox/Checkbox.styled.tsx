import { CheckIcon } from '@medly-components/icons';
import { defaultTheme } from '@medly-components/theme';
import { centerAligned, styled, WithThemeProp } from '@medly-components/utils';
import { CheckboxWrapperProps, Props } from './types';

export const CheckboxWrapperStyled = styled('div')<CheckboxWrapperProps>`
    width: ${({ theme, size }) => (size ? theme.checkbox.sizes[size] : theme.checkbox.defaultSize)};
    height: ${({ theme, size }) => (size ? theme.checkbox.sizes[size] : theme.checkbox.defaultSize)};
    position: relative;
    border: 1px solid ${({ theme }) => theme.checkbox.borderColor};
    background-color: ${({ theme, disabled }) => (disabled ? theme.checkbox.disabledBgcolor : theme.checkbox.bgColor)};
    border-radius: 15%;

    &:focus-within {
        box-shadow: 0 0 0 1pt ${({ theme }) => theme.checkbox.outlineColor};
    }

    ${centerAligned()}
`;
CheckboxWrapperStyled.defaultProps = {
    theme: defaultTheme
};

export const CheckboxFillStyled = styled('div')<WithThemeProp>`
    width: 0;
    height: 0;
    z-index: 1;

    ${centerAligned()}

    ${CheckIcon.Style} {
        width: 100%;
        height: 100%;
    }
`;
CheckboxFillStyled.defaultProps = {
    theme: defaultTheme
};

export const CheckboxStyled = styled('input').attrs({ type: 'checkbox' })<Props>`
    opacity: 0;
    z-index: 2;
    position: absolute;
    width: 100%;
    height: 100%;
    margin: 0;
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

    &:focus {
        outline: none;
    }

    &:disabled {
        cursor: not-allowed;
    }

    &:checked ~ ${CheckboxFillStyled} {
        width: calc(70%);
        height: calc(70%);
        transition: width 0.2s ease, height 0.2s ease;
    }
`;
