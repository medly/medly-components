import { CheckIcon } from '@medly-components/icons';
import { defaultTheme } from '@medly-components/theme';
import { centerAligned, styled, WithThemeProp } from '@medly-components/utils';
import { CheckboxWrapperProps, Props } from './types';

export const Wrapper = styled('div')<CheckboxWrapperProps>`
    position: relative;
    width: ${({ theme, size }) => (size ? theme.checkbox.sizes[size] : theme.checkbox.defaultSize)};
    height: ${({ theme, size }) => (size ? theme.checkbox.sizes[size] : theme.checkbox.defaultSize)};
    border: 1px solid ${({ theme }) => theme.checkbox.borderColor};
    border-radius: 15%;

    &:focus-within {
        box-shadow: 0 0 0 1pt ${({ theme }) => theme.checkbox.outlineColor};
    }

    & > * {
        width: 100%;
        height: 100%;
        border-radius: 15%;
    }

    ${centerAligned()}
`;
Wrapper.defaultProps = {
    theme: defaultTheme
};

export const CheckIconWrapper = styled('div')<WithThemeProp>`
    z-index: 1;
    position: absolute;
    background-color: ${({ theme }) => theme.checkbox.bgColor};

    ${CheckIcon.Style} {
        width: 0;
        height: 0;
        transition: width 0.2s ease, height 0.2s ease;
    }

    ${centerAligned()}
`;
CheckIconWrapper.defaultProps = {
    theme: defaultTheme
};

export const Checkbox = styled('input').attrs({ type: 'checkbox' })<Props>`
    opacity: 0;
    z-index: 2;
    position: absolute;
    margin: 0;
    cursor: pointer;

    &:focus {
        outline: none;
    }

    &:disabled {
        cursor: not-allowed;
        & + ${CheckIconWrapper} {
            background: ${({ theme }) => theme.checkbox.disabledBgColor};
        }
    }

    &:checked + ${CheckIconWrapper} {
        ${CheckIcon.Style} {
            width: calc(70%);
            height: calc(70%);
        }
    }
`;
