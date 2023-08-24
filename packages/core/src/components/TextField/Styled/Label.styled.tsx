import { getFontStyle } from '@medly-components/utils';
import styled, { css } from 'styled-components';
import { TextFieldVariants } from '../types';

const getStyle = (variant: TextFieldVariants, required?: boolean) => {
    if (required && variant !== 'fusion') {
        return css`
            ::after {
                content: ' *';
            }
        `;
    } else if (!required && variant === 'fusion') {
        return css`
            ::after {
                content: ' (optional)';
            }
        `;
    }
};

export const Label = styled('label')<{
    required?: boolean;
    variant: TextFieldVariants;
    size: 'S' | 'M';
    multiline?: boolean;
    inputWidth: number;
}>`
    top: ${({ multiline }) => (multiline ? '1.1rem' : '50%')};
    left: 0;
    cursor: text;
    user-select: none;
    position: absolute;
    pointer-events: none;
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
    ${({ theme, size }) => getFontStyle({ theme, fontVariant: theme.textField.textVariant[size] })}
    transform-origin: 0 0;
    touch-action: manipulation;
    transform: translateY(-50%);
    opacity: 1;
    z-index: 1;
    width: 100%;
    max-width: min-content;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    ${({ required, variant }) => getStyle(variant, required)}
`;
