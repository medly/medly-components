import { styled } from '@medly-components/utils';
import Text from '../Text';
import { CheckboxGroupWrapperProps } from './types';

export const CheckboxGroupWrapper = styled('div')<CheckboxGroupWrapperProps>`
    display: ${({ fullWidth }) => (fullWidth ? 'flex' : 'inline-flex')};
    flex-direction: column;
    align-items: flex-start;

    & > :first-child {
        margin-bottom: ${({ hasHelperOrErrorText }) => !hasHelperOrErrorText && '0.9rem'};
    }

    & > ${Text.Style} {
        user-select: none;
        cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'inherit')};
        color: ${({ theme, disabled }) => theme.checkbox.labelColor[disabled ? 'disabled' : 'default']};
    }
`;

export const CheckboxGroupOptions = styled('div')<{ columns: number; isIndented: boolean }>`
    display: grid;
    grid-template-columns: ${({ columns }) => `repeat(${columns}, 1fr) `};
    margin-left: ${({ isIndented }) => isIndented && '4rem'};
`;

export const CheckboxGroupHelperText = styled('span')<{ hasError: boolean; isIndented: boolean; disabled: boolean }>`
    white-space: initial;
    font-size: ${({ hasError }) => (hasError ? '1.2rem' : '1.4rem')};
    line-height: ${({ hasError }) => (hasError ? '1.6rem' : '2.2rem')};
    margin-left: ${({ isIndented }) => isIndented && '4rem'};
    margin-top: ${({ hasError }) => !hasError && '0.3rem'};
    margin-bottom: ${({ hasError }) => (hasError ? '1.3rem' : '1.8rem')};
    color: ${({ hasError, theme, disabled }) => theme.checkbox.helperTextColor[disabled ? 'disabled' : hasError ? 'error' : 'default']};
`;
