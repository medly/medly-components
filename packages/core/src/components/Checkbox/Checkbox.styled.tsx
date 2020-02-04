import { CheckIcon } from '@medly-components/icons';
import { defaultTheme } from '@medly-components/theme';
import { centerAligned, styled } from '@medly-components/utils';
import { CheckboxWrapperProps, Props } from './types';

export const Wrapper = styled('div')<CheckboxWrapperProps>`
    position: relative;
    width: ${({ theme, size }) => (size ? theme.checkbox.sizes[size] : theme.checkbox.defaultSize)};
    height: ${({ theme, size }) => (size ? theme.checkbox.sizes[size] : theme.checkbox.defaultSize)};
    border: 1px solid ${({ theme }) => theme.checkbox.borderColor};
    background-color: ${({ theme, disabled }) => (disabled ? theme.checkbox.disabledBgColor : theme.checkbox.bgColor)};
    border-radius: 15%;

    &:focus-within {
        box-shadow: 0 0 0 1pt ${({ theme }) => theme.checkbox.outlineColor};
    }

    ${centerAligned()}
`;
Wrapper.defaultProps = {
    theme: defaultTheme
};

export const Checkbox = styled('input').attrs({ type: 'checkbox' })<Props>`
    opacity: 0;
    z-index: 100;
    width: 100%;
    height: 100%;
    position: absolute;
    margin: 0;
    cursor: pointer;

    & + ${CheckIcon.Style} {
        z-index: 1;
        position: absolute;
        transform: scale(0);
        transition: transform 0.2s ease-in-out;
    }

    &:focus {
        outline: none;
    }

    &:disabled {
        cursor: not-allowed;
    }

    &:checked + ${CheckIcon.Style} {
        transform: scale(0.7);
    }
`;
